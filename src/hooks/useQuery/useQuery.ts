import { useCallback, useEffect, useRef, useState } from 'react';

import { UseQueryState } from './types';

export type UseQueryMiddleware = {
  success?: Function[];
  failure?: Function[];
  finally?: Function[];
};
export type UseQueryProps = {
  auto?: boolean;
  middleware?: UseQueryMiddleware;
  persistState?: boolean;
};

export type UseQueryResponse<T> = UseQueryState<T> & {
  callPromise: (
    promise: Promise<T>,
    middleware?: UseQueryMiddleware
  ) => Promise<T>;
};

export function useQuery<T>(promise?: Promise<T>, config?: UseQueryProps) {
  const { auto = true, middleware = {}, persistState = false } = config ?? {};
  const quoqueRef = useRef<Array<any>>([]);

  const [data, setData] = useState<unknown>(null);
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const loadingCallback = useCallback(() => {
    if (persistState && quoqueRef.current?.length > 0) {
      return;
    }
    setData(null);
    setError(null);
    setLoading(true);
  }, [persistState]);

  const successCallback = useCallback((payload: T) => {
    setData((prev: T) => {
      if (JSON.stringify(prev) === JSON.stringify(payload)) return prev;
      return payload;
    });
    setError(null);
    setLoading(false);
  }, []);

  const errorCallback = useCallback((error: unknown) => {
    setData(null);
    setError(error);
    setLoading(false);
  }, []);

  const callPromise = useCallback(
    async (promise: Promise<T>, middleware?: UseQueryMiddleware) => {
      quoqueRef.current.push(promise);
      loadingCallback();
      try {
        const payload = await promise;
        middleware?.success?.reduce((previous, fun) => fun(previous), payload);
        successCallback(payload);
      } catch (error) {
        middleware?.failure?.reduce((previous, fun) => fun(previous), error);
        errorCallback(error);
      } finally {
        middleware?.finally?.reduce((previous, fun) => fun(previous));
      }
    },
    [errorCallback, loadingCallback, successCallback]
  );

  useEffect(() => {
    if (auto && promise) {
      callPromise(promise, middleware);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, error, loading, callPromise } as UseQueryResponse<T>;
}

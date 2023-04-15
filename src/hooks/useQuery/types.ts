export type UseQueryState<T = unknown> = {
  loading: boolean;
  data: T;
  error: unknown;
};

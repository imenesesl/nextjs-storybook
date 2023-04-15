import { useState } from 'react';

import { useQuery } from '../../hooks/useQuery';
import debounce from '../../utils/debounce';

import { AutosuggestAPIResponse, getSuggestedItemsByQuery } from './api';
export const useSuggestedItems = () => {
  const { callPromise, data } = useQuery<AutosuggestAPIResponse>(undefined, {
    persistState: true,
    auto: false,
  });

  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const onCallService = (query: string) => {
    setQuery(query);
    setLoading(true);
    debounce(() => {
      callPromise(getSuggestedItemsByQuery({ query }));
      setLoading(false);
    }, 1000)();
  };

  return { onCallService, query, data, loading };
};

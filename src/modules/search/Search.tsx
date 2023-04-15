import React, { useMemo } from 'react';

import { Autocomplete } from '../../components';

import { useSuggestedItems } from './useSuggestedItems';

export const Search = () => {
  const { data, loading, onCallService, query } = useSuggestedItems();

  const items = useMemo(() => {
    if (!data?.suggested_queries) return [];
    return data.suggested_queries.map(({ q }) => ({ text: q }));
  }, [data]);

  return (
    <Autocomplete
      items={items}
      onSearch={onCallService}
      query={query}
      loading={loading}
    />
  );
};

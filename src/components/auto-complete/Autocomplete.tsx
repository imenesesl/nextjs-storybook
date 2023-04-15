import React, { useCallback } from 'react';

import { HighlightText } from './HighlightText';
import {
  SectionContainer,
  TextField,
  SearchButton,
  SearchIcon,
  ResultsContainer,
  Loader,
} from './styled';

export type ItemProps = {
  text: string;
};

export type AutocompleteProps = {
  query: string;
  onSearch: (value: string) => void;
  defaultQuery?: string;
  items: ItemProps[];
  loading: boolean;
};

export const Autocomplete = ({
  onSearch,
  query,
  defaultQuery,
  items,
  loading,
}: AutocompleteProps) => {
  const onSearchHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onSearch(event.target.value);
    },
    [onSearch]
  );

  return (
    <SectionContainer>
      <TextField
        value={query}
        defaultValue={defaultQuery}
        onChange={onSearchHandler}
        placeholder="Find your perfect product here!..."
      />
      <SearchButton>
        <SearchIcon />
      </SearchButton>
      <ResultsContainer>
        {loading && <Loader />}
        {items?.length && query?.length && !loading ? (
          items.map(({ text }) => (
            <HighlightText key={text} query={query} text={text} />
          ))
        ) : (
          <></>
        )}
        {!items?.length && query?.length && !loading ? (
          <HighlightText query={query} text={`No results for ${query}`} />
        ) : (
          <></>
        )}
      </ResultsContainer>
    </SectionContainer>
  );
};

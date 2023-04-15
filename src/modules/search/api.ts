export type SuggestedItems = {
  q: string;
  match_start: string;
  match_end: string;
};

export type AutosuggestAPIResponse = {
  q: string;
  suggested_queries: SuggestedItems[];
};

export type AutosuggestAPIRequest = {
  query: string;
  limit?: number;
};

export const getSuggestedItemsByQuery = async ({
  query,
  limit = 6,
}: AutosuggestAPIRequest): Promise<AutosuggestAPIResponse> => {
  const response = await fetch(
    // The best way to avoid having hardcoded uris, we need to use .env files and update those files according to the environment
    `https://http2.mlstatic.com/resources/sites/MCO/autosuggest?limit=${limit}&q=${query}`
  );
  const data = await response.json();
  return data;
};

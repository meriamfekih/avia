export const getAirLineLogoUrl = (airlineCode: string) =>
  `https://content.airhex.com/content/logos/airlines_${airlineCode}_100_50_r.png?proportions=keep`;

export const updateSearchParams = (
  searchParams: URLSearchParams,
  params: Record<string, string>
): URLSearchParams => {
  const updateSearchParams = new URLSearchParams(searchParams);
  Object.keys(params).forEach((key) =>
    params[key] !== ""
      ? updateSearchParams.set(key, params[key])
      : updateSearchParams.delete(key)
  );
  return updateSearchParams;
};

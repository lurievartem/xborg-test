import { useQuery } from 'react-query';
import { fetchData } from '@/app/utils/fetchData';

export const useGetCity = (text) => {
  const cityUrl = `https://api.geoapify.com/v1/geocode/autocomplete?text=${text}&apiKey=${process.env.NEXT_PUBLIC_CITY_KEY}`

  return useQuery(['weatherKey', text], () => fetchData(cityUrl), {
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    retry: false,
    enabled: !!text,
    keepPreviousData: true,
    select: data => data.features,
  });
};

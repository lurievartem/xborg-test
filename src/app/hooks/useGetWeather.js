import { useQuery } from 'react-query';
import { fetchData } from '@/app/utils/fetchData';

export const useGetWeather = (cityName) => {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  return useQuery(['weatherKey', cityName], (cityName) => fetchData(weatherUrl), {
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    retry: false,
    enabled: !!cityName,
    keepPreviousData: true,
    select: data => data.main,
  });
};

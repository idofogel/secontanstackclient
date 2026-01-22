import { QueryClient } from '@tanstack/react-query';

export const queryCli = new QueryClient({defaultOptions:{queries:{
    staleTime: 60000,
    refetchOnWindowFocus: true,
    retry:4
}}});
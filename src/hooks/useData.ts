import { useEffect, useState } from 'react';
import service from '../service/service';

interface ApiResponse {
  sdata: any;
  error: string | null;
  loading: boolean;
}

export function useData(): ApiResponse {
  const [sdata, setData] = useState<null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response: any = await service.fetchUserData();
        const filtered = response.map((item: any, index: number) =>  {return {value: item.country, id: index} } )
        setData(filtered);
      } catch (err) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();

   
  }, []);

  return { sdata, error, loading };
}

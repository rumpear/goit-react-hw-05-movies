import { useEffect, useState } from 'react';

export const useFetch = (request, deps) => {
  const [state, setState] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const data = await request();
        console.log('useEffect', data);
        setState(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, deps);
  console.log(state, 'after useEffect');
  return [state, loading, error];
};

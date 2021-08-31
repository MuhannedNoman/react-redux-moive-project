import { useEffect, useState } from 'react';
import axios from 'axios';

// take in the url
const useMoviesFetch = (url) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState(null);

    // Fetching Data
    useEffect(() => {
        try {
          const fetchData = async () => {
            await axios.get(url).then((movies) => {
              setData(movies.data);
              setIsLoaded(true);
            });
          };
          fetchData();
        } catch (error) {
          console.log('🚀 ~ file: useMovieFetch.js ~ line 20 ~ useEffect ~ error', error);
    
        }
      }, [url]);
    
    return { data, isLoaded };
};

export default useMoviesFetch;
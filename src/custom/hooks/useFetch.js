import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    try {
      setIsPending(true);
      const options = {};
      
      (async () => {
        const response = await fetch(url, { ...options }, signal);
        if (signal.aborted) {
          throw Error("Fetching data aborted!");
        } else {
          if (!response.ok) {
            throw Error("Sorry we can't find data");
          } else {
            const data = await response.json();
            setIsPending(false);
            setData(data);
          }
        }
      })();
    } catch (err) {
      if (err) {
        setError(err);
        setIsPending(false);
      }
    }
    return () => abortController.abort();
  }, [url]);

  return [data, error, isPending];
};

export default useFetch;

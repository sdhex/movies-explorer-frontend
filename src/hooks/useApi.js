import { useState } from 'react';

export const useApi = (request) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRequest = (requestData) => {
    setIsLoading(true);

    return request(requestData)
      .then((response) => {
        setData(response);
        setError(null);
        setIsLoading(false);
        return response;
      })
      .catch((err) => {
        console.error('Ошибка во время запроса:', err);
        setError(err);
        setIsLoading(false);
        throw err;
      });
  };

  return {
    data,
    error,
    isLoading,
    handleRequest,
  };
};

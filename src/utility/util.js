import React, { useState, useEffect } from 'react';

export const useFetch = (url, method, payload) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const options = {
    method: method || 'GET',
    data: payload || {}
  }
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  return { response, error, isLoading };
};
/* 
export const customeAPIHook = (url, method, payload) => {
  let response = null;
  let error = null;
  let isLoading = false;
  const options = {
    method: method || 'GET',
    data: payload || {}
  }
  const fetchData = async () => {
    try {
      const res = await fetch(url, options);
      const json = await res.json();
      response = json;
      isLoading =false;
      return { response, error, isLoading };
    } catch(e){
      error = e;
      return { response, error, isLoading };
    }
  }
  fetchData();
} */

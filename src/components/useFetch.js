import React, { useEffect, useState } from "react";

 const  useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiCall = await fetch(url);
        const result = await apiCall.json();
        setData(result);
        console.log(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    //function call
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
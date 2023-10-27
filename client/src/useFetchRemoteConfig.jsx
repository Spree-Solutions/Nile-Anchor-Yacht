import { useEffect, useState } from "react";
import fetchRemoteConfig from "./remoteConfig";

function useFetchRemoteConfig(configKeys) {
  const [config, setConfig] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const values = await fetchRemoteConfig(configKeys);
        setConfig(values);
      } catch (error) {
        console.log("Error from Fetch Config", error);
      }
      setLoading(false);
    };
  
    fetchData();
  }, [configKeys.length]);
  


  return [config, isLoading];
}

export default useFetchRemoteConfig;

import React, { createContext, useState, useEffect } from "react";
import useFetchRemoteConfig from "./useFetchRemoteConfig";

const RemoteContext = createContext();

export const DataProvider = ({ children }) => {
  const [remote_data, isLoading] = useFetchRemoteConfig(["spree_home_ar"]);
  return (
    <RemoteContext.Provider remote_data={remote_data} isLoading={isLoading}>
      {children}
    </RemoteContext.Provider>
  );
};

export default RemoteContext;

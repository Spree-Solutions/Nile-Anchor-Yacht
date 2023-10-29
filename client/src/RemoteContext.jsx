import React, { createContext, useState, useEffect } from "react";
import useFetchRemoteConfig from "./useFetchRemoteConfig";

const RemoteContext = createContext();

export const DataProvider = ({ children }) => {
  const [remote_data, isLoading] = useFetchRemoteConfig([
    "nile_anchor_footer",
    "nile_anchor_gallery",
    "nile_anchor_yacht_collection",
  ]);

  return (
    <RemoteContext.Provider value={{ remote_data, isLoading }}>
      {children}
    </RemoteContext.Provider>
  );
};

export default RemoteContext;

import { initializeApp } from "firebase/app";
import {
  activate,
  fetchAndActivate,
  fetchConfig,
  getRemoteConfig,
  getValue,
} from "firebase/remote-config";

const firebaseConfig = {
  apiKey: "AIzaSyCvP2o_2vuocexxf-JN84xymEOCPBoOAiI",
  authDomain: "new-test-be188.firebaseapp.com",
  projectId: "new-test-be188",
  storageBucket: "new-test-be188.appspot.com",
  messagingSenderId: "117226796707",
  appId: "1:117226796707:web:c0954c2b7b6951862bb116",
  measurementId: "G-CEFCR2H6RH",
};
const app = initializeApp(firebaseConfig);
const remoteConfig = getRemoteConfig(app);
remoteConfig.settings.minimumFetchIntervalMillis = 0;

const fetchRemoteConfig = async (keys) => {
  try {
    await fetchAndActivate(remoteConfig);

    console.log("Fetched remote config");
    const config = {};

    keys.forEach((key) => {
      let value = getValue(remoteConfig, key)._value;
      config[key] = isValidJSON(value) ? JSON.parse(value) : value;
    });

    return config;
  } catch (err) {
    console.log("Failed to fetch remote config", err);
  }
};

function isValidJSON(jsonString) {
  try {
    JSON.parse(jsonString);
    return true;
  } catch (error) {
    return false;
  }
}

export default fetchRemoteConfig;

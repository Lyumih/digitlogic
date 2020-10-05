const corsUrl = "https://cors-anywhere.herokuapp.com/";
export const API_URL_BASE = corsUrl + "http://194.67.105.201:7998/api";
// export const API_URL_BASE = "http://194.67.105.201:7998/api";

export const SITENAME = "Цифрология XXI Века";
export const setSitename = (title: string) =>
  `${title ? title + " | " : ""}${SITENAME}`;

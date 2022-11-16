//import { BACKEND_PATH } from "../../App";

export const loginCall = async (data) => {
  const response = await fetch(`https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies/`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "omit",
    headers: {
      "Content-Type": "application/json",
    },
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  return response;
};

export const registerCall = async (data) => {
  const response = await fetch(`https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies/`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "omit",
    headers: {
      "Content-Type": "application/json",
    },
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  return response;
};

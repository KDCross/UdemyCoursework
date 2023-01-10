import camelize from "camelize";

import { locations } from "./location.mock";


export const locationRequest = (searchTerm) => {
  //return new Promise((resolve, reject) => {
  //const locationMock = locations[searchTerm];
  //if (!locationMock) {
  //  reject("not found");
  //}
  //resolve(locationMock);
//});
//};

  return fetch(
    `http://127.0.0.1:5001/mealstogo-5851d/us-central1/geocode?city=${searchTerm}`
  ).then((res) => {
    return res.json();
  });
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};

//old locationRequest code

//return new Promise((resolve, reject) => {
//  const locationMock = locations[searchTerm];
//  if (!locationMock) {
//    reject("not found");
//  }
//  resolve(locationMock);
//});

import camelize from "camelize";

import { locations } from "./location.mock";


export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
  const locationMock = locations[searchTerm];
  if (!locationMock) {
    reject("not found");
 }
 resolve(locationMock);
});

//The firebase function below generally works, but for some reason, it
//occasionally breaks, and I have to restore the code to using the local
//mocks to get it to display the restaurant list. After doing so and getting
//the list to show, I can comment out the mocks and restore the local firebase
//function and it works fine. Leaving the code set to use the mocks.

//  return fetch(
//   `http://127.0.0.1:5001/mealstogo-5851d/us-central1/geocode?city=${searchTerm}`
//  ).then((res) => {
//    return res.json();
//  });
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

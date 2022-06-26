/* eslint-disable import/prefer-default-export */

interface Position {
  lat: number
  long: number
}

export const getCurrentPosition = (): Promise<Position> => new Promise((resolve, reject) => {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      resolve({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      });
    }, (error) => {
      reject(error);
    });
  } else {
    reject(new Error('Browser does not support location'));
  }
});

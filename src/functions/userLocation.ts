export async function fetchUserLocation() {
    return new Promise<{ latitude: number; longitude: number }>((resolve, reject) => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          position => {
            resolve({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            });
          },
          error => {
            reject(error);
          }
        );
      } else {
        reject(new Error("Geolocation is not supported"));
      }
    });
  }
  
//Jprogram to write a function raceWithTimeout that takes an array of promises and a timeout value.

function raceWithTimeout(promises, timeout) {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Timeout")), timeout);
  });

  return Promise.race([timeoutPromise, ...promises]);
}

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(5), 2000);
});
const promise3 = Promise.reject(new Error("Promise failed"));

raceWithTimeout([promise1, promise2, promise3], 1000)
  .then((result) => console.log("First resolved promise:", result))
  .catch((error) => console.error("Error:", error));

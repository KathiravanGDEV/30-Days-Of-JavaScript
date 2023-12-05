//JavaSCript Program to implement a throttle function that ensures a given function is not called more than one in a specified time travel.

function throttle(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      fn(...args);
      lastCall = now;
    }
  };
}

//Inplementing the debounce function that takes a function and delay as argument.
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

function log() {
  console.log("Welcome!");
}

const debounceLog = debounce(log, 1000);

debounceLog();
debounceLog();
//debounceLog();
//debounceLog();

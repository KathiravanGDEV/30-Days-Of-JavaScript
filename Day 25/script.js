//JavaScript function getData that return a promise.

async function getData() {
  const apiURL1 = "https://api.github.com/users/KathiravanGDEV";
  const apiURL2 = "https://jsonplaceholder.typicode.com/posts/1";

  try {
    const response1 = await fetch(apiURL1);
    const data1 = await response1.json();

    const response2 = await fetch(apiURL2);
    const data2 = await response2.json();

    return {
      data1,
      data2,
    };
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}

getData().then((combineData) => {
  console.log(combineData);
});

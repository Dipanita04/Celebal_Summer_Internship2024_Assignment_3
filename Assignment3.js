// Existing code using callbacks
function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: "Stuart Binny" };
    callback(null, data);
  }, 1000);
}

function processData(err, data) {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("Data:", data);
  }
}

fetchData(processData);

// Refactored code using Promises and Async/Await
function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: "Stuart Binny" };
      resolve(data);
    }, 1000);
  });
}

async function processDataAsync() {
  try {
    const data = await fetchDataPromise();
    console.log("Data:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

processDataAsync();

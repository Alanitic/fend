/* Global Variables */
// API
const apiURL = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = '093885a1f0cdfbb57c61d5b507b63ddc&units=imperial';
// Server
const serverUrl = 'http://localhost:3000/weather';
// User data
const btnGenerate = document.getElementById('generate');
const zipCode = document.getElementById('zip');
const feelings = document.getElementById('feelings');
// Update UI
const date = document.getElementById('date');
const temp = document.getElementById('temp');
const content = document.getElementById('content');

// Create a new date instance dynamically with JS
let day = new Date();
let newDate =
  day.getMonth() + 1 + '/' + day.getDate() + '/' + day.getFullYear();

btnGenerate.addEventListener('click', () => {
  if (isValidUSZip(zipCode.value)) {
    const urlReq = `${apiURL}?zip=${zipCode.value},us&appid=${apiKey}`;
    getPost(urlReq);
  } else {
    alert('Please provide a valid zipcode');
  }
});

const getPost = (url) => {
  retrieveData(url)
    .then((data) => {
      const { temp } = data.main;
      console.log(data.main);
      const newData = {
        temp,
        newDate,
        feelings: feelings.value,
      };
      postData(serverUrl, newData).then(() => {
        updateUI();
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const retrieveData = async (url = '') => {
  const request = await fetch(url);
  try {
    // Transform into JSON
    const allData = await request.json();
    return allData;
  } catch (error) {
    console.log('error', error);
  }
};

const postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log('error', error);
  }
};

const updateUI = async () => {
  const { temp: temperature, newDate, feelings } = await retrieveData(
    serverUrl
  );
  date.innerHTML = newDate;
  content.innerHTML = feelings;
  temp.innerHTML = temperature;
};

function isValidUSZip(sZip) {
  return /^\d{5}(-\d{4})?$/.test(sZip);
}

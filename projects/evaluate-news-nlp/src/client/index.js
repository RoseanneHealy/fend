import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

export {
    checkForName,
    handleSubmit
   }

console.log(checkForName);

alert("I EXIST")
alert("I still Exist!")
console.log("CHANGE!!");

//start of api//

//when generate button is clicked function below commences
document.getElementById('generate').addEventListener('click', performAction);

//url value taken? input.value work hopefully
function performAction(e) {
  const newLocation = document.getElementById('input.value').value;

  geturlInfo(e)
    .then(
      function (data) {        
        //Add data to POST request(DATA)
        postData('/addNewURL', { url: data.url})
          .then(() => {
            updateUI();
        });
    })
};
//using the then keyword we can post our data to server .so we post data and use fetch later to receive it back. 
//to have it appear on page, we need to dynamically update UI to have it on our static webpage.



//async function (async so our code waits to receive back data from server.) which takes base url,and API Key hopefully from env file..
const geturlInfo = async (url) => {
  const res = await fetch(url + /.env/apiKey);
  
  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
}

const postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("error", error);
  }
}

const updateUI = async () => {
  const request = await fetch('/all')
  try {
    const lastEntry = await request.json();
    console.log(lastEntry);

    document.getElementById('date').innerHTML = lastEntry.date;
    document.getElementById('temp').innerHTML = lastEntry.temp;
    document.getElementById('content').innerHTML = lastEntry.content;
  } catch (error) {
    console.log("error", error);
  }
}
//end of api//
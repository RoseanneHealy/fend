function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        document.getElementById('results').innerHTML = data.message
    })
}
export { handleSubmit }

//start of api// mentor: 28/04/21 Once you have the text, you have to make a POST request to the server(your own server) - server to use the fetch function. 

  geturlInfo(e)
    .then(
      function (data) {        
        //posting Data to server
        postData('/addNewURL', { url: data.url})
          .then(() => {
            updateUI();
        });
//using the then keyword we can post our data to server .so we post data and use fetch later to receive it back. 
//to have it appear on page, we need to dynamically update UI to have it on our static webpage.



//async function (async so our code waits to receive back data from server.) 
const geturlInfo = async (url) => {
  const res = await fetch(url + /.env/apiKey);
  

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

//28/04/2021 Then on the client side, once you receive this data, extract the needed fields (they are shown in the project rubric) and call a function to update your UI (you can call it updateUI) by passing this data. 

const updateUI = async () => {
  const request = await fetch('/all')
  
    document.getElementById("model").innerHTML = `<p> Model: ${data.model}</p>`;
    document.getElementById("score_tag").innerHTML = `<p> Score tag: ${data.score_tag}</p>`;
    document.getElementById("agreement").innerHTML = `<p> Agreement: ${data.agreement}</p>`;
    document.getElementById("subjectivity").innerHTML = `<p> Subjectivity: ${data.subjectivity}</p>`;
    document.getElementById("confidence").innerHTML = `<p> Confidence: ${data.confidence}</p>`;
    document.getElementById("irony").innerHTML = `<p> Irony: ${data.irony}</p>`;


export function handleSubmit(event) {
  event.preventDefault()
  let urlInput = document.getElementById('name').value

  let input = {
    url: encodeURI(urlInput)
  }
  console.log(input);
  postData('/addNewURL', input).then( data => updateUI(data));
};
//using the then keyword we can post our data to server .so we post data and use fetch later to receive it back. 
//to have it appear on page, we need to dynamically update UI to have it on our static webpage.
//fetch 

const postData = async (url = '', data = {}) => {
  const response = await fetch('http://localhost:8081' + url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    updateUI(newData);
  } catch (error) {
    console.log("error", error);
  }
}

//Then on the client side, once you receive this data, extract the needed fields (in the project rubric) and call a function to update your UI (you can call it updateUI) by passing this data. 

const updateUI = async (data) => {
  document.getElementById("model").innerHTML = `<p> Model: ${data.model}</p>`;
  document.getElementById("score_tag").innerHTML = `<p> Score tag: ${data.score_tag}</p>`;
  document.getElementById("agreement").innerHTML = `<p> Agreement: ${data.agreement}</p>`;
  document.getElementById("subjectivity").innerHTML = `<p> Subjectivity: ${data.subjectivity}</p>`;
  document.getElementById("confidence").innerHTML = `<p> Confidence: ${data.confidence}</p>`;
  document.getElementById("irony").innerHTML = `<p> Irony: ${data.irony}</p>`;
}


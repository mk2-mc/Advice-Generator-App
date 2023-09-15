const id = document.querySelector(".advice-id");
const quote = document.querySelector(".advice-quote");
const button = document.querySelector(".button");

function getQuote() {
  const url = "https://api.adviceslip.com/advice";
  var timestamp = new Date().getTime();
  
  fetch(`${url}?ts=${timestamp}`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      id.innerHTML = `Advice #${response.slip.id}`;
      quote.innerHTML = response.slip.advice;
    });
}

button.addEventListener("click", getQuote);
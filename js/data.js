/* exported data */
var $textQuote = document.querySelector('#textQuote');
var $authorQuote = document.querySelector('#authorQuote');
var $magicBall = document.querySelector('#magicBall');

function renderQuote() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://favqs.com/api/qotd');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    $textQuote.textContent = xhr.response.quote.body;
    $authorQuote.textContent = '- ' + xhr.response.quote.author;
  });
  xhr.addEventListener('error', () => {
    alert('There was an error attempting to upload the file.');
  });
  xhr.send();
}

renderQuote();

$magicBall.addEventListener('click', () => {
  renderQuote();
});

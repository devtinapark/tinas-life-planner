/* global easydropdown */

easydropdown.all();

var minWidth = window.matchMedia('(min-width: 768px)');
var $headerMobile = document.querySelector('#header-mobile');
var $headerDesktop = document.querySelector('#header-desktop');
var $selectList = document.querySelectorAll('select');
var $imgWheel = document.querySelector('#imgWheel');
var $addVB = document.querySelector('#addVB');
var $cancel = document.querySelector('#cancel');
var $popUpContainer = document.querySelector('.popUpContainer');
var $listView = document.querySelectorAll('.view');
var $navDW = document.querySelector('#navDW');
var $navDVB = document.querySelector('#navDVB');
var $navDQ = document.querySelector('#navDQ');

var dataWheel = {
  career: 10,
  finance: 10,
  health: 10,
  social: 10,
  family: 10,
  love: 10,
  recreation: 10,
  contribution: 10,
  spirituality: 10,
  selfImage: 10
};

window.addEventListener('beforeunload', doDataWheelJSON);
window.addEventListener('resize', swapHeaders);
$addVB.addEventListener('click', openPopUp);
$cancel.addEventListener('click', closePopUp);
$navDW.addEventListener('click', swapToW);
$navDVB.addEventListener('click', swapToVB);
$navDQ.addEventListener('click', swapToQ);

function doDataWheelJSON(event) {
  var dataWheelJSON = JSON.stringify(dataWheel);
  localStorage.setItem('dataWheel', dataWheelJSON);
}

var previousDataWheelJSON = localStorage.getItem('dataWheel');

if (previousDataWheelJSON !== null) {
  dataWheel = JSON.parse(previousDataWheelJSON);
}

updateUrl();

for (var $select of $selectList) {
  $select.addEventListener('change', updateWheel);
}

function updateWheel(event) {
  var x = event.target.getAttribute('id');
  dataWheel[x] = event.target.value;
  updateUrl();
}

function updateUrl() {
  var newUrl = 'https://image-charts.com/chart?chco=FF9797%7CFFC997%7CF3E078%7CA0E845%7C7BE8F6%7C63BDFF%7CC3B9FF%7CCA90DE%7CFFCAF0%7CEA9BD4&chd=t%3A' +
  dataWheel.career + '%2C' +
  dataWheel.finance + '%2C' +
  dataWheel.health + '%2C' +
  dataWheel.social + '%2C' +
  dataWheel.family + '%2C' +
  dataWheel.love + '%2C' +
  dataWheel.recreation + '%2C' +
  dataWheel.contribution + '%2C' +
  dataWheel.spirituality + '%2C' +
  dataWheel.selfImage +
  '&chl=Career%7CFinance%7CHealth%7CSocial%7CFamily%7CLove%7CRecreation%7CContribution%7CSpirituality%7CSelf-Image&chlps=font.size%2C10.5%7Cpadding.right%2C10&chs=300x300&cht=pa&chxt=x%2Cy';
  $imgWheel.setAttribute('src', newUrl);
}
swapHeaders();

function swapHeaders(event) {
  if (minWidth.matches) {
    $headerMobile.className = 'hidden';
    $headerDesktop.className = '';
  } else {
    $headerMobile.className = '';
    $headerDesktop.className = 'hidden';
  }
}

function openPopUp(event) {
  $popUpContainer.className = 'popUpContainer row justify-center align-center';
}

function closePopUp(event) {
  $popUpContainer.className = 'popUpContainer row justify-center align-center hidden';
}

function swapDV(viewActive) {
  for (var i = 0; i < $listView.length; i++) {
    if ($listView[i].getAttribute('data-view') === viewActive) {
      $listView[i].className = 'view padding-page';
    } else {
      $listView[i].className = 'view padding-page hidden';
    }
  }
}

function swapToW(event) {
  swapDV('wheel-of-life');
}

function swapToVB(event) {
  swapDV('vision-board');
}

function swapToQ(event) {
  swapDV('qute-of-the-day');
}

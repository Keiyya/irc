'use strict';

const cardOne = document.getElementById('card-one');
const cardTwo = document.getElementById('card-two');
const selected = document.getElementById('selected');
const ratingButtons = document.querySelectorAll('.btnRating');
const submitBtn = document.querySelector('.btn');

submitBtn.addEventListener('click', submitrating);

function submitrating(){
  cardOne.classList.add('hidden');
  cardTwo.classList.remove('hidden');
}

for(let i = 0; i < ratingButtons.length; i ++){
  ratingButtons[i].addEventListener('click', function(){
    ratingButtons[i].style.backgroundColor = 'hsl(216, 12%, 54%)';
    selected.textContent = ratingButtons[i].id;
  })
}
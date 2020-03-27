const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
let total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value;

// Save selected movie indx and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Movie Click Event
movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  console.log(e.target.selectedIndex, e.target.value);
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// Seat Click Event
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  console.log(selectedSeats);

  // copy selected seats into an array then map through array and return a new array of indexes
  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
  console.log(seatsIndex);

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.textContent = selectedSeatsCount;
  total.textContent = selectedSeatsCount * ticketPrice;
}

// Event Listener
// seats.forEach
container.addEventListener('click', e => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    console.log(e.target);
    e.target.classList.toggle('selected');
    updateSelectedCount();
  }
});

// console.log(+ticketPrice);

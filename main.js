const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
let total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value;

// Movie Click Event
movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});

// Seat Click Event
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

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

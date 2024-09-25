// Get the necessary elements
const hourHand = document.querySelector('.needle.hour');
const minuteHand = document.querySelector('.needle.minute');
const secondHand = document.querySelector('.needle.second');
const timeDisplay = document.querySelector('.time');
const dateDisplay = document.querySelector('.date');
const toggleBtn = document.querySelector('.toggle');

// Function to update the clock
function updateClock() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  // Update the hands
  hourHand.style.transform = `translate(-50%, -100%) rotate(${(hour % 12) / 12 * 360}deg)`;
  minuteHand.style.transform = `translate(-50%, -100%) rotate(${minute / 60 * 360}deg)`;
  secondHand.style.transform = `translate(-50%, -100%) rotate(${second / 60 * 360}deg)`;

  // Update the time display
  timeDisplay.textContent = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;

  // Update the date display
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = months[now.getMonth()];
  const day = now.getDate();
  dateDisplay.innerHTML = `${month} <span class="circle">${day}</span>`;
}

// Call the updateClock function every second
setInterval(updateClock, 1000);

// Toggle dark mode
toggleBtn.addEventListener('click', (e) => {
	const html = document.querySelector('html');
	if(html.classList.contains('dark')){
		html.classList.remove('dark');
		e.target.innerHTML = 'Dark mode';
	} else {
		html.classList.add('dark');
		e.target.innerHTML = 'Light mode';
	}
});
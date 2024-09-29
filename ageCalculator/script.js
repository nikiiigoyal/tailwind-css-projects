const inputEl = document.querySelector(".input")
const yearEl = document.querySelector(".years")
const monthEl = document.querySelector(".months")
const dayEl = document.querySelector(".days");
const buttonEl = document.querySelector("button");

buttonEl.addEventListener("click",calculateAge)

const months = [31,28,31,30,31,30,31,31,30,31,30,31];
 
function calculateAge() {
    let today = new Date()
    let inputDateEl = new Date(inputEl.value)
    let resultMonth,resultDate,resultYear;

    let inputYear = inputDateEl.getFullYear()
    let inputMonth = inputDateEl.getMonth()
    let inputDate = inputDateEl.getDate()

    let currentYear = today.getFullYear()
    let currentMonth = today.getMonth()
    let currentDate = today.getDate()
    leapYearCheck(currentYear);

    // if date provided is of future
    if ((inputYear > currentYear) || 
    (inputMonth > currentMonth && inputYear == currentYear) || 
    (inputDate > currentDate && inputMonth == currentMonth && inputYear == currentYear) ){
        alert("You are not born yet");
        displayResult("0","0","0");
        return;
    }  
 resultYear =  currentYear - inputYear

 if (currentMonth >= inputMonth) {
    resultMonth = currentMonth - inputMonth
 } else {
    // if the current month is earlier than the birth month, the function decreases the year by 1 (because the birthday hasn't occurred this year yet) and calculates the month difference by adding 12 (to "borrow" months from the previous year).
    resultYear --
    resultMonth = 12 + currentMonth - inputMonth
 }
    if (currentDate >= inputDate) {
        resultDate = currentDate - inputDate
    } else {
        resultMonth --
        //  if the current day is earlier than the birth day, it decreases the month by 1 (since the current month hasn’t passed the birthday yet), and adds the number of days in the current month (from the months array) to the current date before subtracting the input day.
        let days = months[currentMonth]
        resultDate = days + currentDate - inputDate;
        if (resultMonth < 0) {
            resultMonth = 11;
            resultYear--
        }
    }
    displayResult(resultDate,resultMonth,resultYear)
}

function displayResult (resultDate,resultMonth,resultYear) {
    yearEl.innerHTML = resultYear;
    monthEl.innerHTML = resultMonth;
    dayEl.innerHTML = resultDate;
}

function leapYearCheck (year) {
    if (year % 4 === 0 || (year % 100 == 0 && year % 400 == 0)) {
        months[1] = 29
    } else {
        months[1] = 28
    }
}



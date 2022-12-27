import "./styles.css";

const newDate = new Date("02/01/2023");

document.getElementById("date").innerHTML =
  "Giveaway Ends on " +
  [
    "JAN",
    "FEB",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER"
  ][newDate.getMonth()] +
  " " +
  newDate.getDate() +
  ", " +
  newDate.getFullYear();

setInterval(function () {
  counter(newDate);
}, 1000);

function counter(nD) {
  const today = new Date();
  const d = new Date(nD - today);

  if (nD < today) {
    document.getElementById("days").innerHTML = 0;
    document.getElementById("hours").innerHTML = 0;
    document.getElementById("mins").innerHTML = 0;
    document.getElementById("secs").innerHTML = 0;
  } else {
    document.getElementById("days").innerHTML = Math.round(
      d / (1000 * 60 * 60 * 24)
    );
    document.getElementById("hours").innerHTML = Math.round(
      (d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    document.getElementById("mins").innerHTML = Math.round(
      (d % (1000 * 60 * 60)) / (1000 * 60)
    );
    document.getElementById("secs").innerHTML = Math.round(
      (d % (1000 * 60)) / 1000
    );
  }
}

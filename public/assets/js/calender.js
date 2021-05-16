let daysOfMonth;
const date = new Date();
function getDays() {
  fetch("/api/journals")
    .then((r) => r.json())
    .then((r) => {
      daysOfMonth = r;
      console.log(daysOfMonth);
      renderCalendar();
    });
}
getDays();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  // Finds last day of the month
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  // Last day of previous month
  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  // Day of the week that the 1st of the month starts on
  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  // first days of the next month
  const nextDays = 7 - lastDayIndex - 1;

  // function to formate date properly to match DB
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  console.log(formatDate(daysOfMonth));

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // == Sets month of calender == //
  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  // == sets current date on calender == //
  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    // == Populates Calendar with previous months dates == //
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      //  == Populates calender with todays date == //
      days += `<div class="today ${months[date.getMonth()] + i}">${i}</div>`;
    } else if (daysOfMonth[i - 1] === undefined) {
      // == Populates Calendar With Dates == //
      days += `<div class="${months[date.getMonth()] + i}">${i}</div>`;
      console.log(daysOfMonth.moodId);
    } else {
      days += `<div class="${daysOfMonth[i - 1]} + " " + ${
        daysOfMonth.moodId
      }">${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    //  == populates calender with next months dates == //
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

// == cycle to previous month == //
document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

// == cycle to next month == //
document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

//  == selector for current date == //
document.querySelector(".today").addEventListener("click", () => {
  // on click open modal
});

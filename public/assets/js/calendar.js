let daysOfMonth;
const date = new Date();
function getDays() {
  fetch("/api/journals")
    .then((r) => r.json())
    .then((r) => {
      daysOfMonth = r;
      console.log(daysOfMonth[2].moodID);
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
    // console.log(month);
    return [year, month, day].join("-");
  }

  let day = "" + new Date().getDate();
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() - day + 1);

  console.log();

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
    days += `<div class="prev-date colorundefined">${
      prevLastDay - x + 1
    }</div>`;
  }
  console.log(date.getMonth());

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      // =================== Current Date
      days += `<div class="today color${i} ${formatDate(
        tomorrow.setDate(tomorrow.getDate())
      )}">${i}</div>`;
      formatDate(tomorrow.setDate(tomorrow.getDate() + 1));
      console.log("today");
      // ==================== Dates without Mood info
    } else if (daysOfMonth[i] === undefined) {
      days += `<div class="colorundefined ${formatDate(
        tomorrow.setDate(tomorrow.getDate())
      )}">${i}</div>`;
      formatDate(tomorrow.setDate(tomorrow.getDate() + 1));
      console.log("undefined");
      // ==================== Dates with Mood info
    } else {
      days += `<div class="color${daysOfMonth[i - 1].moodID} ${formatDate(
        tomorrow.setDate(tomorrow.getDate())
      )}">${i}</div>`;
      formatDate(tomorrow.setDate(tomorrow.getDate() + 1));
      console.log(daysOfMonth[i - 1].moodID);
    }
  }

  console.log(daysOfMonth);
  // pointer-events: none

  for (let j = 1; j <= nextDays; j++) {
    //  == populates calender with next months dates == //
    days += `<div class="next-date colorundefined">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

// Fetch Date / Mood info from DB for queryselectors
function getMoodModal() {
  fetch("/api/journals")
    .then((r) => r.json())
    .then((r) => {
      let journals = r;
      console.log(journals[0]);
    });
}
getMoodModal();

// Query selectors for Today
document.querySelector(".bigLink").addEventListener("click", () => {});

document.querySelector(".today").addEventListener("click", () => {});

// Query Selectors for days of month
document.querySelector(".2021-05-01").addEventListener("click", () => {});
document.querySelector(".2021-05-02").addEventListener("click", () => {});
document.querySelector(".2021-05-03").addEventListener("click", () => {});
document.querySelector(".2021-05-04").addEventListener("click", () => {});
document.querySelector(".2021-05-05").addEventListener("click", () => {});
document.querySelector(".2021-05-06").addEventListener("click", () => {});
document.querySelector(".2021-05-07").addEventListener("click", () => {});
document.querySelector(".2021-05-08").addEventListener("click", () => {});
document.querySelector(".2021-05-09").addEventListener("click", () => {});
document.querySelector(".2021-05-10").addEventListener("click", () => {});
document.querySelector(".2021-05-11").addEventListener("click", () => {});
document.querySelector(".2021-05-12").addEventListener("click", () => {});
document.querySelector(".2021-05-13").addEventListener("click", () => {});
document.querySelector(".2021-05-14").addEventListener("click", () => {});
document.querySelector(".2021-05-15").addEventListener("click", () => {});
document.querySelector(".2021-05-16").addEventListener("click", () => {});
document.querySelector(".2021-05-17").addEventListener("click", () => {});
document.querySelector(".2021-05-18").addEventListener("click", () => {});
document.querySelector(".2021-05-19").addEventListener("click", () => {});
document.querySelector(".2021-05-20").addEventListener("click", () => {});
document.querySelector(".2021-05-21").addEventListener("click", () => {});
document.querySelector(".2021-05-22").addEventListener("click", () => {});
document.querySelector(".2021-05-23").addEventListener("click", () => {});
document.querySelector(".2021-05-24").addEventListener("click", () => {});
document.querySelector(".2021-05-25").addEventListener("click", () => {});
document.querySelector(".2021-05-26").addEventListener("click", () => {});
document.querySelector(".2021-05-27").addEventListener("click", () => {});
document.querySelector(".2021-05-28").addEventListener("click", () => {});
document.querySelector(".2021-05-29").addEventListener("click", () => {});
document.querySelector(".2021-05-30").addEventListener("click", () => {});
document.querySelector(".2021-05-31").addEventListener("click", () => {});

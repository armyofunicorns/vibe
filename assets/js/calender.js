let daysOfMonth = [
  {
    user: "George",
    date: "May 1",
    mood: "Ok",
  },
  {
    user: "George",
    date: "May 2",
    mood: "Awful",
  },
  {
    user: "George",
    date: "May 3",
    mood: "Great",
  },
  {
    user: "George",
    date: "May 4",
    mood: "Great",
  },
  {
    user: "George",
    date: "May 5",
    mood: "Good",
  },
  {
    user: "George",
    date: "May 6",
    mood: "",
  },
  {
    user: "George",
    date: "May 7",
    mood: "Awful",
  },
  {
    user: "George",
    date: "May 8",
    mood: "Bad",
  },
  {
    user: "George",
    date: "May 9",
    mood: "Ok",
  },
  {
    user: "George",
    date: "May 10",
    mood: "Bad",
  },
  {
    user: "George",
    date: "May 11",
    mood: "Great",
  },
  {
    user: "George",
    date: "May 12",
    mood: "Great",
  },
];

// console.log(daysOfMonth[5]);

const date = new Date();

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

  // let mood = [{ Great }, { Good }, { Ok }, { Bad }, { Awful }];

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
      // console.log(daysOfMonth[i - 1].mood);
    } else {
      days += `<div class="${daysOfMonth[i - 1].mood}">${i}</div>`;
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

renderCalendar();

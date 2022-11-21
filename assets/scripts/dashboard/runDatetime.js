const datetimeText = $(".datetime-text");

const getDateTime = () => {
  let DATETIME = "";
  const date = new Date();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Augt",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  const hour = formatTime(date.getHours());
  const minute = formatTime(date.getMinutes());
  const second = formatTime(date.getSeconds());

  DATETIME = `${day} ${month} ${year} at ${hour}:${minute}:${second}`;

  return DATETIME;
};

const formatTime = (time) => {
  if (time <= 9) {
    return `0${time}`;
  }
  return time;
};

// Append datetime
setInterval(() => {
  const DATETIME_TEXT = getDateTime();
  datetimeText.textContent = DATETIME_TEXT;
}, 1000);

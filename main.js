function clockrun() {
  let d = new Date();
  let min = d.getMinutes();
  let sec = d.getSeconds();
  let hour = d.getHours();

  let p = "AM";
  if (hour > 12) {
    hour = hour - 12;
    p = "PM";
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  let clock = hour + ":" + min + ":" + sec + " " + p;

  document.getElementById("clockid").textContent = clock;
  setTimeout(clockrun, 1000);
}
clockrun();

function daterun() {
  let d2 = new Date();
  let year = d2.getFullYear();
  let mounth = d2.getMonth() + 1;
  let day = d2.getDate();

  if (day < 10) {
    day = "0" + day;
  }
  if (mounth < 10) {
    mounth = "0" + mounth;
  }

  let today = year + "/" + mounth + "/" + day;

  document.getElementById("year").textContent = today;
  setTimeout(daterun, 1000);
}
daterun();

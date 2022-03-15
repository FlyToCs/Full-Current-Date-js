function clockrun() {
  var d = new Date();
  var min = d.getMinutes();
  var sec = d.getSeconds();
  var hour = d.getHours();

  var p = "AM";
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

  var clock = hour + ":" + min + ":" + sec + " " + p;

  document.getElementById("clockid").textContent = clock;
  setTimeout(clockrun, 1000);
}
clockrun();


function daterun() {
    var d2 = new Date();
    var year = d2.getFullYear();
    var mounth = d2.getMonth()+1;
    var day = d2.getDate();
  

    if (day < 10) {
      day = "0" + day;
    }
    if (mounth < 10) {
        mounth = "0" + mounth;
    }
   
  
    var today = year + "/" + mounth + "/" + day;
  
    document.getElementById("year").textContent = today;
    setTimeout(daterun, 1000);
  }
  daterun();


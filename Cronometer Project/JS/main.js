// Taking the elements from the HTML file
let userYear = document.getElementById("userYear");
let userMonth = document.getElementById("userMonth");
let userDay = document.getElementById("userDay");
let userHour = document.getElementById("userHour");
let userMinute = document.getElementById("userMinute");
let userSecond = document.getElementById("userSecond");
let userTime = document.getElementById("userTime");

function errorMessage(){
  console.log("Please answer correctly to the question !");
  console.log("Try again !");
}

function AscendTime(){
  try{
    userYear = eval(userYear.value);
    userMonth = eval(userMonth.value);
    userDay = eval(userDay.value);
    userHour = eval(userHour.value);
    userMinute = eval(userMinute.value);
    userSecond = eval(userSecond.value);

    userTime = eval(userTime.value);
    userTime *= 60000; // Multiplying by 60000 because it is given in minutes in the HTML input, to make it easier for the user

    userMonth += 1; // Months start at 0 in JS

    ARRAY_year = new Array(); for(let i = 1970; i<3000; i++){ARRAY_year.push(i)};
    ARRAY_month = new Array();  for(let i = 1; i <= 12; i++){ARRAY_month.push(i)};
    ARRAY_day = new Array();  for(let i = 1; i<= 32; i++){ARRAY_day.push(i)};
    ARRAY_hour = new Array(); for(let i = 1; i<= 24; i ++){ARRAY_hour.push(i)};
    ARRAY_minute_second = new Array();  for(let i = 0; i <=60; i++){ARRAY_minute_second.push(i)};

    if(ARRAY_year.includes(userYear) && ARRAY_month.includes(userMonth) && ARRAY_day.includes(userDay) && ARRAY_hour.includes(userHour) && ARRAY_minute_second.includes(userMinute) && ARRAY_minute_second.includes(userSecond)){
      // Checking if the input elements are correctly given
      let DATE = new Date(userYear, userMonth, userDay, userHour, userMonth, userSecond);
      let time = DATE.getTime();
      console.log(time);
      time += userTime;
      let newTime = new Date(time);
      console.log(newTime);
    }else{
      throw "ERROR";
    }
  }catch{
    errorMessage();
  }
}

function DescendTime(){
  try{
    userYear = eval(userYear.value);
    userMonth = eval(userMonth.value);
    userDay = eval(userDay.value);
    userHour = eval(userHour.value);
    userMinute = eval(userMinute.value);
    userSecond = eval(userSecond.value);

    userTime = eval(userTime.value);
    userTime *= 60000; // Multiplying by 60000 because it is given in minutes in the HTML input, to make it easier for the user

    userMonth += 1; // Months start at 0 in JS

    ARRAY_year = new Array(); for(let i = 1970; i<3000; i++){ARRAY_year.push(i)};
    ARRAY_month = new Array();  for(let i = 1; i <= 12; i++){ARRAY_month.push(i)};
    ARRAY_day = new Array();  for(let i = 1; i<= 32; i++){ARRAY_day.push(i)};
    ARRAY_hour = new Array(); for(let i = 1; i<= 24; i ++){ARRAY_hour.push(i)};
    ARRAY_minute_second = new Array();  for(let i = 0; i <=60; i++){ARRAY_minute_second.push(i)};

    if(ARRAY_year.includes(userYear) && ARRAY_month.includes(userMonth) && ARRAY_day.includes(userDay) && ARRAY_hour.includes(userHour) && ARRAY_minute_second.includes(userMinute) && ARRAY_minute_second.includes(userSecond)){
      // Checking if the input elements are correctly given
      let DATE = new Date(userYear, userMonth, userDay, userHour, userMonth, userSecond);
      let time = DATE.getTime();
      console.log(time);
      time -= userTime;
      let newTime = new Date(time);
      console.log(newTime);
    }else{
      throw "ERROR";
    }
  }catch{
    errorMessage();
  }
}
}

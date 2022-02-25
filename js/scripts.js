function akanName(){
//input values
var date = document.getElementById("date").value;
var month = document.getElementById("month").value;
var year = document.getElementById("year").value;
var birthDay = new Date(year+'-'+month+'-'+year);
var dayOfWeek = birthDay.getDay();

// gender
var male = document.getElementById("male").checked;
var female = document.getElementById("female").checked;

//days
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

// names
const maleNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame']
const femaleNames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']

if (date<=0 || date >31){
   alert('enter a valid date!')
}
   else if (month<=0 || month >12){
   alert('enter a valid month!')
   }
   else if (year<=1000 || year>2020){
   alert('enter a valid year')
   }


if (male === true) {
    document.getElementById('results').innerHTML='you were born on ' + days[dayOfWeek] + 'your Akan name is ' + maleNames[dayOfWeek];
}
    else if (female === true) {
        document.getElementById('results').innerHTML='you were born on ' + days[dayOfWeek] + 'your Akan name is ' + femaleNames[dayOfWeek];
    }
};




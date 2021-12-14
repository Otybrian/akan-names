var CC, YY, MM, DD, d, dayValue;
var dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var birthYear = year;


function hello(); {
    var birthYear = document.getElementsById("year").value;
  if( document.mydetails.year.value == "" || document.mydetails.year.value.length !=4 || document.mydetails.year.value >= 2100 || document.mydetails.year.value <=1890) {
     alert( "Enter a valid year like 1992" );
}
else if( document.mydetails.date.value == "" || isNaN( document.mydetails.month.value ) || 
document.mydetails.month.value.length != 2|| document.mydetails.date.value > 31 || document.mydetails.date.value <= 0) {
   alert( "Date must be between 1 and 31" );
   return false;
}
else if( document.mydetails.month.value == "" || isNaN( document.mydetails.month.value ) || 
document.mydetails.month.value.length != 2 || document.mydetails.month.value > 12  || document.mydetails.month.value <= 0){
   alert( "Month must be between 1 and 12" );
   return false;
}
  }
  function genderType(){
    var genders = document.getElementsById("mygender");
    if(genders[1].selected == true){
      var genders = "male";
    }
    else if(genders[2].selected == true){
      var genders = "female";
    }
    else{
      return false;
    }
}
switch(gender){
  case "male":
    if (dayValue == 1){
      alert("Your day of birth is " +dayNames[0] + " , your Akan name is " +maleNames[0]+"!");
    }
    else if(dayValue == 2){
      alert("Your day of birth is "+dayNames[1] + " , your Akan name is " +maleNames[1]+"!");
    }
    else if(dayValue == 3){
      alert("Your day of birth is " +dayNames[2]+ " , your Akan name is " +maleNames[2]+"!");
    }
    else if(dayValue == 4){
      alert("Your day of birth is "+dayNames[3] +  " , your Akan name is " +maleNames[3]+"!");
    }
    else if(dayValue == 5){
      alert("Your day of birth is "+dayNames[4] +  " , your Akan name is " +maleNames[4]+"!");
    }
    else if(dayValue == 6){
      alert("Your day of birth is "+dayNames[5] +  " , your Akan name is " +maleNames[5]+"!");
    }
    else if(dayValue == -0){
      alert("Your day of birth is "+dayNames[6] + " , your Akan name is " +maleNames[6]+"!");
    }
  break;
  case "female":
    if (dayValue == 1){
      alert("Your day of birth is "+dayNames[0] + " , your Akan name is  " +femaleNames[0]+"!");
    }
    else if(dayValue == 2){
      alert("Your day of birth is " +dayNames[1] + " , your Akan name is " +femaleNames[1]+"!");
    }
    else if(dayValue == 3){
      alert("Your day of birth is " +dayNames[2] + " , your Akan name is " +femaleNames[2]+"!");
    }
    else if(dayValue == 4){
      alert("Your day of birth is " +dayNames[3] + " , your Akan name is " +femaleNames[3]+"!");
    }
    else if(dayValue == 5){
      alert("Your day of birth is " +dayNames[4] + " , your Akan name is " +femaleNames[4]+"!");
    }
    else if(dayValue == 6){
      alert("Your day of birth is " +dayNames[5] + " , your Akan name is " + femaleNames[5]+"!");
    }else if(dayValue == -0){
      alert("Your day of birth is " +dayNames[6] + " , your Akan name is " +femaleNames[6]+"!");
    }
  break
  default:     
}

function getDayValue(){
  year = document.getElementById("year").value;
  MM = parseInt(document.getElementById("month").value);
  DD = parseInt(document.getElementById("day").value);
  CC = parseInt(year.substring(0,1));
  YY = parseInt(year.substring(2,2));
  d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
  console.log(d);
  return (Math.floor(d));
}
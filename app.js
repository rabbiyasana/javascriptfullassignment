// Chapter 38-42

//01
//function sum(a,b){
 //   alert(a+b);
//}

//sum(3,3);

//02
/*var userYear = prompt("Enter Year");
if(userYear%4==0){
      document.write(userYear+ "is Leap Year")
}else{
      document.write(userYear+ "is No Leap Year")
}*/

//03
/*function areaCal(a,b,c){
      var s = (a+b+c)/2;
      var area =Math.sqrt( s*((s-a)*(s-b)*(s-c)));
      alert(area);
 

}
areaCal(56,54,76);*/

//04
/*var sub1 = prompt("Enter 1st Subject Marks");
var sub2 = prompt("Enter 2nd Subject Marks");
var sub3 = prompt("Enter 3rd Subject Marks");

function avg(){
      var tAvg=((+sub1)+(+sub2)+(+sub3))/3;
      return tAvg;
}

function per(){
      var tPer=(((+sub1)+(+sub2)+(+sub3))*100)/300;
      return tPer;
}

function main(tAvg,tPer){
      var gAvg= tAvg;
      document.write("Average is"+gAvg+"<br>");
      var gPer= tPer;
      document.write("Percentage is"+gPer);

}
main(sub1,sub2,sub3);
*/

//05
/*var food = ["cake", "apple pie", "cookie", "chips"," patties"]
var userFood = prompt("Enter Food name");

function ffood(food){
if(food.indexOf(userFood) != -1){
    document.write("Yes available in "+ food.indexOf(userFood));
}else{
     document.write("No available");
}
}
ffood(userFood)
*/

//06
/*var userPg="Your look awesome";

function remVol(){
     var userPg1 =  userPg.split("");
     var vol = /[aeiou]/ig;
     var volrem = userPg.match(vol);
    var newpgr=[] 
     for(var i=0;i<userPg1.length;i++){
           if(volrem.indexOf(userPg1[i])===-1){

            newpgr.push(userPg1[i])
            

           }
     }
     document.write(newpgr.join(""));
     
}

remVol(userPg);*/

//07
//pending

//08
/*var distns = prompt("Enter Distance in KM");

function kmTmet(){
      var rkmTmet=distns*1000;
      document.write("Meter is: "+rkmTmet+"<br>");
}
kmTmet(distns)

function kmTft(){
var rkmTft=distns*3280.84;
document.write("Foot is: "+rkmTft+"<br>")
}
kmTft(distns);

function kmTinc(){
var rkmTinc = distns*39370.1;
document.write("Inches is: "+rkmTinc+"<br>")
}
kmTinc(distns)

function kmTcm(){
var rkmTcm=distns*100000;
document.write("Centimeter is: "+rkmTcm+"<br>")
}
kmTcm(distns)*/


//09
/*var userHour=prompt("Enter Working Hour");
document.write("Over Time Apply If Working Hour above 40. Rs:20/h<br>")
function workHourcheck(){
if(userHour>=40){
      var ock1=40/userHour;
      //document.write(Math.floor(ock1))
      var ock2=userHour%40;
      document.write("Over Time Hour:"+ock2+" Over Time Cash is: "+ock2*20)
}else{
      document.write("Over Time is less 40hour")
}
}
workHourcheck(userHour)*/

//10
/*document.write("<h3>Note Range Rs:5 to Rs:100</h3>"+"<br>")
var userCash=prompt("Enter Amount");
function noteCheck(){
var a=userCash/100;
    ab=userCash%100;
    document.write("100 Notes Quantity: "+Math.floor(a)+"<br>");
var b=ab/50;
    ba=ab%50;
    document.write("50 Notes Quantity: "+Math.floor(b)+"<br>");
var c=ba/20;
    cb=ba%20;
    document.write("20 Notes Quantity: "+Math.floor(c)+"<br>");
var d=cb/10;
    dc=cb%10;
    document.write("10 Notes Quantity: "+Math.floor(d)+"<br>");
var e=dc/5;
    ed=dc%5;
    document.write("5 Notes Quantity: "+Math.floor(e)+"<br>");
}
noteCheck(userCash);*/

// Chapter 43-48

//01
/*function alertbtn(){
      alert("Alert Button Successfully Work")
}*/

//02
/*function imgmsg(){
      alert("Thanks for Purchasing Phone from us");
}*/

//03
/*function delRow1(){
var getRow1 = document.getElementById("row1");
getRow1.style.display="none";

}
function delRow2(){
      var getRow1 = document.getElementById("row2");
      getRow1.style.display="none";
      
      }
      function delRow3(){
            var getRow1 = document.getElementById("row3");
            getRow1.style.display="none";
            
            }*/

//04

// task in html file

//05
/*function inc(){
    var getDis = document.getElementById("display").innerHTML;
    getDis++;
    document.getElementById("display").innerHTML = getDis;
}
function dec(){
      var getDis = document.getElementById("display").innerHTML;
      getDis--;
      document.getElementById("display").innerHTML = getDis;
  }*/


  // Chapter 49-52

  //01
  /* 
  function getvalue(){
    var uname = document.getElementById('uname');
    var email = document.getElementById('email');
    var password = document.getElementById('pass');
    document.write("User Name: "+uname.value+"<br>");
document.write("Email: "+email.value+"<br>");
document.write("Password: "+password.value+"<br>");
    
}
  */

//02

/* 
function getvalue(){
    var pgf =document.getElementById('pgf1');
    var pgf2 = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto consequatur quod error id nostrum excepturi ea debitis ab sunt delectus voluptatum, blanditiis fugiat perspiciatis laudantium alias nam iusto ducimus nesciunt!"
    
    pgf1.innerHTML=pgf2;
}
*/
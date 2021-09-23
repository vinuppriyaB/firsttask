

//var d=new Date();
//d=new Date();
// console.log(d.toString())
// console.log(d.getFullYear());
// console.log(d.getDate());
// console.log(d.getDay());

// console.log(d.getMonth())
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());
// console.log(d.getMilliseconds());
// console.log(d.getTime());
// d.setDate(6)
// console.log(d.toString());
// //
//b.appendChild(z);
////var d=a.appendChild("this is appendchild");
//console.log(c);
//console.log(d);
//console.log(d.get);
///document.body.append(a);
var pdiv=document.createElement("div");
pdiv.setAttribute("style","padding-top:20px");
//creade date input field
var datelement=document.createElement("input");
datelement.setAttribute("type","date");
datelement.setAttribute("id","dob");
datelement.setAttribute("name","dob");

pdiv.appendChild(datelement);

//create abutton element
var button=document.createElement("button");
button.innerHTML="Display data";
button.setAttribute("class","btn btn-primary");
button.addEventListener("click",calculate);
pdiv.appendChild(button);

//display the data in th html
var dd=document.createElement("div");
dd.setAttribute("id","display");


function calculate()
{
    var input=document.getElementById("dob").value;
    console.log(input);
    //whether my input is valid or not
    if(Date.parse(input)){
        var inputdate=new Date(input);
        var currentdate=new Date();
        console.log(currentdate);
        var millisecondsdiff=parseInt(currentdate.getTime())-parseInt(inputdate.getTime());
   console.log(millisecondsdiff);
   
   
   var secondsdiff=mathfloor(millisecondsdiff,1000);
   console.log(secondsdiff);

   var minutesdiff=mathfloor(secondsdiff,60);
   console.log(minutesdiff);

   var hoursdiff=mathfloor(minutesdiff,60);
   console.log(hoursdiff);

   var daydiff=mathfloor(hoursdiff,24);
   console.log(daydiff);

   var yeardiff=getyear(inputdate,currentdate);
   console.log(yeardiff);

   var monthdiff=getmonth(inputdate,currentdate);
   console.log(monthdiff);

   dd.innerHTML=`given input date is:${inputdate}<br>
   
   year:${yeardiff}<br>
   month:${monthdiff}<br>
   days:${daydiff}<br>
   hours:${hoursdiff}<br>
   seconds:${secondsdiff}<br>
   milliseconds:${millisecondsdiff}<br>`
    }
    else{
dd.innerHTML="invalide date";
    }
    document.body.appendChild(dd);
}

function mathfloor(value1,value2)
{
    return Math.floor(value1/value2);
}
function getyear(value1,value2)
{
    var date1=new Date(value1);
    var date2=new Date(value2);
    return date2.getFullYear()-date1.getFullYear();
}
function getmonth(value1,value2)
{
    var year=getyear(value1,value2);
    var month=(year*12)+(value2.getMonth()-value1.getMonth());
    return month;
}
document.body.append(pdiv);
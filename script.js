// //XML  HTTP REQUEST(xhr) (VIA API)
// // Step 01: create a XHR object
// var  request= new XMLHttpRequest();
// //Step 02:initatiate a connection(starting a connections)
// //true is used if your api doesnot want to affect the remaining  execution of your code

// request.open('GET','https://restcountries.eu/rest/v2/all',true);
// //step 03: sending a connection

// request.send();
// //step 04: once the data has been received successfully from server we need to extract te data  from JSON 

// //some conversion is needed here 
// request.onload=function(){
// var data=JSON.parse(request.response);
// console.log(data);
// }

// for(let x of data)
//      {
//          for(let key in x)
//          {
//             console.log(key+" "+x[key])
//          }
         
//      }
// 1.Get all the countries from Asia continent /region using Filter function
// let result=data.filter(e=>  e.region==="Asia").map(e=> e.name)
//         console.log(result)

//2. Get all the countries with a population of less than 2 lakhs using Filter function
// let result=data.filter(e=>  e.population<200000).map(e=> e.name)
//      console.log(result) 

// 3.Print the following details name, capital, flag using forEach function
// data.forEach(element => { 
//     console.log(element.name+"   "+element.capital+"    "+element.flag)

// 4.Print the total population of countries using reduce function
// let result=data.reduce((a,b)=> 
//         {
//             return a+b.population
//         },0)
//         console.log(result)
// let result=data.map(e=>e.population).reduce((a,b)=> a+b)
        // console.log(result)

// 5.Print the country which uses US Dollars as currency.
// let res=data.filter(e=> e.currencies[0].code==="USD").map(e=>e.name)
        //console.log(res)

// for(let i in data)
        // console.log(data[i].name+" "+data[i].flag+" "+data[i].population)
        // for(let i in data)
        // console.log(data[i].currencies[0].name)
        
        
        
        // let result=data.map(e=>e.currencies[0])
        // console.log(result)
        // let res=data.filter(e=> e.currencies[0].code==="USD").map(e=>e.name)
        // console.log(res)
let result=[];
var request=new XMLHttpRequest();
request.open("Get","https://restcountries.eu/rest/v2/all",true)
request.send();
request.onload=function()
{
    var data=JSON.parse(request.response);
    let res=data.filter(e=> 
        {
            for(let x in e.currencies)
            {
            if(e.currencies[x].code==="USD")
            return true
            }
    }).map(e=>e.name)
        console.log(res)
}
let request=new XMLHttpRequest();
request.open("Get","url",true)
request.send();
request.onload=function()
{
    let data=JSON.parse(request.response)
    console.log(data)
}
//Java Script

//Data Taypes

var Intgers = 1;     //var it has a global scope through out pgm

const Float = 3.14;    //const it has local scope and it values can't change

let String = "KingAS";  //it has a local scope

let boolean = true;

function fun_name(par1,par2) {
    // function is key word to declare a function 
    // par1 and par2 is parameter of any type
    return par1 + par2;
    // return it use to return any type of value
}

fun_name(10,20);
//fun_name(10,20) is a function call 
// 10 and 20 is a arguments

/*
js support all selection , looping , controling statements which available in other pgm languages

selection :
if
if else
elseif

looping :
while
do while
for
for in
for of

control
goto
break
continue

*/

//fat arrow function
const NewLine = () => { console.log(" ") }; //"\n" it will work

//template it is encode with `` this symbol ${} it use access value of varible
console.log(`Intger value = ${Intgers} String = ${String}`);

//Array in js
function array(){

let arr = new Array(); //optional

arr = [1,2,3,4,5];

console.log("length of array : "+arr.length);
//.length it contain length of array

NewLine();
for(var i = 0; i < arr.length; i++)
    console.log(arr[i]);

NewLine();
//for in loop
for(let elements in arr) //it return the index number in whole
    console.log(elements);  

NewLine();
//for of loop
for (let elements of arr) //it return the values of array in whole
    console.log(elements);

NewLine();
// forEach loop it is method of array class
arr.forEach(function(element, index, array){

    //here arr is object of array class and forEach is a method of it
    //function here it is a callback function and arguments are inbulit 

    console.log("values = "+ element +" index = "+ index +" Array = "+array);

}); 

NewLine();
// forEach use fat arrow function
arr.forEach((element,index,array) =>{
    console.log("values = "+ element +" index = "+ index +" Array = "+array);
});

}

//array();

function Print(values){

    console.log(values);

}

function ArrayMethod() {

    let Characters= ['1','3','4','5','2']; 
    //array of characters array index start from 0 to n-1

    Characters.indexOf('2',2);

     /* indexof
     returns the index number of search element 
     it is an case sensitive
     if no result found it return -1
     default index is 0
     */

    Print(Characters.indexOf('2',1));
    NewLine();

    Characters.lastIndexOf('4',2);
    //lastIndexOf  : it is similar to indexof but it start searching from back side (backward) to front

    Print(Characters.lastIndexOf('4',2));
    NewLine();

    //includes : it is use to check if particular element is present in that array or not it return boolean value
    Characters.includes('5',1); //default index is 0 and serach from front or forward

    Print(Characters.includes('5'));

    const Intger = [10,30,20,40,60,50];

    //Intger.find(()=> {current,index,arr},this);

    //find it return single value if not found return indefine
    const findnum = Intger.find((current,index,arr)=> {return current ; });

    Print(findnum); // find index it return index of element

    //filter it return new array which satisfy condition if condition not satify it return empty array
    const price = Intger.filter((value,index,array) => { return value > 10});

    Print(price);
    NewLine();

    //sort : it is use to sort the values and return sorted array default sort is ascending order 
    //this work with string it will convert any vaue to string 
    //learn about it from google
    Print(Intger.sort())

    //Basic operation on array
    
    //1.Push() : it is an method(function) which use to add new element at end of an array it will return the new length of array
    // we can add any no of elements
    let count = Intger.push(70,80,90,100);

    Print(Intger);

    //2.unshift() : it is use to add new at starting or front of an array it also return new length of array
    Intger.unshift(00,01);

    Print(Intger);

    //3.pop() : it is use to remove last element and return removed element
    Print(`old array = ${Intger} \n ${Intger.pop()} delete element \n new array ${Intger}`);

    //4.shift() : it is use to remove first element and return removed element
    Print(` old array = ${Intger} \n ${Intger.shift()} delete element \n new array ${Intger}`);
}

//ArrayMethod();

function Array_splice() {
    
    /*
    5.splice() : it is an method which can perform task of all above methods
    it can update add new element and removing existing element etc
    it may return deleted element
    (pos_to_insert or delete , Number_of_elemet_to_delete , "element_to_add");
    */

    const months = ['Jan','Feb','mar','may'];

    months.splice(3,0,"April");
    //adding element here 3 is position to insert 0 mean no element to remove april is value to insert
    Print(months);

    let indexOfMonth = months.indexOf('mar');
    if(indexOfMonth != -1){
    months.splice(indexOfMonth,1,'Mar');
    //here we are updating mar to Mar by passing it index value with delete 1 element and adding new element Mar at it place
    }else {
        Print("mar not found");
    }
    
    Print(months);

    let temp = months;
    temp.splice(indexOfMonth,Infinity);
    //infinity is use to remove all elements after this index number
    Print(temp);

}

//Array_splice();

function Sub_Array_methods() {
    
    //6.map() : it return the new array containing the result of calling a function on every element in a boolean form of array
    //it doesn't change the old array
    let arr = [1,4,9,16,25];

    //note break and continue will not work in fat arrow function
    let newArr = arr.map((current,index,arr)=>{
        return current > 9;
    });

    Print(arr);
    NewLine();
    Print(newArr);
    
    newArr = arr.map((current,index,arr)=>{
        return `index ${index} current ${current}`;
    });
    
    NewLine();
    Print(newArr);

    //Ability to chain other methods we can attach reduce(),sort(),filter(),and so on to map ,method
    //which can't be forEach method which return undefine

    arr = [25,36,49,64,81];

    let sqr = arr.map((current)=>{
        return Math.sqrt(current);
    });

    NewLine();
    Print(sqr);

    newArr = arr.map((current)=>{
        return current * 2;
    
    }).filter((current)=>{
        return current > 50;

    }).reduce((accumulator,current,index,arr) => {
        return accumulator += current;
    });

    NewLine();
    Print(newArr);

    //reduce() : it use to flatten 3d or 2d into single d array
    let array1 = [5,6,2];
    let sum = array1.reduce((accumulator,current,index,arr) => {
        debugger;// it use to debug it work on brower 
        return accumulator += current;
    });

    NewLine();
    Print(sum);

    //2 d array
     array1 = [
         ['1','2'],
         ['3','4'],
         ['5','6'],
         ['7','8']
     ];

     // converting 2d array to 1d array 
     let flatarr = array1.reduce((accum, current)=>{
         return accum.concat(current);
     });

     NewLine();
     Print(flatarr);
}


//Sub_Array_methods();

//Strings in js


function string() {
    
    let string ;
    string = "King AS";
    Print(string);

    string = "hi \"king\"AS";
    Print(string);

    //indexof :  it is similar like indexof array method
    Print(string.indexOf("AS"));

    Print(string.lastIndexOf("king"));

    //search : it return the position of the value
    
    Print(string.search("i"));

}

//string();

function Extract_string() {
    
    /*
    1.slice(start, end) : it extract the part of string and return new string 
    the prginal array will not change if end is not mention it will return whole value after start
    it will take negitive value and remove the negitive value character from end

    2.substring(start, end) : it is similar like slice but not accept negitive value
    if negitive value passit will display from 0 to start pos

    3.substr(start, len) : similar to slice but second arg is len
    */
   let friuts = "Apple, Banana, watermelon";

   let result = friuts.slice(friuts.search('Banana'));
   Print(result)

   result = friuts.slice(friuts.search('Banana'),-2);
   Print(result);

   //only allow 15 character
   result = friuts.slice(0,15);
   Print(`value ${result} length ${result.length}`);

   //substring last value will be null 
   result = friuts.substring(0,4);
   Print(result);

   //to return from back
   result = friuts.substr(-10);
   Print(result);

   //replace(searchfor,replacewith) : it use to replace the string and default replace is first match it return new string 

   result = friuts.replace("watermelon",'Watermelon');
   Print(result);

   //charAt(index) : it will return the value at that index 

   Print(friuts.charAt(0));

   //charCodeAt(index) : it return the ASCII value of character (UTF-16 0 to 65535 range unicode or ASCII)

   Print(friuts.charCodeAt(0));

   //Property Access : it mean access the particular character with array index
   Print(friuts[00]);

   /*
   toUpperCase()
   toLowerCase()
   concat() 
   trim() : it is use to remove the space from front and back only doesnot has arg
   split() : convert string to array on the base of argment pass
   */

   Print(friuts.toUpperCase());
   Print(friuts.toLowerCase());
   Print(friuts + result);
   Print(friuts.concat(friuts,result));

   let txt = "a,b,c,d";

   Print(txt.split(","));
   Print(txt.split("|")); //add this | to string to effect 

}

//Extract_string();

//Time and date in js

function date_Time() {
    
    /*

    js date object reperesent a single moment in time in a platform independent format 
    Date object contain a number tehat represent millisecinds since 1 jan 1970

    4 way to create a new date object

    new Date()
    new Date(year, month, day, hours, minutes, seconds, milliseconds)

    new Date(milliseconds)
    new Date(date string)

    */

    let currentDate = new Date();
    Print(currentDate);
    NewLine();
    Print(currentDate.toLocaleString());
    NewLine();
    Print(currentDate.toString());
    NewLine();
    Print(Date.now());//milliseconds from 1 jan 1970
    NewLine();
    //note: in this month start from 0 to 11
    currentDate = new Date(2022,0,25,10,33,30,0);//custom date passing month compulsary
    Print(currentDate.toLocaleString());
    
    Print(new Date("jan 1, 2021 11:11:00").toLocaleString());

    Print(new Date(1650350229930).toLocaleDateString());

    //date methods

    currentDate = new Date();
    NewLine();
    Print("date get methods");
    Print(currentDate.toLocaleTimeString());
    Print(currentDate.toLocaleDateString());
    Print(currentDate.toLocaleString());
    Print(currentDate.getTime());
    Print(currentDate.getFullYear());
    Print(currentDate.getMonth());
    Print(currentDate.getDate());
    Print(currentDate.getHours());
    Print(currentDate.getDay());
    Print(currentDate.getTimezoneOffset());

    //set methods
    NewLine();
    Print("set date methods");
    Print(currentDate.setHours(01,30,00));
    Print(currentDate.setDate(5));
    Print(currentDate.setMonth(0));
    Print(currentDate.setFullYear(2022,1,2));
    NewLine();

    //Time it also had get and set
    Print("time ");
    Print(currentDate.getTime());
    Print(currentDate.getHours());
    Print(currentDate.getMinutes());
    NewLine();

    //Note actual date and time will show in html in normal form

}

//date_Time();

function math_operation() {
    /*
    Js provide a Math class which has following methods and property (function and variables)
    Math.PI;
    Math.pow() ,sqrt() ,abs(x), celi(), floor(), min(arr), max(arr), random(), round()
    trunc(): it return before decimal part of a num
    */
   Print(Math.PI);
   Print(Math.pow(2,3));
   Print(Math.sqrt(4));
   Print(Math.abs(-5));
   Print(Math.ceil(4.5));
   Print(Math.floor(7.6));
   Print(Math.random());
   Print(Math.trunc(10.67));
}

//math_operation();

/*

Window and Document : both are object in js but window is a global object for browers
and Document is a local object for web page and it is a child object of window

Document is part of window and things of document can access by window but things of indow cannot access by document
window for history and url of browers
Example of window:    window.location or window.location.href setTime(), setIntervel screen

Document(dom) deal with html

Brower object model(bom) : navigator, screen, location, frames, history xmlhttpsrequest

Properities of Windows
window.innerwidth
window.innerHeight
window.history.back();
alter(location.href);
api

if(comfirm("text")){        //comfirm is inbulit fun
    location.href = "url"
}

*/

function Document_HTML() {
    //below code can run in html or in inspect of browers
    //css .class #id
    //follow tree or root structure node, child node
    document.documentElement;
    document.head; //get item of head tag in html
    document.body;
    document.body.childNodes;
    document.body.children;
    document.body.hasChildNodes(); //bool
    document.body.firstElementChild();
    const First = document.body.firstElementChild();
    First.style.color = "green";
    const Second = document.querySelector('.className');
    Second.style.color = "yellow";
    document.head.parentElement;
    document.body.nextSibling;

    /**
     * @type {number}
     * amount is required by x to make y work
     */
    let  amount;
}

function changeText() {
    let val;
    val = document.getElementById('heading1');
    val.innerHTML = "Hi King AS"

    var clas = document.getElementsByClassName('par');
               
    document.querySelector('#pa').innerHTML = "query selector use";
     /* it select for only single element
        use it if you want to change only one front class instance
        # for id . for class '#id', '.class'
        it will change first accessed element
         document.querySelector('tag.class');
         getElementById is best and faster
     */
}

function Event_JS(){
/*
    Events In JS
    4 ways of writing event

    1: using alert();

    2: By calling a function in onclick

    3: using inline events (HTML onclick ="")
    it may override the function if it define again

    4: using Event Listeners (addEventListener and IE's attachEvent)
    we can call same event multiple time event if overrides

    Event object : it is an parent object of event object
    Example: MouseEvent , KeyboardEvent, focusEvent InputEvent
    
    MouseEvent : object any event occur due to mouse is an mouseevent
    mouseDown,mouseUp,MouseEnter,MouseLeave

    KeyboardEvent :
    keyUp KeyDown keyEnter

 */

    //inline event
    const inline = document.getElementById('span2');
    inline.onclick = function(){    //anomoyanes function
    alert("inline function");
    document.getElementById('pa').innerHTML = "check";
     }
     //note it will work if script is in body tag

    const eventListen = document.getElementById('span3');
    eventListen.addEventListener('click',() => {
    //callback function :mean passing a function as argument
    alert('event listtener');
    });

    let EventObject = document.getElementById('span4');

    const checkEvent = () =>{
        alert("hi");
        console.log(event);
        console.log(event.target);
        console.log(event.type);
        //check this in inspect 
    }
    EventObject.addEventListener('click',checkEvent);

    //mouseeEvent

    function mouseDown() {
        document.getElementById('mouse').style.color = "green";
    }
    function mouseUP() {
        document.getElementById('mouse').style.color = "red";
    }

      let mouseListener = document.getElementById('h4');
   
      mouseListener.addEventListener('mouseenter',()=>{
      mouseListener.style.backgroundColor = "red";
        });

    mouseListener.addEventListener('mouseleave',()=>{
    mouseListener.style.backgroundColor = "green";
    });

    //keyboad event refer html file 

    const keyPress = () => {
        document.getElementById('p2').innerHTML=`key press ${event.key} and code ${event.code}`;
    }
    const keyDown = () => {
        document.getElementById('p2').innerHTML="key Down";
    }

    //input event
    const selectElement = () =>{
        const select = document.getElementById('select').value;
        document.getElementById('result').innerHTML = `${select}`;
    }
}

//Timing base event in js
function Time_base(){
/*

setTimeout(function, milliseconds)
Execute a function after waiting a specified number of millisecond

setInterval(function, milliseconds)
same as setTimeout() but repeats the execution of the function continueously

clearTimeout()
clearInterval()

*/

let response = document.querySelector("#response");
function res() {
    alert("hi");
    response.innerHTML="response"
}
               
let paragraph = document.getElementById('p3');
let num =0;
let timeref;
let btn = document.getElementById('start1');
response = ()=>{
   timeref = setInterval(()=>{
        paragraph.innerHTML = `${num}`;
        num++;
        },1000)
    }
    btn.addEventListener('click',response);

const stop1 = document.getElementById('stop');
stop1.addEventListener('click',()=>{
    clearInterval(timeref);
});

}

//oops in js 

function objects(){
/*
object literals : it is simply a key:value pair data structure
storing variables and function togetter in one container
*/
// 1st way

let bioData = {
    myName:"King AS",
    myAge : 20,

    getData : function(){
        Print(`My Name is ${bioData.myName} and Age is ${bioData.myAge}`)
        }
    }

    bioData.getData();

    //2n way after es6
    let student = {
        Name : "std",
        regno : "123",
        Display(){
            Print(`student Name ${student.Name} and regno ${student.regno}`);
        },
        //object inside object
        friend : {
            Name : "xyz",
            regno : 345
        }
    }
    student.Display();
    Print(student.friend.Name);

    //this it contain current context
    //default is window object and it will not work in fat arrow function
}

//objects();

function sum(a=10,b=20) {//default argument
    Print(a+b);
}
//sum();

function destructuring() {
    let array = ["name","id",20];
    //array destructuring
    let [Name,Id,Value,Extra="230"] = array;
    Print(Name);

    //object
    let bioData = {
    myName:"King AS",
    myAge : 20,

    getData : function(){
        Print(`My Name is ${bioData.myName} and Age is ${bioData.myAge}`)
        }
    }

    //object destructuring
    let {Name1,myAge,Extra1="230"} = bioData;
    Print(myAge);

    //object properties
    // wecan use Dynamic properties
    let Name2 = "king";

    bioData = {
        [Name2] : "is my name",//dynamic
        myAge : 20,
        [300*1000] : "multiple"
        }
        Print(bioData);

        //no need to write key and value if both are same
        bioData = {Name2 : Name2,myAge : myAge};// here my name2 is above let name2
        Print(bioData);
}

//destructuring();

function spread(){
//spread operator

const color = ['red','green','blue'];
Print(color);
const myColor = [...color,'yellow','black']; 
//here ... is spread  operator avoid the writing the same data in new array
Print(myColor);
 let   bioData = {
        Name2 : "is my name",//dynamic
        myAge : 20,
        [300*1000] : "multiple"
        }
let person = {...bioData, height:'10'};
Print(person);

}

//spread();

//ES7  include,expoent operator
Print(2**3);//it is like 2*2*2 increase star to increase 2

//Es8 String object.value object.entries (padding of string)

function Es8(params=0) {
    let str = "string is".padStart(10);
    Print(`${str} hi`);

    let person = {name: 'AS', age : 20};
    Print(Object.values(person));
    Print(person = Object.entries(person));
    //Print(objects.fromEntries(person));//es9 to convert array to object
}

//Es8();

function Es9(params=0) {
        //2 d array
     const array1 = [
         ['1','2'],
         ['3','4'],
         ['5','6'],
         ['7',['8','9']]
     ];

     //Print(array1.flat(Infinity));
     // it work in es9 only or in brower


}

//Es9();

function Es2020(params) {
    let oldNum = Number.MAX_SAFE_INTEGER;
    Print(oldNum);
    //Bigint
    Print(9007199254740991n + 12n);
    Print(typeof(9007199254740991n));//bigint end with n
}

//Es2020();

//"use strict"; it use to avoid mistakes

/*  Advance Js
    Event Propagation (Event bubbling and capturing) : handle event inner (bubble) visewarsa in capture
    defaut buttom to top (bubbling)
    event.stopPropagation()
    btn.addEventListener('click',function,true) //capturing default is false
    
    Higher order function
    Callback Function
    Function currying
    Callback hell
    Ajax call using XmlHttpsrequest
    JSON
    fetch API
    promises
    Async-Await
    Error handling
*/

//higher order function : a function which take function as argument
//callback function : A function which are passing as argument to another function or 
//creating calculator

const  add = (a,b)=>{ //call back function because it is pass as arg to another function
    return a+b;
}
const  subs = (a,b)=>{
    return Math.abs(a+b);
}
const  mul = (a,b)=>{
    return a*b;
}
function  calculator  (num1,num2, operator){ //higher order function because it is taking an function as arg
    return operator(num1,num2);
}

const refer = calculator(6,8,add);
Print(refer);
//return add(5,2);
//console.log(calculator(5,8,subs));


function Asynchronous() {
/*
    we have creation and execution phse
    hoisting : it is a mechanism where variables and function declaration are moved to the top of their scope before running

    scope chain : it is use to resolve the value of variable in js

    Lexical scoping : it mean now inner function can get access to their parent function variables but  parent function cannot
    access the child function data

    closures in js : it is combination of function bundle together with reference to its surrending state  or
    it give access to an outer function scope from inner function

    Synchronous : it mean mutual excution waiting endtill one job is done to start another //sequence execution

    Asynchronous : mean doesn't have to wait end till a job is complete
    setTimeout is a Asynchronous
*/  
const outer = (a) => {
    let b =10;
    const inner = () => {
    let sum = a+b;
    Print(`sum is ${sum}`);
    }
    return inner;
}
    let closures = outer(5);
    closures();
}
//Asynchronous();

//event loop in js
function eventLoop() {
    /*
        Event loop in that function is move into execution stack and execute if any Asynchronous or window object is 
        found it will move to web APIS and remaining of stack will execute and come to message queue 
        and come back to stack Asynchronous or window object
     */
}
//eventLoop();

//function currying : it is a technique of evaluating with multiple argument into sequence of function with single argument
function currying() {
    
    function sum(params) {
       return function(params1){
           return function(params2){
                console.log(params+params1+params2);
            }
       }
    }
    // or const sum = (n1) => (n2) => (n2) => Print(n1+n2+n3);
    sum(5)(3)(8);//currying
}
//currying();

//Api fetching using Ajax and xmlhttpsResquest
function API_Fectch(params) {
    /*
    fetch api work in html 
    add any tag such as div and span and give id to it
    Ajax will fetch data without effecting full page
    have or get api or bulid it
    API will be in JSON form array in the object
    method of xmlhttpRequest open(), post(), send(),delete()
    attrubutes = "get","post"
    */ 
   //getting the element by id
   const container = document.getElementById('id');

   //creating object request of xmlhttpRequest
   const Request = new XMLHttpRequest();
   Request.open('GET',"url of API");
   //sending request to api 
   Request.send();

   //to get response on loading
   Request.addEventListener('load',function(){
       //array desturcturing and converting JSON to js
      const [data] = JSON.parse(this.responseText);
      //to get particular data from api object.dataName
      const htmlData = `
      here will be html code which may insert in to any tag 
      example : <div class="name"> <h3>${data.capital}</h3> </div>`;
      //getting capital of a country using api

      container.insertAdjacentHTML('afterbegin',htmlData);
   });

}

function Json(){

/* JSON java script object notation it is similar like object
   [{"name":"Kingas","LastName" : "AS"}]
   it treat data as string
*/
    var my_object = {key1 : "some text", key2 : true , key : 5};
    //converting object to json
    var objectAsString = JSON.stringify(my_object);
    Print(objectAsString);
    
    Print(typeof(objectAsString));
    //converting json to object
    Print(JSON.parse(objectAsString));    
}

//Json();

function Promises() {
    /*  
        Promises in js and fetch()
        2 case we we get data from api or may not or on going
        fetch() is a method and return promises
        we consume promise in 90% rather than create
        we use promise to avoid callback hell
    */
   const jokes = document.getElementById('joke');
   const button = document.getElementById('button');

   const generateJoke = () =>{

    const setHeader = {
        headers : {
            Accept : "application/json"//setheader to json form
        }
    }
       fetch('url of api',setHeader)
       .then((res)=>res.json()) //return
           .then((data)=>{
               jokes.innerHTML = data.joke;
           }).catch((error)=>{
           console.log(error);
       });
   }

   button.addEventListener('click',generateJoke);
   generateJoke();
}

function Async_wait() {
   const jokes = document.getElementById('joke');
   const button = document.getElementById('button');

  /* async function name(params) { } */

   const generateJoke = async () =>{ //converting to async
    try{
    const setHeader = {
        headers : {
            Accept : "application/json"//setheader to json form
        }
    }
       const respose = await fetch('url of api',setHeader);
       const data = await respose.json();
       jokes.innerHTML = data.joke;
    }catch(error){
        console.log(error);
    }
       
   }

   button.addEventListener('click',generateJoke);
   generateJoke();    
}

//inline code
//<button onclick="document,getElementById('id_image_tag').src='image/ligt.png'">turn</button> to change image on click

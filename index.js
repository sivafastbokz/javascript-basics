//object

const obj ={
    name:'siva',
    age:21,
    gender: {
      name: 'fi',
       rank : { ui : 'reactjs'}
    }
  }

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

const mycar = new Car('ford','v6',1998);
const car1 = new Car("Nissan", "300ZX", 1992,);
//console.log(mycar);
//console.log(car1)
//dot notation
//console.log(mycar.make,car1.make)
//bracket notation
//console.log(mycar["model"])

//array
let arr =[1,2,3,4,5,6,7,8,9,10]
console.log(arr)
//filler method
let arr1 =arr.filter((arr)=>arr>5)
//console.log(arr1)
var arr2 =arr.filter((arr)=>arr < 5)
//console.log(arr2)
const arr3 = arr.filter(num => num % 2)
//console.log(arr3)
//map
let array = [1,3,5,6,7,8,99,]
let newarr = array.map(function(val,index){
  return {key:index,value:val*val}
})
//console.log(newarr)
//map has method
var mymap = new Map()
mymap.set(1998,'ford')
mymap.set(1995,'bmw')
mymap.set(1991,'audi')
//console.log(mymap.has(1998))
//console.log(mymap.has('mdm'))
//map.entries
let mapobj=mymap.entries();
//console.log(mapobj)
//map.get
//console.log(mymap.get(1998))
//map.key
//console.log(mymap.keys())
//map.foreach
mymap.forEach((val,index)=>{
 // console.log('values:',val + ', key:',index)
})
//map.delete
//console.log(mymap.delete(1998))


// what is array of object?
// Array of objects in javascript is just an array having object data as its value. 
// Array methods are predefined methods that help to perform various operations on an array.

const userlist =[{
  name:'tony',
  age:45,
  skills:{
    code:'javascript',
  },
},
{
   name:'hulk',
   age:55,
   skills:{
    code:'reactjs',
   }
}
]
// Looping through an Array of Objects
// we are going to use the map method to loop through an array of objects.
//userlist.map((value)=>{
  //for(let property in value)
 // console.log(`${property}: ${value[property]}` )
//})
for(var key in userlist){
  // console.log(userlist[key],'siva')
}
// console.log(userlist[0].skills.code,'siva')

//object.entries method
for (const entry of Object.entries(userlist)) {
  for (let value in entry[1]) {
      // console.log(entry[1][value],'siva');
  }
}

//array
let num=[1,2,3,45,5]
num.push(6)//adds a value in last of an array
// console.log(num,'siva')
let num1=[1,2,3,45,5]
num1.pop()//removes the last value of an array
// console.log(num1,'siva')
let num2=[1,2,3,45,5]
num2.unshift(0)//adds a value in first of an array
// console.log(num2,'siva')
let num3=[1,2,3,45,5]
num3.shift()//removes the first value of an array
// console.log(num3,'siva')

// Array.slice()
// Array slice method helps to copy an array without affecting the original array.
let mynewarr= num1.slice(0,2)
// console.log(mynewarr,'siva')


// Iterating through loop
let itarr = [1,2,3,4,5]
for(var i=0; i<itarr.length; i++){
  // console.log(itarr[i],'siva')
}



const list =[
  {
	"id": "0001",
	"type": "donut",
	"name": "Cake",
	"ppu": 0.55,
	"batters":{"batter":[
					{ "id": "1001", "type": "Regular" },
					{ "id": "1002", "type": "Chocolate" },
					{ "id": "1003", "type": "Blueberry" },
					{ "id": "1004", "type": "Devil's Food" }
				]
		},"topping":[
			{ "id": "5001", "type": "None" },
			{ "id": "5002", "type": "Glazed" },
			{ "id": "5005", "type": "Sugar" },
			{ "id": "5007", "type": "Powdered Sugar" },
			{ "id": "5006", "type": "Chocolate with Sprinkles" },
			{ "id": "5003", "type": "Chocolate" },
			{ "id": "5004", "type": "Maple" }
		]
}]
const firstbatter = list[0].batters.batter[list[0].batters.batter.length-1]
//console.log(firstbatter.id)
const lastTopping = list[0].topping[list[0].topping.length - 3];
//console.log(lastTopping.type);

const megaobj=[
	{
		"id": "0001",
		"type": "donut",
		"name": "Cake",
		"ppu": 0.55,
		"batters":{"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" },
						{ "id": "1003", "type": "Blueberry" },
						{ "id": "1004", "type": "Devil's Food" }
					]
			},"topping":[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5007", "type": "Powdered Sugar" },
				{ "id": "5006", "type": "Chocolate with Sprinkles" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
  //
	{
		"id": "0002",
		"type": "donut",
		"name": "Raised",
		"ppu": 0.55,
		"batters":{"batter":
					[
						{ "id": "1001", "type": "Regular" }
					]
			},"topping":[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
  //
	{
		"id": "0003",
		"type": "donut",
		"name": "Old Fashioned",
		"ppu": 0.55,
		"batters":{"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" }
					]
			},"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	}
]

// const batter=megaobj[0].batters.batter[megaobj[0].batters.batter.length-1]
// console.log(batter.id,'siva')
// const lastindex=megaobj[2].topping[megaobj[2].topping.length-3]
// console.log(lastindex.type,'siva')
// const middleindex=megaobj[1].topping[megaobj[1].topping.length-5]
// console.log(middleindex.type,'siva')

const Glazed=megaobj[2].topping[megaobj[2].topping.length-3]
// console.log(Glazed.id,'siva')

//let const var

//var // global scope
var number = 50
function print() {
  var square = number * number
//   console.log(square)
}

// console.log(number) // 50s

print()//2500

//The var keyword allows for redeclaration.//let const connot redeclare.

// const number = 50
// console.log(number) // 50

// const number = 100
// console.log(number) // 100

//reassignment// var and let key allows you to reassing the vlaue whereas the const key won't
var nissan = 10 
nissan=20
// console.log(nissan)
//hosting
// console.log(data)
var data=30//undefined


//Null: Object 
//Undefined: undefined

// var date2 = 
//console.log(4 == '4')
//console.log(4 === '4')

// console.log(typeof null)

//functions
//The code inside the function will execute when "something" invokes (calls) the function:

//When an event occurs (when a user clicks a button)
//When it is invoked (called) from JavaScript code
//Automatically (self invoked)

function myfun(a,b){
	return 2*4
}
 console.log(myfun())

 let x =ber(2,3)
function ber(a,b){
	return a*b
}
console.log(x)

const great = (a,b) =>{
        if(b>a)
		return	'b is greater'
		else
		return 'a is greater'
}
console.log(great(2,3))


function mysun(dosa,idle,poori){
      return dosa+idle+poori
}
console.log(mysun( 99,55,55))

function calFahrenheit(cel) {
	return (cel*9/5)+32; //Conversion formula
  }
  
//   console.log(calFahrenheit(0)) 
//   console.log(calFahrenheit(20)) 
//   console.log(calFahrenheit(40)) 


function reversenumber(n){
	n=n + "";
	return n.split("").reverse().join("");
}
// console.log(reversenumber(45782))


function cal(totalmark=50){
	if(totalmark<50){
		return 'fail'
	}else
	return 'pass'
}
// console.log(cal(50))

function calculator(a,b,c){
	return a+b+c
}
console.log(calculator(2,2,2))
 
const arrow = () =>{
        
}
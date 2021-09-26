/*1.Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######*/
/*let i;
let a =prompt("input the number of calls");
for (i=1; i<=7; i++)
{
    console.log("#");
}
let a=prompt("enter input")
for (str = a; str.length < 8; str+= "#")
  console.log(str);


  //2.Iterate through the string array and print it contents
  let strArray= ["<option>Jazz</option>",
  "<option>Blues</option>",
  "<option>New Age</option>",
  "<option>Classical</option>",
  "<option>Opera</option>"];
  
  for (let i=0; i<strArray.length; i++)
  {
      console.log(strArray[i]);
  }
    


   //3. var myarray=[11,22,33,44,55]
     //write a code to count the elements in the array . Don’t use length property
     // Declare an empty array;
     var myArray =[ ];
   function arrayLength(myArray){
  var length = 0;
  while(myArray[length]!==undefined){
    length++;
  }
  return length;
  }
  myArray=[11,12,33,44,55]

  console.log(arrayLength(myArray)); 
  //Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.
 let foods= ["chapti", "chicken", "mushroom", "chickenfry", "omlet", "capsicum", "ptotatochips", 
 "burger", "sandwich", "fishfry", "cake", "pastry", "icecream", "vegbiryani", "jelly", "colakasya", "sootie", "chocolate", "kebab"]
  //Foods variable holds the names of your top 20 favorite foods, starting with the best food. 
  //How can you find your fifth favorite food?
   console.log(foods[4]);
   //output-omlet
   //Find the length of your foods array
   console.log(foods.length)
   //output-19

   //Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.
   let friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
     friends[0]="Munnaibhai"
    function dataHandling(input){
    for (var i = 0; i < input.length; i++) {
    }
    console.log(friends)
    }
    dataHandling(friends);

//1.Get the first item, the middle item and the last item of the array

let arry=[1,2,3,4,5]
function getElements( ){
let firstElement=arry[0];
let lastElement=arry[arry.length-1]
middleElement= arry[Math.floor(arry.length/2)];
console.log(firstElement)
console.log(lastElement)
console.log(middleElement)
}
getElements( );*/

//2.Add your name to the end of the friends array, and add another name to beginning.
let friends = [
  "Mari",
  "MaryJane",
  "CaptianAmerica",
  "Munnabai",
  "Jeff",
  "AAK chandran"
  ];
  var newArray=["mounica", ...friends, "rajesh"]
  console.log(newArray)

  

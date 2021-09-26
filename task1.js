//1.Declare four variables without assigning values and print them in console
var a,b,c,d
console.log(a,b,c,d);
//output
//undefined undefined undefined undefined

//2.How to get value of the variable myvar as output.
var myVar = 1;
console.log(myVar);
//output
//1

//3.Declare variables to store 
//your first name, last name, marital status, country and age in multiple lines.
var firstName = "Kadapagunta"
var lastName = "Mounica"
var maritalStatus = "UnMarried"
var country = "India"
var age = 25
bioData=firstName+" "+lastName+" "+maritalStatus+" "+country+" "+age
console.log(bioData.split(" "));
//output
//['Kadapagunta', 'Mounica', 'UnMarried', 'India', '25']

/*4.Declare variables to store your 
first name, last name, marital status, country and age in a single line*/
var [firstName,lastName,maritalStatus,country,age]
=["kadapagunta","Mounica","unMarried","India",25]
bioData=firstName+" "+lastName+" "+maritalStatus+" "+country+" "+age
console.log(bioData.split(" "));
//output
//['kadapagunta', 'Mounica', 'unMarried', 'India', '25']

//5.Declare variables and assign string, boolean, undefined and null data type
var myStr = "Royal Enfield"
var myBoolean = true
var myUndef = undefined
var myData = null
console.log(typeof(myStr))
console.log(typeof(myBoolean))
console.log(typeof(myUndef))
console.log(typeof(myData))
//output
/* string
   boolean
   undefined
    object   */

//6.Convert the string to integer
/*I am 25 years old. 
 You are 30 years old.*/
//parseInt
var a= "I am",
    b="You are",
    c="25",
    d="30",
    e=" years old"
     var age1= parseInt(c)
    var age2=parseInt(d)
    console.log(a+" "+age1+""+e);
    console.log(b+" "+age2+""+e)
    //output
    /*I am 25 years old
      You are 30 years old */

    // using + operator
     var age1= +c
    var age2= +d
    console.log(a+" "+age1+""+e);
    console.log(b+" "+age2+""+e)
    //output
    /*I am 25 years old
      You are 30 years old */

    //using number()
    var a= "I am",
    b="You are",
    c=Number("25"),
    d=Number("30"),
    e=" years old"
    console.log(a+" "+c+""+e);
    console.log(b+" "+d+""+e)
    //output
    /*I am 25 years old
      You are 30 years old */


    //7. Write 6 statement which provide truthy & falsey values.
    /*truthy
    *anything with a value returns true "except for zero"*/
   let x=100;
   console.log(Boolean(x))
   let pi=3.14
   console.log(Boolean(pi))
   let y=-5
   console.log(Boolean(y))
   let str = "good morning"
   console.log(Boolean(str))
   let result= "false"
   console.log(Boolean(result))
   /*true
     true
     true
     true
     true
     true
   */

   //falsey
   let X=0
   console.log(Boolean(X))
   let Y= -0
   console.log(Boolean(Y))
   let Z= ""
   console.log(Boolean(Z))
   let A
   console.log(Boolean(A))
   let B= null
   console.log(Boolean(B))
//output
/*false
  false
  false
  false
  false*/


      
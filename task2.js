   // 1.Square of a number
    var num = prompt(`enter a number:`)
    squareNum=(num*num)
    console.log(squareNum);
    

    // 2.Swapping 2 number
    let a=prompt(`enter first variable`)
    let b=prompt(`enter second variable`)
    let temp;
    temp=a
    a=b
    b=temp
    console.log(`a after swappng: ${a}`);
    console.log(`b after swappng: ${b}`); 


    //3.Addition of 3 numbers
    let x=prompt(`enter first variable`)
    let y=prompt(`enter second variable`)
    let z=prompt(`enter third variable`)
    sum= (1(+x )+ (+y) +(+z));
    console.log(sum);


    //4.Celsius to Fahrenheit conversion
    let C=prompt(`enter temperature in celsius`)
    fahHeat=((1.8*C)+32);
    console.log(fahHeat);  


    //5.Meter to miles
    let m=prompt(`enter distance in meters`)
     mile=(m/1609)
     console.log(mile)   

     //6.Pounds to kg
     let p=prompt(`enter the value in pounds`)
     kg=(p/2.205)
     console.log(kg);  


     //7.Calculate Batting Average
     let runs= prompt(`enter no of runs`)
     matches=prompt(`enter no of matches`)
     notOut=prompt(`enter no of notout`)
     average=(runs/ (matches -notOut))
     console.log(average)


     //8.Calculate five test scores and print their average
     let a= prompt("enter first test score")
         b= prompt("enter second test score")
         c= prompt("enter third test score")
         d= prompt("enter fourth score")
         e= prompt("enter fifth test score")
         average=((+a)+(+b) + (+c)+ (+d) + (+e))/5 ;      
         console.log(average)

     //9.Power of any number x ^ y
     let base= prompt("enter base value")  
         exponent=prompt("enter exponent value")   
         power=Math. pow (base, exponent ) 
         console.log(power)


     //10.Calculate Simple Interest
     let principle=prompt("enter principle value")
          rate=prompt("enter rate of intrest")
          time=prompt("enter intrest time period ")
          simpleIntrest=(0.01*principle*time*rate)
          console.log(simpleIntrest)


    //11.Calculate area of an equilateral triangle
     let side=prompt("enter side of a triangle")
     area=0.433*(side*side)
     console.log(area)


     //12.Area Of Isosceles Triangle
     let triangleBase=prompt("enter base of a triangle")
     let triangleHeight=prompt("enter height of a trinagle")
     area=(0.5*triangleBase *triangleHeight)
     console.log(area);


     //13.Volume Of Sphere
     let radius= prompt("enter radius of sphere")
      pi=3.14
     volume =(1.33*pi* Math.pow(radius,3) )
     console.log(volume)

     //14.Volume Of Prism
     let base=prompt("enter base of prism")
      height=prompt("enter height of prism")
      volume= base *height
     console.log(volume)

     //15.Find area of a triangle
     let base=prompt("enter base of triangle")
      height=prompt("enter height of triangle")
      area=0.5*base *height
      console.log(area)

     //16.Give the Actual cost and Sold cost, Calculate Discount Of Product
     let costPrice=prompt("enter cost price")
     sellingPrice=prompt("enter selling price")
     discount=(costPrice-sellingPrice);
     percentageDiscount=((discount/costPrice)*100);
     console.log(discount);
     console.log(percentageDiscount);

     //17.Given their radius of a circle and find its diameter, circumference and area
      let radius = prompt ("enter the raius of circle")
     let pi=3.14
     diameter=(2*radius)
     circumference=(2*pi*radius)
     area= (pi*Math.pow(radius,2))
     console.log(diameter);
     console.log(circumference);
     console.log(area);


     //18.Given two numbers and perform all arithmetic operations.
     let a= prompt("enter value of a")
          b=prompt("enter value of b")
          add=((+a)+(+b)) //Addition
          sub=(a-b) //Subtraction
          multi=(a*b) //Multiplication
          exponen=(a**=b) //Exponentiation
          divi=(a/b)  //Division
          remaindr=(a%b)  //Modulus (Remainder)
         incremt1= ++a	//Increment
         incremt2=b++
         decremt1= --a  //Decrement
         decremt2= b--
         console.log(add)
         console.log(sub)
         console.log(multi)
         console.log(exponen)
         console.log(divi)
         console.log(remaindr)
         console.log(incremt1)
         console.log(incremt2)
         console.log(decremt1)
         console.log(decremt2)


     /*//19.Display the asterisk pattern as shown below(No loop needed):
       *****
        *****
        *****
        *****
        *******/
     var myStr=prompt("enter string")
     console.log(myStr)
     console.log(myStr)
     console.log(myStr)
     console.log(myStr)
     console.log(myStr)
      
    /*20.Calculate electricity bill?
      For example, a consumer consumes 100 watts per hour daily for one month. 
      Calculate the total energy bill of that consumer if per unit rate is 10?*/
    let energyWatts=prompt("enter energy consumed in watts")
    timeHrs=prompt("enter time in hours")
    totalTime=prompt("enter time in days")
    rate=prompt("enter charge per unit")
    consumedEnergy=(energyWatts/1000)*timeHrs
    cost=consumedEnergy*totalTime*rate
    console.log(cost)









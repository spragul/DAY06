//1.a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

class movie {
    constructor(title,studio,rating) {
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    greet = () => {
     return `The title ${this.title}, the studio ${this.studio}, and the rating ${this.rating}`;
    };
  }
  
  var ironman = new movie("Iron man", "Marvel studio","PG-13");
  console.log(ironman.greet());
  //output:
  //The title Iron man, the studio Marvel studio, and the rating PG-13

//------------------------------------------------------------------------------------------------

// //1.b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
// class movie {
//     constructor(title,studio,rating="PG") {
//         this.title=title;
//         this.studio=studio;
//         this.rating=rating;
//     }
//     greet = () => {
//      return `The title ${this.title}, the studio ${this.studio}, and the rating ${this.rating}`;
//     };
//   }
  
//   var ironman = new movie("Iron man", "Marvel studio");
//   console.log(ironman.greet());
// //output:
// //The title Iron man, the studio Marvel studio, and the rating PG

//------------------------------------------------------------------------------------------------

// //1.c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
// let array=[];
// class Human {
//   constructor(name,rating) {
//    this.name=name;
//    this.rating=rating;
//   }
//   get HumanName() {
//     if(this.rating=='PG'){
//         return this.name;
//     }
//   }
//   set HumanName(a) {
//     this.name = a;
//   }
// }
// let human1 = new Human("ironman",'PG');
//  console.log(human1.name)
// //output:
// // ironman

 //------------------------------------------------------------------------------------------------ 

// //1.d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
// class movie {
//     constructor(title,studio,rating="PG") {
//         this.title=title;
//         this.studio=studio;
//         this.rating=rating;
//     }
//     greet = () => {
//       return `The title ${this.title}, the studio ${this.studio}, and the rating ${this.rating}`;
//     };
//   }
//   let antman = new movie("Antman","morvels","PG13");
//   console.log(antman.greet());
//   let Casino  = new movie("Casino Royale","Eon Productions","PG­13");
//   console.log(Casino.greet());
//   //output:
//   //The title Antman, the studio morvels, and the rating PG13
//   //The title Casino Royale, the studio Eon Productions, and the rating PG­13

//------------------------------------------------------------------------------------------------

// //2.circle class
// //convert the UML diagram to Typescript class. use number for double
// /*
//         -------------------------------------
//         |             circle                 |
//         |------------------------------------|
//         |      -radius : double              |
//         |                                    |
//         |    +circle(double)                 |
//         |    +getArea():double               |
//         --------------------------------------

// */
// class circle{
//     constructor(radius){
//         this.radius=radius;
//     }
//     area = () =>{
//         let a=Math.PI*(this.radius**2);
//         let c=2*Math.PI*this.radius;
//         return `Area of Circle is ${a.toFixed(2)}. circumference of circule ${c.toFixed(2)}`
//     };

// }
// let ar=new circle(2);
// console.log(ar.area());
// //output:
// //Area of Circle is 12.57. circumference of circule 12.57

//------------------------------------------------------------------------------------------------
// //3.write a "person" class to hold all details
// class person{
//   constructor(name,std,schoolname,dob,rank) {
//     this.name=name;
//     this.std=std;
//     this.schoolname=schoolname;
//     this.dob=dob;
//     this.rank=rank;
//   }
//   greet = () => {
//     return `Name is ${this.name}, ${this.std}-st std, ${this.schoolname} school, date of birth ${this.dob}, rank ${this.rank}`
//   };
// }
// let ragul=new person("ragul","II","government boys","26-01-2015",'1');
// console.log(ragul.greet());
// //output:
// //Name is ragul, II-st std, government boys school, date of birth 26-01-2015, rank 1

//------------------------------------------------------------------------------------------------

// //4. write a class to calculate the uber price
// let sum=0;
// let string='';
// class uber{
//   constructor(locationname,price){
//     this.locationname=locationname;
//     this.price=price;
    
//   }
  
//   uberprice=()=>{
//     string =string+' '+this.locationname+",";
//     sum=sum+parseInt(this.price);
//     return `location is ${string} total price is = ${sum}`
    
//   }
// }
// let firstlocation=new uber("salem",20);
// let secondlocation=new uber("omalur",40);
// firstlocation.uberprice();
// console.log(secondlocation.uberprice());
// //output:
// //location is  salem, omalur, total price is = 60
//------------------------------------------------------------------------------------------------
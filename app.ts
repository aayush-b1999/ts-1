//Basic Types
// number
function add(a:number, b:number){
    return a+b;
}
const addition: number=add(1,2);
console.log(addition);

// string

function concat(a:string, b: string){
    return a+b;
}
const concatination: string=concat("Aayush ","Bhatnagar")
console.log(concatination);

// boolean

const boo: boolean=true;
console.log(boo);

// object

const my: {
    name:string;
    age: number;
    pos: [number,string]
}={
    name: "Aayush Bhatnagar",
    age: 22,
    pos: [1,"Associate Devloper"]
}

// array
let activities: string[]=["playing video games","watching anime","badminton"]
for(let activity of activities){
    console.log(activity);
}

// tuple
const video:{
    name:[string,number];   // this is tuple
    brand:string;
}={
    name:["Playstation",5],
    brand: "Sony"
}
// video.name[0]=123123;
video.name.push("\nXbox Series X");

// enum -- where we give value to these names, default way is first value points to 0 and then 1,2,3,4 , we can change value anywhere and then the next will be incremented from there
enum Role {ADMIN,SYSADMIN,DEVELOPER=10000,TESTER,LEAD};
console.log(Role);

// union types
function combine(a:number|string,b:number|string) {
    if(typeof a==="number" && typeof b==="number"){
        return a+b;
    }
    else{
        return a.toString()+b.toString();   
    }
}

console.log(combine(10,20));
console.log(combine("Yo ","Hi"));

// literal types
function addFormat(a:number,b:number,c:"as-text"|"as-number") {
    if(c==="as-text"){
        return (a+b).toString();
    }
    return a+b;
}
console.log(addFormat(10,20,"as-number"));
console.log(addFormat(10,20,"as-text"));


// type aliases
type alphanum=number|string;
let game:alphanum="God of War";
console.log(game);
game=123;
console.log(game);

// function return type
// making function which must return string
function subtract(a:number,b:number):string {
    return (a-b).toString();
}
console.log(subtract(100,10));

// function type
function multiply(a:number,b:number) {
    return a*b;
}

// let into;
// into=multiply;
// into=10
let into: (a:number,b:number)=> number;
into=multiply;
console.log(into(10,20));

// function types and callbacks
function addHandler(a:number,b:number,c:(a: number)=> void) {
    let result=a+b;
    let x=c(result);
    return x;
}
console.log(addHandler(10,20,(result)=>{
    console.log(result);
    return result*10;
}));
// unknown and never type



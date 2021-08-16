type pair=(number|string);
function add(a: number,b: number){
    return a+b;
}

const c=10;
const d=11;

console.log(add(c,d))

const person: {
    name: string;
    age: number;
    obj: {
        brand: string;
        console: string;
    }
    pos: [number,string];
}={
    name: 'aayush',
    age: 22,
    obj:{
        brand: 'sony',
        console: 'ps5'
    },
    pos:[1,"Associate Developer"]
}
person.pos.push("Wow")

const hobbies=['playing video games','watching anime'];
hobbies[2]='dsa';
hobbies[3]='codeforces';
for(let hobby of hobbies){
    console.log(hobby);
}
const tel: string='asdas';
const val: pair[]=['11',11,1223,'asdad',tel];
for(let v of val){
    console.log(v);
}
function clicker(message :string) {
    console.log("Clicked " + message);
}
const button=document.querySelector('button')!;
button?.addEventListener('click',clicker.bind(null,"That's right"));
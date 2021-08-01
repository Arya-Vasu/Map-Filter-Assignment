const students = [
    {name: "Loki", gender: "male"}, 
    {name: "Lucifer", gender: "male"}, 
    {name: "Samantha" , gender: "female"}, 
    {name: "Veronica", gender: "female"}
];

const gender = students.filter((value) => value.gender == "female");
console.log(gender.map((value) => value.name));

const startsA = students.filter((value) => value.name[0] == 'L');
console.log(startsA.map((value) => value.name));

const count = students.filter((value) => value.gender == 'male');
console.log(count.length);
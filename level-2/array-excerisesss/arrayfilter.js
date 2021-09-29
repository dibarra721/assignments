function fiveAndGreaterOnly(arr) {
    return arr.filter((larger) => larger > 5)

}
// test
console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]


function evensOnly(arr) {
    return arr.filter((even) => even % 2 === 0)
}
// test
console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]


function fiveCharactersOrFewerOnly(arr) {
    return arr.filter((fiveCharcters) => fiveCharcters.length <= 5);
}
// test
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]


function peopleWhoBelongToTheIlluminati(arr) {
    return arr.filter((belong) => belong.member === true)

}
// test
console.log(peopleWhoBelongToTheIlluminati([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]));
// =>
//[ { name: 'Angelina Jolie', member: true },
//  { name: 'Paris Hilton', member: true },
//  { name: 'Bob Ziroll', member: true } ]

function ofAge(arr) {
    return arr.filter((name) => name.age > 18);

}
// test
console.log(ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]));
// =>
//[ { name: 'Angelina Jolie', age: 80 },
//  { name: 'Bob Ziroll', age: 100 } ]
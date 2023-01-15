//Object literal
const book={
    name:"Namaste JS",
    author:"Akshay Saini",
    genre:"tech"
}
book.page=130
// console.log(book)

//2. constructor function

function Book(name,author){
  this.name=name,
  this.author=author
}

let book2= new Book("Namaste JS","Akshay Saini")
// console.log(book2)

//3. Object.create

const book3={
    name:"Namaste JS",
    author:"Akshay Saini",
    genre:"tech"
}
let Book3= Object.create(book3)

console.log(Book3.name)
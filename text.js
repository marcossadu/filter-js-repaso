let text = "How are you doing today?";
const myArray = text.split(" ");
const filterWords = myArray.filter((word) => word.length >= 4)

console.log(filterWords)
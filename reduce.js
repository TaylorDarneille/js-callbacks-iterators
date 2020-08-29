var numbers = [1, 56, 2, 4, 1, 99, 3, 5]

const reducer = (acc, curr) => {
    return acc * curr
}
let product = numbers.reduce(reducer)
console.log(product)



const querify = require('./querify');

const input = {
    name: "sambath",
    sort: {
        createdAt: -1
    }
}

const output = querify(input)

console.log(output)

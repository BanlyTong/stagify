const stagify = require('./stagify');

const input = {
    name: "sambath",
    sort: {
        createdAt: -1
    }
}

const output = stagify(input)

console.log(output)

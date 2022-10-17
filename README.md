# stagify

Hey, there! Here is an open-source library for converting endpoint query string to MongoDB query working together with `mongoose` and `express.js`.

## stagify
```js
// input
{
    name: "sambath",
    sort: {
        createdAt: -1
    }
}
// output
[ 
    { 
        '$match': { name: 'sambath' } 
    },
    { 
        '$sort': { createdAt: -1 } 
    } 
]
```

## querify
```js
// input
{
    name: "sambath",
    sort: {
        createdAt: -1
    }
}
// output
{
    filters: { name: 'sambath' },
    select: {},
    options: { 
        skip: 0, 
        limit: 25, 
        sort: { createdAt: -1 } 
    }
}
```

// load express
const express = require('express');

//  Create our express app
const app = express();

const PORT = 8082;

// Load our data from models folder
const fruits = require('./models/fruits');
const meats = require('./models/meats');
const vegetables = require('./models/vegetables');
const food = {
  fruits: [...fruits],
  meats: [...meats],
  veggie: [...vegetables],
};

// const allFood = [...fruits, ...vegetables, ...meats];

console.log(food);

// Setup an 'index' route
app.get('/fruits', (req, res) => {
  res.send(fruits);
});

// Setup an 'show' route for MEATS
app.get('/fruits/:index', (req, res) => {
  res.send(fruits[req.params.index]);
});

// Setup an 'index' route

app.get('/meats', (req, res) => {
  res.send(meats);
});

// Setup an 'show' route
app.get('/meats/:index', (req, res) => {
  res.send(meats[req.params.index]);
});

// Setup an 'index' route for VEGETABLES

app.get('/vegetables', (req, res) => {
  res.send(vegetables);
});

// Setup an 'show' route
app.get('/vegetables/:index', (req, res) => {
  res.send(vegetables[req.params.index]);
});
allFood = [...fruits, ...meats, ...vegetables];
// Setup an 'index' route for FOODS
app.get('/foods', (req, res) => {
  type = req.query.type;
  item = req.query.item;
  color = req.query.color;
  if (type) {
    res.send(food[type]);
  } else if (item) {
    console.log(allFood);
    res.send(allFood.filter((x) => x.name.includes(item)));
//   } else if(color){
//     res.send(allFood.filter((x) => x.color.includes(color)));
  } else {
    res.send(food);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

// MORE DATA!!

/*
const vegetables = [
    {
        name:'cucumber',
        color: 'green',
        readyToEat: true
    },
    {
        name:'tomato',
        color: 'red',
        readyToEat: false
    },
    {
        name:'eggplant',
        color: 'purple',
        readyToEat: false
    }
];
const meats = [
    {
        name:'chicken',
        state: 'raw',
        readyToEat: false
    },
    {
        name:'beef',
        state: 'well done',
        readyToEat: true
    },
    {
        name:'pork',
        state: 'rare',
        readyToEat: true
    }
];
*/

/*
TASK 
    PART 1
        - Create models for vegetables and meats
        - Create an index and show route for each
        - Create a route for "food" that returns all food groups
    PART 2 
        - Add some logic for filtering the data based on the Query Params passed from the client
        - HINTS (you might need the "filter" method, maybe "includes", and definitely your homie "req")
*/

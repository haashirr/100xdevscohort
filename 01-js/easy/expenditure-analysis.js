/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/
/*
const transactions = [
  { 
    itemName: 'Tomatoes', 
    category: 'Vegetables', 
    price: 20,
    timestamp: '2020-01-01T00:00:00.000Z'
  },
  { 
    itemName: 'Potatoes', 
    category: 'Vegetables', 
    price: 10,
    timestamp: '2020-09-01T00:00:00.000Z'
  },
  {
    itemName: 'Rice',
    category: 'Grains',
    price: 10,
    timestamp: '2020-01-02T00:00:00.000Z'
  } 
];

*/
function calculateTotalSpentByCategory(transactions) {
  const arr = {};
  for(var i=0;i<transactions.length;i++) {
    if(!arr[transactions[i].category]) {
      arr[transactions[i].category] = 0;
    }
    arr[transactions[i].category] += transactions[i].price;
  }
  return Object.keys(arr).map(category => {
    return {
      category: category,
      totalSpent: arr[category]
    };
  });

}
//console.log(calculateTotalSpentByCategory(transactions));
module.exports = calculateTotalSpentByCategory;
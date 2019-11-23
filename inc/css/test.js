const items = ['item1', 'item2', 'item3'];
const copy = [];

// before
for (let i=0; i<items.length; i++) {
  copy.push(items[i]);
  console.log(copy)
}

// after
items.forEach(function(boo){
  copy.push(boo);
});


const listWithClass = document.querySelectorAll('.item');
console.log(`Nambers of category ${listWithClass.length}`);

const categories = document.querySelectorAll('#categories .item');

categories.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const itemsCount = category.querySelectorAll('ul li').length;
  
  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemsCount}`);
});

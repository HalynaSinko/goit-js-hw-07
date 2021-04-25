const listItemsOfCategoriesEl = document.querySelectorAll('.item');
console.log(`В списке ${listItemsOfCategoriesEl.length} категории.`);

[...listItemsOfCategoriesEl].forEach(item =>
    console.log(`- Категория:${item.querySelector('h2').textContent} 
- Количество элементов: ${item.querySelectorAll('li').length}`),
);









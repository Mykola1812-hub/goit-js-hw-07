const item = document.querySelectorAll(".item");
console.log(`Number of categories: ${item.length}`);


item.forEach(item => {
    const title = item.querySelector('h2');
    const elements = item.querySelectorAll('li')
    console.log(`Category: ${title.textContent}`)
    console.log(`Elements: ${elements.length}`);
})
const liRef = document.querySelectorAll('.item');
console.log('Number of categories:' + liRef.length);

liRef.forEach(el => {
    const titleRef = el.querySelector('h2');
    console.log('Category: ' + titleRef.textContent);

    const liImesRef = el.querySelectorAll('li');
    console.log('Elements: ' + liImesRef.length);
})




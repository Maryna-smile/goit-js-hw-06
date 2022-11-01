// task-1 search
// * Отримати посилання на кожен елемент р з div.wrapper по черзі, використовуючи різні селектори.
// const wrapper = document.querySelector('.wrapper');
// console.log(wrapper);
// const p1 = wrapper.querySelector('p');
// console.log(p1);
// const p2 = wrapper.querySelector('#elem');
// console.log(p2);
// const p3 = wrapper.querySelector('.js-first-elem');
// console.log(p3);
// const p4 = wrapper.querySelector('[title="HELLO!"]');
// console.log(p4);


// * Отримати посилання на всі елементи 'р' за селектором тега.
// Перебрати їх та вивести в консоль.
// const arrayP = wrapper.querySelectorAll('p');
// // console.log(arrayP);
// arrayP.forEach(el => console.log(el));
// // * Отримати посилання елемент c id "elem".
// const pId = document.getElementById("elem");
// console.log(pId); 

// task-2 classList
// Даний елемент # elem.
// Отримати посилання на нього.
// Додайте йому класи 'blue' та 'bg-red'.
// Видаліть у нього клас bg-red
// Проверьте наличие у него класса 'blue' и 'bg-red'.

// const elRef = document.querySelector('.wrapper #elem');
// elRef.classList.add('blue', 'bg-red');
// elRef.classList.remove('bg-red');
// console.log(elRef.classList.contains('blue'));
// console.log(elRef.classList.contains('bg-red'));
// elRef.classList.replace('blue', 'yellow');
// elRef.classList.toggle('blue');

// task-3 style
// Даний елемент # elem.
// Задайте йому колір tomato
// Додайте йому чорну межу шириною 5рх

// const El = document.querySelector('#elem');
// El.style.color = 'tomato';
// El.style.backgroundColor = 'blue';
// El.style.border = '5px solid black';
// El.style.cssText = 'color: tomato; background-color: blue;'

// task-4 textContent/tagName
// Дано елементи з класом text.
// Отримайте посилання на всі ці елементи.
// Додайте кожному елементу на кінець назву його тега в нижньому регістрі.
// const textElemsRef = document.querySelectorAll('.text');
// console.log(textElemsRef);
// textElemsRef.forEach(elem => {
//     elem.textContent += ' ' + elem.tagName.toLowerCase();
//     // elem.textContent = elem.textContent + elem.tagName;
// })


// task-5 navigation
// 5.1 **нащадки**
// Даний елемент - список ul #elem.
// Знайдіть першого нащадка цього елемента і зробіть його текст червоного кольору.
// Знайдіть останнього нащадка цього елемента та зробіть його текст синього кольору.
// Знайдіть всіх нащадків цього елемента та додайте їм у кінець текст '!'
const listRef = document.querySelector('ul');
// // listRef.firstChild;
// // console.log(listRef.firstChild);
// const firstElRef = listRef.firstElementChild;
// firstElRef.style.color = 'red';
// console.log(listRef.firstElementChild);

// const lastElRef = listRef.lastElementChild;
// lastElRef.style.color = 'blue';
// console.log(listRef.lastElementChild);

// const listChildren = listRef.children;
// console.log(listChildren);
// // listChildren.forEach(el => console.log(el)); перевірити форич https://developer.mozilla.org/en-US/docs/Web/API/Element/children
// for (const el of listChildren) { 
//     el.textContent += "!";
// }



// 5.2 **сусіди**
// Даний елемент li #middle.
// Знайдіть його сусіда зверху і додайте йому до кінця текст '!!!'
// Знайдіть його сусіда знизу і додайте йому до кінця текст '?'.
// Знайдіть його сусіда знизу його сусіда знизу (наступний елемент за сусіднім) і додайте йому до кінця текст '#'.

// const middleRef = document.querySelector("#middle");
// const prevRef = middleRef.previousElementSibling;
// prevRef.textContent += '!!!';
// const nextRef = middleRef.nextElementSibling;
// nextRef.textContent += '?';
// const nextRefNext = nextRef.nextElementSibling;
// nextRefNext.textContent += '#';



// 5.3 **батьки**
// Даний елемент #middle.
// Знайти його батька і пофарбувати його тло в колір tomato.
// Знайти батька його батька і пофарбувати його фон в синій колір.
// Знайдіть найближчий до нього елемент з тегом ul за допомогою методу closest і пофарбувати його фон в зедений колір

// const middleRef = document.querySelector("#middle");
// // const parentRef = middleRef.parentNode;
// const parentRef = middleRef.parentElement;
// console.log(parentRef);
// parentRef.style.backgroundColor = 'tomato';
// parentRef.parentElement.parentElement.style.backgroundColor = 'blue';

// const parent = middleRef.closest('ul');
// parent.style.backgroundColor = 'green';

// task-6 attributes
// Отримати посилання на всі кнопки.
// Для кожної кнопки перевірити:
// * Якщо вона відключена - увімкнути
// * Якщо є дата-атрибут value – записати його значення в текст кнопки
// * Якщо є дата-атрибут size – застосувати його значення до ширини кнопки

// task-7 append, prepend, before и after
// Даний ol. Вставте в кінець списку нову li з текстом 'Soft Skills'.
// Вставте перед списком заголовок із текстом 'Plan:'.
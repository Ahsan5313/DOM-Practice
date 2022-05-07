// // Day one DOM practice
// function text(){

//  const p = document.getElementById('demo');
//   p.innerHTML = 'Text 0';
   
// }

// // Day two DOM 
// // If i catch with tag names it will return HTML collection array like object;
// // Let's see;
// // If i catch with class name it will also return HTML collection
// const p = document.getElementById('demo1');
// const allP = document.getElementsByTagName('p');
// const para = document.getElementsByClassName('para')
// console.log(allP);
// console.log(para)

// // Day three of DOM

// // We can select css name like;
// // When we make style in this case we may design in style file;
// // by catching css selector;
// // In javascript we can also select to css selector 
// // We can select css selector by js with help of querySelector
// // It returns nodeList array like object like one kind of html collection

// const myQuery = document.querySelectorAll('.anchor');
// console.log(myQuery)


// const from = document.querySelectorAll('.from');
// const demo2 = document.querySelector('#demo2')

// var text = "";

// for(var i = 0; i < from.length; i++){

//    text += from.elements[i].value + "<br>"
// }

// demo2.innerHTML = text;
// console.log(text)

// const img = document.getElementById('img');
// console.dir(img)

// const a = 20 + 20
// const demo4 = document.getElementById('demo4');
// demo4.innerHTML = Date() + " " + a

// const heading = document.querySelector('#heading');
//   heading.style.color = 'red';

// function myMove(){

//   const animate = document.getElementById('animate');
  
//   let pos = 0;

//    const myTime = setInterval(frame, 5)

//   function frame(){

//       if(pos < 350){

//         pos++
//         animate.style.top = pos + 'px';
//         animate.style.left = pos + 'px';
   
//       }else{

//         clearInterval(myTime)
//       }
//   }



// }

// const btn = document.querySelector("#btn");
// btn.onclick = myMoved;

// function myMoved(){

//   console.log('Hello, World!')
// }

// function myChange(){

//     const head = document.querySelector("#head");
//     head.innerHTML = 'Hello, World!'
// }

// const click = document.getElementById('click');

// click.addEventListener('click', function(){

//   console.log('Hello world')
// })

// click.addEventListener('mouseover', function(){

//   console.log('User mouse over here')
// })

// const clicked = document.getElementById('clicked');

// clicked.addEventListener('click', function(){

//     myFun('Hello World')
// });

// function myFun(text){

//   console.log(text)
// }

// const body = document.querySelector('body');
// console.log(body.children);

// const h1 = document.getElementById('h1');
// console.log(h1.firstChild.nodeValue)

// const h11 = document.getElementById('h11');
// const para = document.getElementById('para');

// para. innerHTML = h11.innerHTML;
// console.log(h11.innerHTML)
// console.log(h11.firstChild.nodeValue);
// console.log(para.childNodes[0].nodeValue)

// const ul = document.querySelector('ul');
// console.log(ul.childNodes[0].nextSibling.innerHTML);
// console.log(ul.childNodes[1].nextSibling.innerHTML);
// console.log(ul.childNodes[2].nextSibling.innerHTML);
// console.log(ul.childNodes[3].nextSibling.innerHTML);
// console.log(ul.childNodes[4].nextSibling.innerHTML);

// const div = document.getElementById('div');
// const p1 = document.getElementById('p1');

// const newElement = document.createElement('p');
// const newElementText = document.createTextNode('Hello world');
// newElement.appendChild(newElementText);

// div.insertBefore(newElement, p1)

// const newDiv = document.createElement('div');
// const newP1 = document.createElement('p');
// const newP2 = document.createElement('p');
// const textP1 = document.createTextNode('This is para one')
// const textP12 = document.createTextNode('This is para two')
// newP1.appendChild(textP1);
// newP2.appendChild(textP12);
// newDiv.appendChild(newP2);
// newDiv.appendChild(newP1);
// console.log(newDiv);

// const div = document.getElementById('div');

// const p1 = document.getElementById('p1');
// const p2 = document.getElementById("p2")

// div.removeChild(p1)
// div.replaceChild(newP1, p2)


// console.dir( document)

// const myObj = {

//   name : 'Ahsan',
//   age : 21,
//   job : 'student'
// }
// console.log(myObj)
// console.log(document.body);
// console.log(document.head);
// document.title = 'Play With Dom'
// console.log(document.title);
// const h1 = document.getElementById('h1')
// const newElement = document.createElement('h2');
// const newText = document.createTextNode('Hello world one');
// newElement.appendChild(newText);
// const body = document.getElementById('body');
// body.insertBefore(newElement, h1)
// console.dir(document.all)

// console.dir(document)

// const item = document.querySelectorAll('.item');

// for(let i = 0; i < item.length; i++){

//     item[i].style.color = 'red';
// }

// const item = document.querySelectorAll('.item')
// console.log(item)

// const parent = document.querySelector('.amiMeansParent');
// const child = parent.children

// for(let i = 0; i < child.length; i++){

//     child[i].innerHTML = 'Hello world';
//     console.log(child[i].innerHTML)
// }

// const grandParent = document.querySelector('.dada');
// const children = grandParent.children;
// const items = grandParent.querySelectorAll('.item');
// console.log(items)

// function test(a,b,c ){

//     console.log( arguments)
// }
// test(1, 2, 3)

// const item = document.querySelector('.item');
// const parent = item.parentElement;
// console.log(parent)
// const item = document.querySelector('.item');
// const itemTwo = item.nextElementSibling;
// itemTwo.style.color = 'red';
// const item = document.querySelector('.item:nth-child(3)');
// item.style.color = 'red';
// const itemOther = item.previousElementSibling;
// itemOther.style.color = 'green';

// const newElement = document.createElement('li');
// newElement.className = 'items';
// newElement.setAttribute('id', 'items');
// const newText = document.createTextNode('Item 0');
// newElement.appendChild(newText);
// const amiMeansParent = document.querySelector('.amiMeansParent');
// const newParent = amiMeansParent.querySelector('.item');
// amiMeansParent.insertBefore(newElement, newParent);
// console.dir(document)
// console.log(newElement)

// const input = document.getElementById('input')

// const creatElement = function(task){

//   const creatLi = document.createElement('li');
//   const check = document.createElement('input');
//   check.type = 'checkbox';
//   const label = document.createElement('label');
//   label.innerHTML = task;
//   creatLi.appendChild(check);
//   creatLi.appendChild(label)
  
//   return creatLi;
// }


// let addTask = function(event){

//    event.preventDefault()
// }

// function test(n){

//   function a(){

//     return n % 3 == 0
//   }
//   function b(){

//     return n % 5 == 0
//   }
//   function c(){

//     return n % 2 == 0
//   }

//   if(a() && b()){

//     console.log(n + ' Is divisible by 3 and 5 ')
//   }else if(a() || b() || c()){

//       console.log(n + ' solved')
//   }else{

//     console.log('Not valid')
//   }
// }
// test(65);



function simple(a , b, cb){

    var c = a + b;
    var d = a - b;

    var result = cb(c, d)
    return result;
}


function sum(a, b){

    return a + b
}
var result = simple(8, 5, function(a, b){

    return a + b
});
var result1 = simple(8, 5, function(a, b){
    
    return a - b
});
var result2 = simple(8, 5, function(a, b){

    return a * b
});
var result3 = simple(8, 5, function(a, b){

    return a / b
})
console.log(result);
console.log(result1);
console.log(result2);
console.log(result3)



// Day one DOM practice
function text(){

 const p = document.getElementById('demo');
  p.innerHTML = 'Text 0';
   
}

// Day two DOM 
// If i catch with tag names it will return HTML collection array like object;
// Let's see;
// If i catch with class name it will also return HTML collection
const p = document.getElementById('demo1');
const allP = document.getElementsByTagName('p');
const para = document.getElementsByClassName('para')
console.log(allP);
console.log(para)

// Day three of DOM

// We can select css name like;
// When we make style in this case we may design in style file;
// by catching css selector;
// In javascript we can also select to css selector 
// We can select css selector by js with help of querySelector
// It returns nodeList array like object like one kind of html collection

const myQuery = document.querySelectorAll('.anchor');
console.log(myQuery)


const from = document.querySelectorAll('.from');
const demo2 = document.querySelector('#demo2')

var text = "";

for(var i = 0; i < from.length; i++){

   text += from.elements[i].value + "<br>"
}

demo2.innerHTML = text;
console.log(text)

const img = document.getElementById('img');
console.dir(img)

const a = 20 + 20
const demo4 = document.getElementById('demo4');
demo4.innerHTML = Date() + " " + a

const heading = document.querySelector('#heading');
  heading.style.color = 'red';

function myMove(){

  const animate = document.getElementById('animate');
  
  let pos = 0;

   const myTime = setInterval(frame, 5)

  function frame(){

      if(pos < 350){

        pos++
        animate.style.top = pos + 'px';
        animate.style.left = pos + 'px';
   
      }else{

        clearInterval(myTime)
      }
  }



}

const btn = document.querySelector("#btn");
btn.onclick = myMoved;

function myMoved(){

  console.log('Hello, World!')
}

function myChange(){

    const head = document.querySelector("#head");
    head.innerHTML = 'Hello, World!'
}

const click = document.getElementById('click');

click.addEventListener('click', function(){

  console.log('Hello world')
})

click.addEventListener('mouseover', function(){

  console.log('User mouse over here')
})

const clicked = document.getElementById('clicked');

clicked.addEventListener('click', function(){

    myFun('Hello World')
});

function myFun(text){

  console.log(text)
}

const body = document.querySelector('body');
console.log(body.children);

const h1 = document.getElementById('h1');
console.log(h1.firstChild.nodeValue)

const h11 = document.getElementById('h11');
const para = document.getElementById('para');

para. innerHTML = h11.innerHTML;
console.log(h11.innerHTML)
console.log(h11.firstChild.nodeValue);
console.log(para.childNodes[0].nodeValue)

const ul = document.querySelector('ul');
console.log(ul.childNodes[0].nextSibling.innerHTML);
console.log(ul.childNodes[1].nextSibling.innerHTML);
console.log(ul.childNodes[2].nextSibling.innerHTML);
console.log(ul.childNodes[3].nextSibling.innerHTML);
console.log(ul.childNodes[4].nextSibling.innerHTML);

const div = document.getElementById('div');
const p1 = document.getElementById('p1');

const newElement = document.createElement('p');
const newElementText = document.createTextNode('Hello world');
newElement.appendChild(newElementText);

div.insertBefore(newElement, p1)

const newDiv = document.createElement('div');
const newP1 = document.createElement('p');
const newP2 = document.createElement('p');
const textP1 = document.createTextNode('This is para one')
const textP12 = document.createTextNode('This is para two')
newP1.appendChild(textP1);
newP2.appendChild(textP12);
newDiv.appendChild(newP2);
newDiv.appendChild(newP1);
console.log(newDiv);

const div = document.getElementById('div');

const p1 = document.getElementById('p1');
const p2 = document.getElementById("p2")

div.removeChild(p1)
div.replaceChild(newP1, p2)

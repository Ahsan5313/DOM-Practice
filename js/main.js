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
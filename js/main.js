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

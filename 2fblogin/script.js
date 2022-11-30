const inputs=document.querySelectorAll('input')


for(let item of inputs) {
  item.addEventListener('focus',function(){
   document.querySelector('.hero').style.display='none';
   document.querySelector('.links').style.display='none';
   document.querySelector('.logo').style.display='block';
   document.querySelector('.logo').transition = "all 2s";
   
  })
  item.addEventListener('focusout', function() {
       document.querySelector('.hero').style.display='block';
       document.querySelector('.links').style.display='block';
       document.querySelector('.logo').style.display='none';
       


  })
}

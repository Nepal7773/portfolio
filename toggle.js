const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', ()=>{
  document.body.classList.toggle('light');
  document.getElementById('blur1').classList.toggle('blur-3');
  document.getElementById('blur1').classList.toggle('blur');
  document.getElementById('blur2').classList.toggle('blur-3');
  document.getElementById('blur2').classList.toggle('blur-2');

})
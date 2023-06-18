let textarea = document.getElementById('editor');

textarea.addEventListener('change', (e) => {  
  localStorage.setItem('editor', e.currentTarget.value);
})

textarea.textContent = localStorage.getItem('editor');

const button = document.querySelector('button');

button.addEventListener('click', e => {
  localStorage.removeItem('editor');
  textarea.value = '';
})
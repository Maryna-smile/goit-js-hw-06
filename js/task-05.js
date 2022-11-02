const textInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

textInputRef.addEventListener('input', () => {
   if(!textInputRef.value){
    return nameOutputRef.textContent =  "Anonymous"
   }
    nameOutputRef.textContent = textInputRef.value;
   });


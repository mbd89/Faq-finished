const showQuestion = document.querySelectorAll('#plus-icon')
const hideQuestion = document.querySelectorAll('#minus-icon')
const answers = document.querySelectorAll('.accordion-answer')

for (let i = 0; i<showQuestion.length; i++){
   showQuestion[i].addEventListener('click', ()=>{
      answers[i].classList.remove('hidden')
      hideQuestion[i].classList.remove('hidden')
      showQuestion[i].classList.add('hidden')
   })
}


for (let i = 0; i<hideQuestion.length; i++){
    hideQuestion[i].addEventListener('click', ()=>{
       answers[i].classList.add('hidden')
       hideQuestion[i].classList.add('hidden')
       showQuestion[i].classList.remove('hidden')
    })
 }
 
// keyboard navigation

for (let i = 0; i<showQuestion.length; i++){
showQuestion[i].addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        answers[i].classList.remove('hidden')
        hideQuestion[i].classList.remove('hidden')
        showQuestion[i].classList.add('hidden')
    }
});

}

for (let i = 0; i<hideQuestion.length; i++){
    hideQuestion[i].addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            answers[i].classList.add('hidden')
            hideQuestion[i].classList.add('hidden')
            showQuestion[i].classList.remove('hidden')
        }
    });
    
    }



# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). 


### The challenge

Users are able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page



### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript


### What I learned

Keyboard navigation is what I learned here a bit I know now to make the element focusable you have to add tabindex=0, to make it operable add keydown event., 

 see below:

```
```
```js
for (let i = 0; i<showQuestion.length; i++){
showQuestion[i].addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      
        answers[i].classList.remove('hidden') // will make the question appear 
        hideQuestion[i].classList.remove('hidden')
        showQuestion[i].classList.add('hidden')
    }
});

}
```





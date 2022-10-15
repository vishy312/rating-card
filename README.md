# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![solution1](https://user-images.githubusercontent.com/86962975/194293158-5eef7b87-37e5-497b-8f0b-3e9b0ed54247.PNG)

![solution2](https://user-images.githubusercontent.com/86962975/194293362-0bc15aec-f13d-4cc5-880c-e56db58b8be8.PNG)

![solution3](https://user-images.githubusercontent.com/86962975/194293474-5eb481ed-71f0-4052-8002-3140b04f2e70.PNG)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Angular](https://angular.io/) - Angular framework

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

I learned the basics of Angular Data Display and Data Binding. Also, I get some more practice on CSS.

To see how you can add code snippets, see below:

```html
<div class="ratings">
      <div (click)="ratingButton.selectRating(1, $event)" class="rating">1</div>
      <div (click)="ratingButton.selectRating(2, $event)" class="rating">2</div>
      <div (click)="ratingButton.selectRating(3, $event)" class="rating">3</div>
      <div (click)="ratingButton.selectRating(4, $event)" class="rating">4</div>
      <div (click)="ratingButton.selectRating(5, $event)" class="rating">5</div>
 </div>
```

```typescript
export class RatingButton{
    result = 0;

    selectRating(value: number, event: any){
        this.result = value;
        event.target.style.backgroundColor = "hsl(217, 12%, 63%)";
        event.target.style.color = "black";
    }

    submitButton(event: any){
        event.target.parentElement.style.zIndex = -1;
    }
}
```

### Continued development

* Added a child component for the result card and sent data to and from the child component.
* Added routing for both of the cards

## Author

- Blog - [Visha Pal](https://vishalpal.hashnode.dev/)
- Frontend Mentor - [@vishy312](https://www.frontendmentor.io/profile/vishy312)
- Twitter - [@VishalPal45](https://twitter.com/VishalPal45)

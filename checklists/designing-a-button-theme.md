---
title: Designing a Button Theme
category: "Design"
date: "2020-03-22"
tags: ['buttons', 'states', 'style-guide', 'accessibility']
description: Adding a button to a project is tricky, this checklist covers essential states of any button should have.
---

- [ ] Set the padding rules  
We mostly define our buttons' height based on the items within. These items can be text and icons. The button's total height and width will be defined by adding all the values together. This rule has an exception: If the height values(text's line-height + icon's height) doesn't meet the minimum standards for accessibility then the buttons height should be set manually. (e.g. min-height)

- [ ] Set the idle state  
Also known as default state.

- [ ] Set the hover state  
Every button needs to have a hover state to indicate the user's cursor is on the button and it's interactable.

- [ ] Set the is-active or is-pressed states  
Or set them both if needed.

- [ ] Set the focus state  
Focus states are crucial for more accessible web you should definitely care for focus states both on designing and developing stages.

- [ ] Set the disabled state  
If a button is interactable it should also have it's disabled state ready.

- [ ] Define other states  
Not every button but some buttons also need to have; loading, success, warning and info states. Be sure to cover those states if needed. 

- [ ] Be sure that every state is accessible  
You can use online tools like [WebAIM's Contrast Checker](https://webaim.org/resources/contrastchecker/), [Color.Review](https://color.review/) or plugins e.g. [Color Contrast Analyser](https://github.com/getflourish/Sketch-Color-Contrast-Analyser) for Sketch and [A11y](https://www.figma.com/community/plugin/733159460536249875/A11y---Color-Contrast-Checker) for Figma.

- [ ] Name the buttons and every states properly  
We are a huge fan of labelling things properly, here is a common naming convention we follow for our projects: Buttons / Ghost / Success

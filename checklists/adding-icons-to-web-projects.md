---
title: Adding Vector Icons to Web Projects
category: Front-End
date: '2020-03-14'
tags: ['front-end', 'web', 'svg', 'icon', 'icoMoon']
description: These are the steps of how to add vector icons correctly to a web project assumed that the project is utilizing SVG sprite.
---

- [ ] Get vector icons from the designer

- [ ] Minify SVG code  
You can use [SVGO](https://jakearchibald.github.io/svgomg/) SVG optimizer.

- [ ] Import the vector icon(s) to IcoMoon  
If there is icomoon project, you should create new project on [IcoMoon](https://icomoon.io/app/#/projects) or just simply import icon to the existing project.

- [ ] Place the icon correctly on the provided grid by the designer on IcoMoon  
Vector icons should be within the correct grid. Otherwise, ask the designer to place the icons correctly in a grid.

- [ ] Select all icons and press the "Generate SVG & More" button on IcoMoon

- [ ] Press the download button to get the SVG icons  
If the icoMoon project settings are not defined, press the settings icon on the right of the download button to configure the project settings.

- [ ] Copy SVG icons to icons folder in your project

- [ ] Download the IcoMoon project settings file and copy it to the folder of Icon component

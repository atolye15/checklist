---
title: Adding Fonts to the WSK
category: Front-End
date: "2020-03-20"
tags: ['font', 'scss', 'wsk']
description: Here is the checklist that we follow to import fonts to our projects.
---

- [ ] Get the fonts  
If the project's font is free licence you can either download it from internet or have the designer to provide it for you.

- [ ] Convert your fonts  
We use fonts as 'woff', 'woff2' and 'ttf' formats in our projects so you need to convert your fonts into those. You can use 'fontplop' desktop app for it.

- [ ] Create font folder  
Create a folder that has the name of the font you want to import in the `src/fonts` directory. Add your fonts into that folder.

- [ ] Include fonts to the project  
Use the `font-face` mixin to include your fonts in the `_fonts.scss`.

---
title: Setting Up a New WSK Project 
category: Front-End
date: "2020-03-20"
tags: ['scss', 'html']
description: Steps we follow to make WSK's initial setup ready when we start a new project. This checklist also covers how to import and start to use scss-starter with WSK.
---

- [ ] Clone the repository to your machine  
Simply clone [git repository](https://github.com/atolye15/web-starter-kit) to get started.

- [ ] Set up git  
Remove existing .git folder, initialize a new one and create your first commit.

- [ ] Clone scss-starter repository  
Create styles folder in `src` directory and clone [scss-starter](https://github.com/atolye15/scss-starter/) into it.

- [ ] Clean up styles folder  
Remove all files except `scss` folder. Make sure you also removed the .git folder.

- [ ] Extract the scss folder into the styles folder  
The files we want need to stay in the styles folder. Therefore, we can delete the scss folder after extracting all files.

- [ ] Remove components and objects folders  
Components and objects folders already exist in `src` directory, so there is no need for them to stay anymore. Also, don't forget to remove them from `_main.scss` file.

- [ ] Import scss-starter to WSK  
Import `main.scss` file in the top of `app.scss` file

- [ ] Make sure you commit your changes

- [ ] Start developing  
Execute the `yarn` command to install dependencies and then run `yarn start`. You are ready to develop!

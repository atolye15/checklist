---
title: Setting Up a New Symfony Project from Scratch
category: Back-End
date: "2020-03-11"
tags: ['php', 'symfony']
description: Steps we follow when starting a new project with Symfony. We recommend you to commit your changes in VCS you use after each step. Every To-do title can be a commit message for you.
---

- [ ] Create the initial Symfony project  
Install symfony via `composer create-project` by using `symfony/skeleton` or `symfony/website-skeleton`

- [ ] Set the coding standards  
Add php-cs-fixer via composer and add cs rules to `.php_cs.dist` file

- [ ] Configure PHPStan  
Add PHPStan static analyzer tool via composer and configure it by adding the extensions for Symfony

- [ ] Create the docker configuration  
Make sure that the project is running when Docker container is up

- [ ] Create the Makefile  
Create a Makefile which includes the steps that applied frequently in the project

- [ ] Configure the CI workflow  
Create a project on CircleCI and configure the CI workflow

- [ ] Create the README.md file  
Create a README.md file which includes information about how to install and up the project, the project's code style, the jira project link and contributing rules and steps. **And don't forget to hold this file up to date** 🤓

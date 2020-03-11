---
title: Symfony Release Checklist
category: Back-End
date: '2020-03-11'
tags: ['symfony', 'release']
description: The list of the To-do's we have complete right before the deploy our application to stage or live 🚀
---

- [ ] Check dependencies in the composer.json file  
Make sure the development and production dependencies are correctly defined and production release does not include development packages

- [ ] Check the environment values  
Check environment values in the `.env` file to prevent a leak of any sensitive information make sure there are no real data defined

- [ ] Test the Makefile is running as it should for all environment definitions  
Once again, make sure the `Makefile` is running correctly for all the environments defined for the project

- [ ] Open a merge pull request to the environment's base branch  
After the AC on Jira completed, open a merge pull request from issue(s) related branch to the environment's base branch

- [ ] Define environment values on server  
If any newly defined environment values exist in `.env` file, make sure they are defined in the `.env.local` with correct values on the target server

- [ ] Merge approved pull request  
Then wait for the deployment tool while you enjoy a sip of your ☕️

- [ ] Visit the application to make sure it is deployed successfully

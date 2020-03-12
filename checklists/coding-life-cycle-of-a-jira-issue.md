---
title: Coding Life-Cycle of a Jira issue
category: General
date: "2020-03-12"
tags: ['jira', 'issue', 'development', 'workflow']
description: Atolye15 has some protocols to follow prior to coding, in progress and afterwards of coding as well.
---

- [ ] Read the acceptance criteria carefully  
Be sure all cases are covered. Even you already discussed the issue with the team, some new cases may come up to your mind. Don't hesitate to discuss AC one more time with the team!

- [ ] Create a branch for the issue  
You should create a branch with a name like `feature/ABC-123_brief-description`. For bugs change `feature` with `bug` keyword

- [ ] Push your branch to remote immediately   
Since we have Jira-GitHub integration, you have to push the branch to remote in order to trigger "In Progress" transition on Jira

- [ ] Start time tracker  
You need to log your work time. You can use [Chronos](https://chronos.web-pal.com) or [Clockify](https://clockify.me). You can also manually log it on Jira interface

- [ ] Write the code 👊  
You always commit changes with a meaningful scope. Commits should contain just one task at a time. Therefore, all commits must be revertable

- [ ] Make sure you added necessary tests

- [ ] Check that everything is working as mentioned on acceptance criteria via E2E or manually  

- [ ] Make sure that there is no linting or formatting error

- [ ] Make sure you aren't below the coverage threshold

- [ ] Push your changes

- [ ] Create a new PR  
You may mention the issue name on PR title

- [ ] Assign relevant people to PR

- [ ] Stop the timer

---
title: Branch Settings on GitHub
category: DevOps
date: "2020-03-11"
tags: ['github', 'branch', 'kickoff']
description: Branch settings you should make when you create a new repository on GitHub
---

- [ ] Enable require pull request reviews before merging

- [ ] Set required reviews at least to one

- [ ] Enable dismiss stale pull request approvals when new commits are pushed

- [ ] Enable require status checks to pass before merging

- [ ] Mark CirleCI related checks on the list  
It is not allowed to merge any code without successfully passing the CircleCI tests.

- [ ] Mark Codecov related checks on the list
If the project uses Codecov, then enable it's checks too

- [ ] Enable include administrators  
No one can bypass this rules 🤝

- [ ] Apply these rules to master and develop branches

- [ ] Check automatically delete head branches on repository options

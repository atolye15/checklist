---
title: CircleCI & Jira Integration
category: DevOps
date: "2020-03-21"
tags: ['circleji', 'jira', 'integration']
description: CircleCI and Jira integration to send build status of each issue to Jira
---

- [ ] Navigate to Apps > Manage Apps > CircleCI for Jira > Get started on Jira

- [ ] Copy the Jira token

- [ ] Navigate to Project Settings > Jira Integration on the CircleCI project

- [ ] Press "Add Token" and paste the token you copied

- [ ] Navigate to API Permissions on CircleCI

- [ ] Create a token with All scope and name it as CIRCLE_TOKEN

- [ ] Copy the token

- [ ] Navigate to Environment Variables on CircleCI

- [ ] Create a new environment variable as CIRCLE_TOKEN

- [ ] Paste token you just copied  

- [ ] Add the Jira orb and the configuration to project's CircleCI config file  
You can find the related information from Jira orb [documentation](https://circleci.com/orbs/registry/orb/circleci/jira)

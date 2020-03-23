---
title: Setup a CircleCI Workflow
category: DevOps
date: "2020-03-23"
tags: ['circleci', 'orb']
description: Steps to configure a CircleCI workflow
---

- [ ] Make a seperated job for dependencies  
All installations must be done in a separate job in order to provide artifacts to upcoming ones. Therefore, the next jobs can be run in parallel.

- [ ] Restore previous caches on every job if possible  
You can read related CircleCI [documentation](https://circleci.com/docs/2.0/caching) for further information

- [ ] Save caches after dependency builds and installations  
You can find the related information from the link above

- [ ] You can persist to workspace the artificats  
You can find the information in CircleCI [documentation](https://circleci.com/docs/2.0/configuration-reference/#persist_to_workspace)

- [ ] Don't forget to add Jira orb and its configuration  
You can read the further information from [CircleCI & Jira Integration](/checklist/circleci-and-jira-integration) checklist

- [ ] Don't forget to add Codecov orb and its configuration  
You can read the further information from [CircleCI & Codecov Integration](/checklist/circleci-and-codecov-integration) checklist

- [ ] Add all tasks as a separated job and let them run in parallel



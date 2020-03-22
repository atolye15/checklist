---
title: CircleCI & Codecov Integration
category: DevOps
date: "2020-03-21"
tags: ['circleci', 'codecov', 'coverage', 'integration']
description: CircleCI and Codecov integration to track test coverage on our projects
---

- [ ] Go to the Codecov project page  
The pattern is like https://codecov.io/gh/{organization}/{repo-name}

- [ ] Copy the Codecov token

- [ ] Navigate to Project Settings > Environment Variables on the CircleCI Project

- [ ] Add an environment variable named CODECOV_TOKEN and paste the token as value

- [ ] Add Codecov orb and its configuration to project's CircleCI config file

You can find the related information from Codecov orb [documentation](https://circleci.com/orbs/registry/orb/codecov/codecov)

- [ ] Upload the coverage results after coverage job has been executed  
You are done!

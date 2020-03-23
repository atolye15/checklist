---
title: Configuring a CI Flow of a PHP Project
category: Back-End
date: "2020-03-23"
tags: ['ci', 'php', 'symfony']
description: CI Flow we commonly use in our PHP projects. We usually use CircleCI for run our checks. You can rearrange the orders of the to-do's, we usually follow them this way.
---

- [ ] Code style first  
Of course, if the project has some terribly ugly styled codes, no need to continue. PHP CS fixer, `Twig` and `YML` linters (for Symfony), `JS` and `CSS` linters (if repo contains also the front-end project) should be run

- [ ] Static analysis  
The static analysis tool PHPStan that previously configurated should be run

- [ ] Check dependencies for security vulnerabilities  
Run [Symfony Security Checker](https://security.symfony.com) to informed about security vulnerabilities. (If [Dependabot](https://dependabot.com) is running for the repository, no need to this step)

- [ ] Check the migrations are up to date with the schema  
Creating a migration for the latest schema updates shouldn't be forgotten

- [ ] Check the static translation messages (for Symfony)  
There is no easy way to catch all errors caused by translations in runtime at this step. Therefore, at least, static ones should be checked

- [ ] Run tests  
The tests, which cover close to 100% of the codebase, should be passed 😬

- [ ] Notify jira about the workflow status  
For CircleCI, you can read the further information from [CircleCI & Jira Integration](/checklist/circleci-and-jira-integration) checklist

- [ ] Notify Codecov  
In order to measure the code coverage changes, notify Codecov. For CicleCI, you can read the further information from [CircleCI & Codecov Integration](/checklist/circleci-and-codecov-integration) checklist

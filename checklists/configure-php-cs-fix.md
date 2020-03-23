---
title: Configure PHP CS Fixer
category: Back-End
date: "2020-03-23"
tags: ['php', 'symfony', 'configure']
description: Sometimes, we mess up the basic rules of code style. So we need a friend to cover our back! With PHP we are using PHP CS Fixer and to configure it we follow the steps below.
---

- [ ] Make sure PHP CS Fixer installed for the development environment only  
We do not need or we needn't have CS Fixer on any other environment.

- [ ] Make sure to exclude auto-generated files  
Strongly recommended to exclude auto-generated files like Migrations for example. That kind of file may be risky to overwrite.

- [ ] Set correct CS rules based on project needs  
You can find all CS rules on [this](https://mlocati.github.io/php-cs-fixer-configurator) repository.

- [ ] Final check for risky rules
If this is a greenfield project then enable risky rules without worries, otherwise, disable risky rules or make sure applied rules do not cause any side effects.

- [ ] Run the PHP CS Fixer command to see the result
If the behavior is as expected, then let's build some bigger projects 😎

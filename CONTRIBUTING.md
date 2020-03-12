# Contributing to Checklist

Want to contribute to the Checklist? There are some steps you need to follow.

## Code Contribution

For code contributing instructions please refer to [README.md](https://github.com/atolye15/checklist/blob/master/README.md)

## Checklist Contribution

All checklists on [Checklist](https://checklist.atolye15.com) is populating by the Markdown files that in [checklists](https://github.com/atolye15/checklist/blob/master/checklists) directory on this repository. If you want to add a new checklist you need to create a new markdown file on the directory, or if you want to update an existing one, you can edit the corresponding file and create a PR.

Since we use Markdown files for checklists, you can read Markdown notation from [here](https://www.markdownguide.org/) in case you're not familiar with it. We also use [Front Matter](https://jekyllrb.com/docs/front-matter/) to provide some meta data to checklists. Here are the required Front Matter data for a valid Checklist.

| Key         | Meaning                                                                  | Available Values                                                  | Example                                                                                                                       |
|-------------|--------------------------------------------------------------------------|-------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| title       | Title of the checklist                                                   | Can be anything                                                   | Bug Reporting                                                                                                                 |
| category    | Pre-defined category name                                                | You need to pick one of the pre-defined category                  | Project Management                                                                                                            |
| tags        | Tags for the checklist                                                   | Can be anything, but you need to follow tag rules mentioned below | ['jira', 'bug', 'issue']                                                                                                      |
| description | A brief description about checklist. It will be used on checklist lists. | Can be anything                                                   | The protocol we follow when we report a bug. This checklist is vital for assignee to understand the problem and reproduce it. |
| date        | Publication date. Most probably current day.                             | Format: YYYY-MM-DD                                                | 2020-02-14                                                                                                                    |

Here is the full list of pre-defined category list. It is not allowed to use any other, you should pick one of them. But, if you have a new brand category suggesstion, you should [create an issue](https://github.com/atolye15/checklist/issues/new) for that.

| Title              | Description                                                                                                                                         |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| Design             | These checklists ensure that we have standardized both visual design and user experience design principles.                                         |
| Front-End          | We keep it simple and smart, and these are our checklists mainly used by our front-end developers.                                                  |
| Back-End           | Server related, data-driven and API based checklists that help making our products of hard work stay steady.                                        |
| DevOps             | We love to automate things and have also checklists for that.                                                                                       |
| Project Management | They manage the team and act as a bridge between designers, developers and frankly, everyone, with the additional help of these checklists.         |
| Human Resources    | Cabin crew, slides armed and cross check! Here are the checklists to make sure everyone in the crew is happy.                                       |
| Marketing          | Our marketing checklist is to help supporting our good work by its communication, and has everything marketing team uses for our marketing efforts. |
| General            | There are some checklists which are hard to categorize. Let’s just call them generals.                                          |

We also have some tag using rules;

Tags are one of the main filtering elements that makes navigation easier and help us to keep everything in order.

As with anything else we have some rules for creating a tag;

* Tags should be self-explanotory and definitive.
* Tags should consist of one word only. If it really needs to have two or more words then please use a dash(-) to divide the words.
* Tags are related but different to the categories so they should not have the same name as it's categories. 

## Example Checklist File

```md
---
title: Bug Reporting
category: Project Management
date: "2020-02-14"
tags: ['jira', 'bug', 'issue']
description: The protocol we follow when we report a bug. This checklist is vital for assignee to understand the problem and reproduce it.
---

- [ ] Provide steps to reproduce  
Please provide all of the steps when you face the bug. It needs to include the current account information that you're having the issue with. Do not trust assignee to know everything. Never ever forget to provide all the essential steps.

- [ ] Provide actual result  
You need to provide the result that you get when you follow the steps to reproduce. This result is different from the acceptance criteria and it should includes attachment(s) that shows the case.

- [ ] Provide expected result  
You need to provide expected behaviour when you follow the steps to reproduce.

```

You can use the template via this [link](https://git.io/Jv6Wv)

## Contribution Channels

There are two ways for you to contribute.

## From your local

- [ ] Fork the repo
- [ ] Create a new md file that follows the rule on checklists directory or update an existing one.
- [ ] Commit and push your changes
- [ ] Open a PR to master branch

## From GitHub

- [ ] Navigate to [checklists](https://github.com/atolye15/checklist/blob/master/checklists) directory
- [ ] Create a new md file via [Create New File](https://github.com/atolye15/checklist/new/master/checklists) button or for editing an existing file, click the md file you wish to edit and click the pencil icon on the page.
- [ ] Create or update the content
- [ ] If you create a new file, you should give a file name which has to be lowercased without whitespaces and ends with **.md**
- [ ] Checklist title should be in the title case format.
- [ ] Preview the content with **Preview** button. 
- [ ] Give a meaningful name to your branch
- [ ] Start a new PR 

That's it! Hope to see your contribution 👊

### Language  

We prefer using a friendly language over formal language. We avoid any kind of discrimination and expect everyone to abide by. Please refer to our [Code of Conduct](https://github.com/atolye15/checklist/blob/master/CODE_OF_CONDUCT.md) for more information and positive & negative behavior examples.  

Every to-do on a given checklist may have a description, you should only add a description when;

* The to-do is not self explanatory enough for anyone to understand.
* The to-do requires to have additional link, tasks, to-do's or any other resources.

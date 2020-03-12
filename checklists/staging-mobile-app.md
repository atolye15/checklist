---
title: Stage A Mobile App
category: Mobile
date: "2020-03-11"
tags: ['mobile', 'react-native']
description: Follow these steps during staging a mobile application 
---

- [ ] Create a new branch  
Ideally named "testflight"  

- [ ] Update version and build number  
Some projects may have been configured to do this task using Fastlane. Run desired fastlane job/-s or do it manually if necessary.

- [ ] Make sure you have set up your authorization correctly  
You'll need a keystore file for android and authorized certificate/-s for iOS. While uploading to AppStore you might also need to enter a SMS verification code.

- [ ] Make sure staging application has the correct configuration  
API endpoints or environment variables may differ.

- [ ] Build a staging application  
Built APK file for Android can be found inside project's Android folder `app/build/output/apk/release/`, iOS application will be sent to TestFlight. 

- [ ] Load built apk file into Android test devices  

- [ ] Don't forget to merge your branch to develop  

---
layout: post
title:  "Experimenting a Raspberry"
date:   2016-09-11 16:00:00 -0300
categories: news
abstract: "This week I got a Raspberry Pi 3 Model B primarly for a Software Engineering class project, that is the one which I'll be working for the time. I'm planning to build a simple wheater station using some sensors, and upload that data to a server that will process that data to show reports."
---
This week I got a Raspberry Pi 3 Model B primarly for a Software Engineering class project, that is the one which I'll be working for the time. I'm planning to build a simple wheater station using some sensors, and upload that data to a server that will process that data to show reports. Aside, I have been designing a portable web radio streaming solution for the university where I work, using a Raspberry Pi 2 with Raspbian, Darkice and Darksnow to configure and upload a audio stream from an event that will occur September 19.


For the wheater station, I currently ordered a rain, humidity and temperature sensors, but I am thinking to buy a barometer and build a wind velocity sensor (as a proper anemometer is quite expensive for my current budget). Still in the Raspberry Pi, the OS will be the Raspbian, as it have wide support in that field and is based on a GNU/Linux distro that I love, Debian. Furthermore, I'll develop a Python program for control that will upload the data to the server. For the server side I'm planning to create a web app and this time I'm decided to learn [Flask](http://flask.pocoo.org/) as it brings a lightweight approach on backends. That app should give statistical and real time weather information to the user.


One of the project's prerequisites is to implement using Object Orientation, so is a good thing to build a class diagram after the use cases diagram to point the objects and follow with the project. I think that objects will be treated in the server side to avoid loss of performance on the Raspberry Pi data upload, because I don't trust my current internet provider efficiency. Finally, tomorrow I'll create a github repository to put the things on, can't create it now because I need to discuss the project name with the guy that will work with me on that.


I don't have a spare monitor, but after "burning" the Raspbian image to the SD card and plugging the board to the eletricity, it automaticaly booted and was ready for SSH, that really impressed me. After connecting via ssh, I installed [xrdp](http://www.xrdp.org/) which worked out-of-box too, and configured wifi. Now I can access the terminal and graphical interface wherever I want putting the board in a comfortable place. Things gone pretty easier than I thought, I hope that the rest go as fluid.
---
layout: post
title:  "More statistics for Lexicanalytics"
date:   2016-06-18 19:25:00 -0300
categories: news
abstract: "Lexicanalytics will have an upgrade of features regarding statistical measurement and multiple text productions support for a broader report functionality. It will bring the application's analytics nature a step further. Lexicanalytics will provides more use for researchers with graphs, save reports and so on. Technically, I'm planning to use R language within Java using JRI."
---
[Lexicanalytics](https://github.com/glauberrleite/lexicanalytics) will have an upgrade of features in the next release. The new features will make the application able to handle multiple files with text samples and bring statistical reports about that set of productions. Next Monday I'll start a college class called Probability and Statistics, that may bring some ideas for those new functionalities. But, for now, let me show with more details what I'm planning:


* Multiple text samples input - The user can give a set of text files to retrieve the basic reports;
* Sequencies of text productions - Alternatively to the above, the user can put each text on the textarea component and press "Next" until "Finished" is pressed;
* Bar plots - Graphs where the productions will be compared about TTR, number of words, number of different words and so on;
* Pie charts - Graphs to show the proportion of some production's results compared with the whole set;
* Save Reports and graphs - In the last release I could make the reports be saved to pdf, but the API made the application grow so much in size that I preferred to avoid this, but now, if the statistcs enlarge the app size, then I'll implement pdf saves, else the text files will be used to keep it lightweight;
* More fun stuff that I may learn afterwards.


To achieve it I'm planning to use some library where I can use [R language](https://www.r-project.org/) within Java, because R is very used in Scientific Community and I fell it very efficient and fun to use. One of the prerequisites for the technology is it to be Free Software, it's preferable to use some version of GPL because Lexicanalytics' license is GPL v3. At least, R is released under GPL too. My starting shot will be [JRI](https://rforge.net/JRI/) that comes within [rJava](https://rforge.net/rJava/) or separated, this choice is because it has good feedback from the community and I see it pretty concrete, although there isn't a 1.0 release, however it is at version 0.5-0 which may be sufficient for my purposes.

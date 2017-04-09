---
layout: post
title:  "Othello and AI exercises"
date:   2017-03-10 00:30:00 -0300
categories: projects, news
abstract: "In my Artificial Intelligence course, I'm getting a good notion on how to model the world to solve some hard problems, and decided to pratice it. From the four exercises, the Othello was the one that I find most challenging at this time of the course. So I decided to make it public for everyone who desires to take a look."
---
[Othello or Reversi](https://en.wikipedia.org/wiki/Reversi) is a board game for two player, where each player is a colored disk and try to get the higher number of disks in the 8x8 board. To play Othello (which is the modern version of Reversi), you start with four disks in the center of the board, two white and two black, disposed in a diagonal arrangement. What you need to do is to corner enemy disks between two of yours (in horizontal, vertical or diagonal), converting them to your color. The number of disks is the score, so you need to build a strategy to get the most pieces while giving little field to get cornered by your enemy.

I found this game not so easy as [tic-tac-toe](https://en.wikipedia.org/wiki/Tic-tac-toe) but not so hard as [chess](https://en.wikipedia.org/wiki/Chess) to use one of the projects to my Artificial Intelligence class. It's rules are quite easy to humans to understand but challenging to my programming skills. But, in what concerns to AI, this problem is a good one to apply the [Minimax](https://en.wikipedia.org/wiki/Minimax) algorithm. I started to code, but found its mechanics quite hard to optimize. The validation of moves is demanding and a little ugly to read because I didn't find a better way to make this particular piece of code clean, at least until this moment. The [source code](https://github.com/glauberrleite/othello) is already on Github, now as a public project.

That problem is one of four exercises, the other three being the problem of [missionaries and cannibals](https://github.com/glauberrleite/missionaries-and-cannibals), a program to choose the best [metro route in a portion of paris](https://github.com/glauberrleite/paris-subway) and the classic problem of the [travelling salesman](https://github.com/glauberrleite/travelling-salesman). What is funny is that the deadline is already over. I completed the three problems, but the Othello surprised me, because I lost most time thinking how to optimize its source code that it broke my schedule. So I decided to continue to develop this child as long as I can. At first, made the problem in private repositories, but now that the deadline is gone, I decided that they may help some people. I think that the most interesting thing in these toy problems is how they seem to be a little childish at first and then you see that they give so much technique to solve real life problems.
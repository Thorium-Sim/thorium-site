---
title: "Shank You"
author: "Alex Anderson"
date: "2016-01-28T16:56:30.895Z"
layout: post
path: "/shank-you/"
category: "Posts"
---

I first got The idea for Shank You at a company activity. One of the managers was talking about how his ward had put together a game of Assassin for his ward, and it was going really well. He mentioned that he was operating as the dispatcher, giving the participants their next target when one target was killed. In that role, though, he couldn't be a participant. To me, that sounds like an opportunity.

To start, I sketched out what needed to happen:

* Users needed to have a real identity. I could force Facebook logins so users had to represent themselves accurately.

* I wanted to make this as big as possible, so there needed to be support for multiple games. 

* I also needed a human readable way to represent those games. I opted for a randomly generated four-word 'secret code' which players could use join games. Later on, I also included a url scheme so users could join games by following a link.

* There needed to be a time period for players to join games, so a start time was added.

* Once the game starts, players should be assigned targets from their game in a circular fashion, so each person has one target and there can only be one winner.

* Players need a way to show that they have been eliminated. I started with another four-word secret code which the assassin would type in, but a simple 'Surrender' button proved simpler and more effective.

* The game needed to recognize when the game was over and who the winner is.
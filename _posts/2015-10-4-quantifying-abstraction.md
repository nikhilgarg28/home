---
layout: post
title: Quantifying Abstractness
image: abstract-11.png
subtitle: A Thought Experiment
permalink: quantifying-abstractness
---

In this post, I present a very handy-wavy and pesudo-formal thought experiment 
using which we can (sort of) gauge and quantify the degree of abstractness of a 
question.

Let's focus our attention on questions of a fixed form first. In particular,
let's only think about questions of the form- 'Is X a good way of doing Y or
not?'. I define the abstractness of such a question by the cost of the naive 
brute force simulation of an A/B test. That is, the abstractness of this question 
is the cost (or some measure of it), if we were to do conduct an A/B test where
we do X in some cases and don't do X in others and then compare Y between the
two experiment groups. In most cases, it's going to be the cost of just doing X
so that's what we will look at. Let's take some examples.

Say the question is - 'Is mopping the floor a good way of cleaning it'. Here X
is 'mopping the floor' and Y is 'cleaning the floor'. A naive way of finding
this answer will be to do an A/B test where we actually mop the floor for one
room and don't do anything in the other room and finally compare which room has
cleaner floor. 
The abstractness of this question, then, is the cost of mopping the floor (since
the cost of not doing anything with half the population is zero). If we
were to measure the cost in the form of the human effort, the abstractness of
this question is the time it takes to mop, say 15 minutes. Let's take another 
example. Say the question is - 'Is building highways a good way of improving 
economy or not?'. In this case the cost is - actually builing a network of 
highways and then observing the whole economy, say for ten years. So by my 
definition, the abstractness of this question is around several orders of 
magnitude higher than the previous one.

This generalizes well for many different types of questions. For example, if the
question is - "Is X better than Y for Z?". In this case, we just do an A/B test where
we do X for half the population and Y for the other half and the compare the
result on Z. Same thing as before, except the degree of abstractness is measured
by the sum of cost of doing X and Y. Similarly, if the question is 'What is the
best way to do X?', we can measure the abstractness by adding the cost of trying
out some number of different ways of doing X. 

Now, let's consider some examples (in the increasing order of abstraction):

1. What is the best style for defining functions in Python?
2. Is Python a good language?
3. What is the best way to build and regulate the culture of a company?
4. What should be taught during high school?
5. Is matriarchy better than patriarchy for creating a good society?
6. Is trying to establish contact with aliens good for the mankind?


Go ahead, try to quantify the degree of abstraction in some of your own
examples. It's not very useful but I find it fund.

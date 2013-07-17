Anagram Detection
=================

## Problem ##
Given a dictionary, detect the number of anagrams inside the dictionary

Example: a dictionary with 3 words:
    egg
    geg
    school

has 1 anagram ( egg and geg ).

## Solving ##
This is a classic case of sort and arrange, so the steps to solve the problem are:
  1. When you read a word from the dictionary you should sort the letters of the word
  2. Arrange the dictionary of sorted letters so you can see the anagrams close each other.

The first step is trivial, and second step you should use a correct data structure to make your live more easy. A good choice would be a Hash structure. 

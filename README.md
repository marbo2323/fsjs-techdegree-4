# fsjs-techdegree-4
Treehouse Fullstack JavaScript Techdegree project 4 - OOP Game Show App

## Introduction

This is a game where the player has to guess a phrase that consists of several words.

### Game guide

When the game opens, you need to click on the Start Game button. A page will then open containing a randomly selected phrase, an on-screen keyboard, and an indicator showing your remaining lives. To play, you have to start selecting letters on the keyboard. When you select the correct letter, those letters will be opened in a phrase and the background of the selected letter on the on-screen keyboard will turn dark blue. If you click on the wrong letter, the background of the letter on the screen keyboard will turn orange and the life indicator will lose one life. Its characteristic is that the image of life turns gray. You can choose letters as long as you have enough lives. If the phrase is guessed before the lives run out, the player wins, if not, the player loses. In both cases, the home page will be displayed again with a win or loss notification. The Start Game button is also displayed again, where you can click to start a new game with a new random phrase.

## Adding or changing phrases

This game contains built-in phrases. If you want to change or add phrases, you need to open the Game.js file. This file contains a Game class with an instance field named "phrases" in its constructor. This is an array, the content of which can be supplemented with new phrases if desired.
### Hi there, here is a description of the code.

# Cards Battle Game

In this game, we have two players ( A and b) holding three cards for each round and they will compete by the numbers on the card. The winner will gain one point. Once one player gets 5 points in total, the game ends.
To win the game, I set some rules.

1.Each player will be deal three cards randomly and the numbers on each card are from 1 to 10.

2.If the three cards of Player A are not consecutive, for example, 4, 7, 8, nd Player B has three consecutive cards like 1, 2, 3, then Player B wins this round.

3.If the three cards of both Player A and Player B are consecutive numbers, then the total sum of the three numbers will be compared, and the player with the larger sum wins this round. For example, if Player A's cards are 1, 2, 3, and Player B's cards are 2, 3, 4, then Player B wins.

4.If the three cards of both Player A and Player B have the same number, then it is considered a bomb, and the player who has the bomb wins this round.

5.If both Player A and Player B have a bomb card, then the numbers on the bomb card will be compared. For example, 4 bombs are larger than 3 bombs (444>333).

6.If both Player A and Player B have non-consecutive cards with three different numbers, then they need to redraw the cards and start the next round.

# Motivation
I design the game based on a Chinese card battle gamde which contains 3 players and more difficult rules. I just make it in more simple way.

# Getting start
To get started, simply open the game.html in a web browser. The game should load automatically.

On the first page, you can click the "rule" button to know about the game. When you finish reading, you could click "yes" to enter to the game deck.


# Playing the Game

To play the game, click the "Deal Cards" button to deal three cards to each player. 

If a player wins five rounds, the game will end and the winner will be displayed.

# Dependencies
This game requires no additional dependencies. It is built with pure HTML, CSS, and JavaScript.

# Future Improvements
Some ideas for future improvements to the game include:
Adding sound effects
Adding animations to the cards
Adding a timer for each round
Adding a leaderboard to track high scores
# Contributions
Contributions to the game are welcome! If you find a bug or have an idea for a new feature, feel free to create a pull request.


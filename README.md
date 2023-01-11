You and your friends are playing a game of scrabble. The longer your word is, the more points you get. You want to make a tool for yourself that accepts your word and gives you the length of the word so that you don't have to count it each time. This tool should count letters in real-time while you type and not wait for you to press some button for calculation.
 

 Implementation Details:
 There should be a textbox with id="evaluatedText" and an h3 tag with id="letterCount". The h3 renders the calculated letter count of the text in the textbox. The letters should be counted in realtime, i.e., when users update the text in the textbox, the h3 should also update the letter count displayed. If there's no text, it should display 0.
 

 For simplicity, we are counting all keys, including special keys like spacebar.

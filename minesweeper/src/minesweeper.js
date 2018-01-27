const blankLine = '  |   |  ';

const guessLine = '1 |   |  ';

const bombLine = '  | B |  ';

const info = 'This is what an empty board would look like:';

const bombBoard = 'This is what a board with a guess and a bomb on it would look like';

var countIt = 0;

//Loop to print out a blank board
var loop = function(){
    console.log(info);
    while(countIt < 3){
        //Your code goes here!
        console.log(blankLine);
        countIt++;
    }

//Print out bomb board
    console.log(bombBoard);
    console.log(guessLine + '\n' + bombLine +  '\n'  + blankLine);
};
loop();




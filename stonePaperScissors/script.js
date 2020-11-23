function game(choice){
    var humanChoice, botChoice;
    humanChoice=choice.id;
    botChoice=['stone','paper','scissor'][Math.floor(Math.random()*3)];
    
    function decide(yourchoice, computerchoice){
        var gamedb={
            'stone': {'scissor':1,'stone':0.5,'paper':0},
            'paper': {'stone':1,'paper':0.5,'scissor':0},
            'scissor': {'paper':1,'scissor':0.5,'stone':0}
        };

        var yourScore=gamedb[yourchoice][computerchoice];
        var computerScore=gamedb[computerchoice][yourchoice];

        return [yourScore,computerScore];
    }
    results=decide(humanChoice,botChoice);
    
    function final([yourScore,computerScore]){
        if(yourScore==0){
            return {'message':'You lost!', 'color':'red'};
        } else if(yourScore==0.5){
            return {'message':'You tied!', 'color':'yellow'};
        } else{
            return {'message':'You won!', 'color':'green'};
        }
    }
    message=final(results);
    console.log(message)
    //show(choice.id,botChoice,message);

}
var targetNumber;
var comNumber;
var button1Num = 0
var button2Num = [];
var button3Num = [];
var button4Num = [];
var counter = 0;
var numberOptions = [];

    $(".buttonStart").on("click", function() {

        comNumber = Math.floor(Math.random() * (120 - 19) ) + 19;
        $("#scoreToMatch").text(comNumber);
        
           
    })
    function newGame(){
        function crystal1(){
            button1Num = Math.round(Math.random() * (12-1) + 1);
            // button1Num = parseInt(button1Num);
            return
        }

        function crystal2(){
            button2Num = Math.round(Math.random() * (12-1) + 1);
            // button1Num = parseInt(button1Num);
            return
        }

        function crystal3(){
            button3Num = Math.round(Math.random() * (12-1) + 1);
            // button1Num = parseInt(button1Num);
            return
        }

        function crystal4(){
            button4Num = Math.round(Math.random() * (12-1) + 1);
            // button1Num = parseInt(button1Num);
            return
        }


        $(".button1").on("click", function(){
       
            counter+=button1Num;
            alert("New score: " + counter);
            if(counter == comNumber){
                alert("you've won!");
                newGame();
                }else if (counter >= comNumber){
                    alert("You've lost!");
                    newGame();
                }
       

        });

        $(".button2").on("click", function(){
        
            counter+=button2Num;
            alert("New score: " + counter);
            if(counter == comNumber){
                alert("you've won!");
                newGame();
                }else if (counter >= comNumber){
                    alert("You've lost!");
                    newGame();
                }

        });
    
        $(".button3").on("click", function(){
        
            counter+=button3Num;
            alert("New score: " + counter);
            if(counter == comNumber){
                alert("you've won!");
                newGame();
                }else if (counter >= comNumber){
                    alert("You've lost!");
                    newGame();
                }
                 
                
        

        });

        $(".button4").on("click", function(){
        
            counter+=button4Num;
            alert("New score: " + counter);
            if(counter == comNumber){
                alert("you've won!");
                newGame();
                }else if (counter >= comNumber){
                    alert("You've lost!");
                    newGame();
                }
        

        });




        crystal1();
        crystal2();
        crystal3();
        crystal4();

    }

        if(counter == comNumber){
        alert("you've won!");
        newGame();
        }

        else if (counter <= comNumber){
        alert("You've lost!");
        newGame();
        }
    newGame();










$(document).ready(function() { 




$("#start").on("click", function() {
    game.start()
})

$(document).on("click", "#end", function(){
    game.done()
})

var questions = [
    
    {
        question: "What popular New Orleans DJ/Producer is responsible for the tag-line 'We the Best?'",
        answers: ["P-Diddy", "Mike Will-Made-It", "Metro Boomin","DJ Khaled"],
        correctAnswer: "DJ Khaled"
    },
    
    {
        question:"What song featuring Drake did DJ Khaled release in summer 2016?",
        answers: ["For Free", "One Dance", "Blank Space", "Mask Off"],
        correctAnswer: "For Free"
    },
    
    {
        question: "What was the name of DJ Khaled's last album (released in 2017)?", 
        answers: ["We the Best", "Major Key", "Grateful", "Reputation"],
        correctAnswer: "Grateful"
        
    },
    
    {
        question: "What Miami-based rapper did DJ Khaled feature on the song, 'Speedin'?", 
        answers: ["Busta Rhymes", "Rick Ross", "Jay-Z", "Lil' Wayne"],
        correctAnswer: "Rick Ross"
        
    },
    
    {
        question: "Which of these DJ Khaled songs featured Beyonce and Jay-Z?", 
        answers: ["We Takin' Over", "No Brainer", "All I Do Is Win", "Shining"],
        correctAnswer: "Shining"
        
    },
    
    {
        question: "Which of these Canadian artists sings the chorus on 'No Brainer?'", 
        answers: ["PartyNextDoor", "The Weeknd", "Justin Bieber", "Celine Dion"],
        correctAnswer: "Justin Bieber"  
    
    }]

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function(){
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter<0){
            console.log("Time Is Up!");
            game.done();
        }
    },
    start: function() {
        timer = setInterval(game.countdown, 1000);
        $("#game-window").prepend("<h2> Time Remaining: <span id='counter'>120</span> Seconds </h2>");
            for (i=0; i<questions.length; i++) {
            $("#game-window").append("<div class=row id=question"+ [i+1] +">");
            
            $("#start").remove()
        
            $("#question"+[i+1] +"").append("<h2>" + questions[i].question + "</h2>");

            $("#game-window").append("<div class='input-group m-1' id=question"+ [i+1] +"answers>");

            for (var j=0; j<questions[j].answers.length; j++){
                $("#question"+ [i+1] +"answers").append("<input type= 'radio' class='ml-2' id=question-"+i+"'+ value='"+questions[i].answers[j]+"'>"+questions[i].answers[j]) ;  
                }

        };

        $("#game-window").append('<br><button id="end"> Done </button>');
    
    },
    done: function() {
        $.each($('input[name="question-0"]:checked'), function () {
        if($(this).val()==questions[0].correctAnswer){
            game.correct++;}
          else {
            game.incorrect++;
          }  
        });
        $.each($('input[name="question-1"]:checked'), function () {
            if($(this).val()==questions[1].correctAnswer){
                game.correct++;}
              else {
                game.incorrect++;
              }  
        });
        $.each($('input[name="question-2"]:checked'), function () {
            if( $(this).val()==questions[2].correctAnswer){
                game.correct++;}
                else {
                game.incorrect++;
                }  
        });
        $.each($('input[name="question-3"]:checked'), function () {
            if( $(this).val()==questions[3].correctAnswer){
                game.correct++;}
                else {
                game.incorrect++;
                }  
        });
        $.each($('input[name="question-4"]:checked'), function () {
            if( $(this).val()==questions[4].correctAnswer){
                game.correct++;}
                else {
                game.incorrect++;
                }  
        });
        $.each($('input[name="question-5"]:checked'), function () {
            if($(this).val()==questions[5].correctAnswer){
                console.log
                game.correct++;}
                else {
                game.incorrect++
                }  
        });
        this.result();
    },
    result: function(){
        clearInterval(timer);
        $("#game-window h2").remove();
        $("#game-window").html("<h2>All done! </h2>");
        $("#game-window").append("<div class='row' <h3>Correct Answers: "+this.correct+"</h3>");
        $("#game-window").append("<div class='row' <h3>Incorrect Answers: "+this.incorrect+"</h3>");
        $("#game-window").append("<div class='row' <h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
    }
}
    
  

    
})




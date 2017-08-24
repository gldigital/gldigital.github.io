$(document).ready(function(){

// Global Variables
var targetNumber = Math.floor(Math.random() * 120) +19; 
var counter = 0;
var numberOptions = Array.from({length: 4}, () => Math.floor(Math.random() * 15) + 1); // We begin by expanding our array to include four options.
var wins = 0;
var losses = 0;

//   Functions 

function startGame () {

        // reset 
        targetNumber = Math.floor(Math.random() * 120) +19; 
        counter = 0;
        numberOptions = Array.from({length: 4}, () => Math.floor(Math.random() * 15) + 1); // We begin by expanding our array to include four options.

        // adding variables to the DOM
        $("#number-to-guess").text(targetNumber);
        $("#userWins").text(wins);
        $("#userLoses").text(losses);
        $("#userTotal").text(counter);
} 

// End of StartGame Function

function play() {
         // Next we create a for loop to create crystals for every numberOption.
        for (var i = 0; i < numberOptions.length; i++) {
    
        // For each iteration, we will create an imageCrystal
        var imageCrystal = $("<img>");
    
        // First each crystal will be given the class ".crystal-image".
        // This will allow the CSS to take effect.
        imageCrystal.addClass("crystal-image");
    
        // Each imageCrystal will be given a src link to the crystal image
        imageCrystal.attr("src", "assets/img/crystal.png");
    
        // Each imageCrystal will be given a data attribute called data-crystalValue.
        // This data attribute will be set equal to the array value.
        imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    
        // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
        $("#crystals").append(imageCrystal);

    }

        // This time, our click event applies to every single crystal on the page. Not just one.
        $(".crystal-image").on("click", function() {
    
        // Determining the crystal's value requires us to extract the value from the data attribute.
        // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
        // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
        // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
        
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        // We then add the crystalValue to the user's "counter" which is a global variable.
        // Every click, from every crystal adds to the global counter.
        counter += crystalValue;
    
        // All of the same game win-lose logic applies. So the rest remains unchanged.
        $("#userTotal").text(counter);
        // alert("New score: " + counter);
    
        if (counter === targetNumber) {
            wins++;
          alert("You won!");
          startGame();
        }
    
        else if (counter >= targetNumber) {
          losses++;
          alert("You lost!!");
          startGame();
          
        }

    });

} // End of Play Function 

function reset() {
    
        $(".reset").on("click", function() {

        startGame();
    
    });
}
// End of reset function 

function newGame() {

    // resetting brand new game
    $(".New-Game").on("click", function() {
         targetNumber = Math.floor(Math.random() * 120) +19; 
         counter = 0;
         numberOptions = Array.from({length: 4}, () => Math.floor(Math.random() * 15) + 1); // We begin by expanding our array to include four options.
         wins = 0;
         losses = 0;

         $("#number-to-guess").text(targetNumber);
         $("#userWins").text(wins);
         $("#userLoses").text(losses);
         $("#userTotal").text(counter);
    });
}

// End of newGame function

// Main Process 

    startGame();
    play();
    reset();
    newGame();

}); 
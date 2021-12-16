var character = document.getElementById("character");
var block = document.getElementById("block");

window.addEventListener("keydown", checkKeyPress, false);

function checkKeyPress(key){
    if (key.keyCode == "38"){
        jump()
    }
    if (key.keyCode == "32"){
        jump()
    }
}

function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    }, 500);
}

var updateScore = setInterval(function(){
    var score = document.getElementById("score-board").innerText;
    var newScore = Number(score.slice(7)) + 1;
    newScore = "Score: " + newScore;
    document.getElementById("score-board").innerHTML = newScore;
}, 180)

var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 && characterTop>=130){
        block.style.animation = "none";
        block.style.display = "none";

        clearInterval(updateScore)

        var score = document.getElementById("score-board").innerText;
        score = Number(score.slice(7));

        if (score > 1500){
            document.getElementById("game-over-board").innerHTML = "Game Over! OOOOF, you out-performed the developer of this game!";
        } 
        else{
            document.getElementById("game-over-board").innerHTML = "Game Over!";
        }
    }
}, 10);

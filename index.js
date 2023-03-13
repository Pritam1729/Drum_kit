var i;
for(i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
        var buttoninnerhtml = this.innerHTML;
        eventh(buttoninnerhtml);
        buttonanimation(buttoninnerhtml);
    })
    
    
}

function eventh(express) {
    switch(express){
        case "a":
                    var audio = new Audio("sounds/crash.mp3");
                    audio.play();
                    break;
                case "s":
                    var audio = new Audio("sounds/kick-bass.mp3");
                    audio.play();
                    break;
                case "d":
                    var audio = new Audio("sounds/snare.mp3");
                    audio.play();
                case "f":
                    var audio = new Audio("sounds/tom-1.mp3");
                    audio.play();
                    break;
                case "j":
                    var audio = new Audio("sounds/tom-2.mp3");
                    audio.play();
                    break;
                case "k":
                    var audio = new Audio("sounds/tom-3.mp3");
                    audio.play();
                    break;
                case "l":
                    var audio = new Audio("sounds/tom-4.mp3")
                    audio.play();
                    break;
    }
}

document.addEventListener("keydown",function(event) {
    eventh(event.key)
    buttonanimation(event.key);
})

function buttonanimation(currentkey){
    

    var buttonClass = document.querySelector("."+currentkey)
    buttonClass.classList.add("pressed")

    setTimeout(function() {
        buttonClass.classList.remove("pressed");
    },100)

}








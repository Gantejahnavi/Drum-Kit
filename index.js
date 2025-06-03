
// for(var i=0; i<document.querySelectorAll("button").length; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         var audio = new Audio("sounds/tom-1.mp3");
//         audio.play();
//     });
// }

// document.querySelector("button").addEventListener("click", function(){
//     var audio = new Audio("sounds/tom-4.mp3");
//     audio.play();
// });

// for(var i=0; i<document.querySelectorAll("button").length; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         this.style.color="white";
//     });
// }

for(var i=0; i<document.querySelectorAll("button").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var btnText = this.innerHTML;
        makeSound(btnText);
        animate(btnText);

    });
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    animate(event.key);
})

function animate(key){
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("." + key).classList.remove("pressed");
    }, 200); 
}

function makeSound(key){
    switch(key){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            alert("Wrong key pressed");
    }
}


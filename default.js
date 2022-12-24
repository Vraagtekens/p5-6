import {MainController} from "./models/mainController.js"

window.onload = async function() {
    //MainController only gets loaded if frame is not in an iframe
    if(window.location === window.parent.location){
        const mainController = new MainController();
    } else {
        iframe();
    }
};


//iframe is true remove everything but the sketch
function iframe(){
    const frameBox = document.querySelector(".main-frame-box");
    const frame = document.querySelector("#frame");
    const iframePlace = document.querySelector("#iframePlace")

    iframePlace.appendChild(frame)
    frameBox.remove()
}
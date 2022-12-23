window.onload = async function() {
    controllerLoad();;
    
};

function controllerLoad(){
    if(window.location === window.parent.location){
        fullScreenButtonEvent();
    } else {
        
    }
}

async function getRepo(){
    const url = "https://api.github.com/repos/Vraagtekens/p5-template/contents"
    const response = await fetch(url)
    const result = await response.json()

    console.log(result)
}



async function getRepoScript(){
    let x;
    $.get("https://raw.githubusercontent.com/Vraagtekens/p5-template/main/js/navbarController.js", async function(data) {
        // $(".test").html(data);
        x = await data
        console.log(x)
    });

    
}


function fullScreenButtonEvent(){
    const button = document.querySelector("#fullscreenButton");
    button.addEventListener('click', (event) => {
        openFullscreen()
        console.log("click")
    });

}

function openFullscreen() {
    const elem = document.querySelector("#frame");
    if (elem.requestFullscreen) {
    elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
    }
}
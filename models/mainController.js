export class MainController{
    frame;
    fullscreenButton;
    frameTitle;
    versionInput;
    sketchScript

    repoName;
    repoData;

    constructor(){
        this.repoName = "p5-5"
        this.frame = document.querySelector("#frame");
        this.fullscreenButton = document.querySelector("#fullscreenButton");
        this.frameTitle = document.querySelector(".frame-title")
        this.versionInput = document.querySelector("#version");
        this.sketchScript = document.querySelector("#sketch-script")
        this.start();
    }

    async start(){
        await this.getRepo();

        this.versionOptions();
        this.setTitle();
        this.fullScreenButtonEvent();

        this.changeVersion();
    }

    async versionOptions(){
        let kanker = $.get("./sketches/sketch-1.js");
    }

    changeVersion(){
        this.versionInput.addEventListener("change", (event) => {
            const version = this.versionInput.value
            localStorage.setItem("sketch", "./sketches/" + version + ".js")
            console.log(localStorage.getItem("sketch"))
            // window.location.reload();
        })
    }

    fullScreenButtonEvent(){
        this.fullscreenButton.addEventListener('click', (event) => {
            this.openFullscreen()
        });
    }

    openFullscreen(){
        if (this.frame.requestFullscreen) {
        this.frame.requestFullscreen();
        } else if (this.frame.webkitRequestFullscreen) { /* Safari */
        this.frame.webkitRequestFullscreen();
        } else if (this.frame.msRequestFullscreen) { /* IE11 */
        this.frame.msRequestFullscreen();
        }
    };

    setTitle(){
        document.title = this.repoName
        this.frameTitle.textContent = this.repoName
        console.log(this.repoData)
    }
    
    async getCode(path){
        const z = await $.get(path);
        console.log(z)
    }

    async getRepo(){
        const url = "https://api.github.com/repos/Vraagtekens/" + this.repoName
        const response = await fetch(url)
        const result = await response.json()
    
        this.repoData = result;
    }


}
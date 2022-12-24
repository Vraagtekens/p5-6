export class MainController{
    frame;
    fullscreenButton;
    frameTitle;
    repoName;
    repoData;

    constructor(){
        this.repoName = "p5-5"
        this.frame = document.querySelector("#frame");
        this.fullscreenButton = document.querySelector("#fullscreenButton");
        this.frameTitle = document.querySelector(".frame-title")

        this.start();
    }

    async start(){
        await this.getRepo();

        this.setTitle();
        this.fullScreenButtonEvent();
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
    

    async getRepo(){
        const url = "https://api.github.com/repos/Vraagtekens/" + this.repoName
        const response = await fetch(url)
        const result = await response.json()
    
        this.repoData = result;
    }
}
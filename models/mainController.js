export class MainController{
    frame;
    fullscreenButton;
    frameTitle;
    versionInput;
    sketchScript;
    sketchName;

    repoName;
    repoData;
    sketchFolder;
    code;

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
        await this.getSketchFolder();
        await this.getCode();

        this.versionOptions();
        this.setCode();
        this.setTitle();
        this.fullScreenButtonEvent();

        this.changeVersion();
    }

    async versionOptions(){
        const template = document.querySelector("#version-option")
        const firstOption = document.querySelector("#first-option")
        for (let i = 0; i < this.sketchFolder.length; i++) {
            let sketchPath = this.sketchFolder[i].path
            let sketchName = this.sketchFolder[i].name

            if(localStorage.getItem("sketch") === sketchPath){
                firstOption.textContent = sketchName
                firstOption.value = sketchPath
                this.sketchName = sketchName;
            } else {
                let x = template.content.cloneNode(true);
                let option = x.querySelector(".version-option")
                
                option.textContent = sketchName
                option.value = sketchPath

                this.versionInput.append(x)
            }
        }
    }

    changeVersion(){
        this.versionInput.addEventListener("change", () => {
            const version = this.versionInput.value
            localStorage.setItem("sketch", version)
            window.location.reload();
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
    }
    
    setCode(){
        document.querySelector(".code-title").textContent = this.sketchName;
        document.querySelector(".language-js").textContent = this.code;

        //highlight code
        hljs.highlightAll(); 
        hljs.initLineNumbersOnLoad();
    }

    async getCode(){
        const z = await $.get(localStorage.getItem("sketch"));
        this.code = z
    }

    async getRepo(){
        const url = "https://api.github.com/repos/Vraagtekens/" + this.repoName
        const response = await fetch(url)
        const result = await response.json()
    
        this.repoData = result;
    }

    async getSketchFolder(){
        const url = "https://api.github.com/repos/Vraagtekens/" + this.repoName + "/contents/sketches"
        const response = await fetch(url)
        const result = await response.json()
    
        this.sketchFolder = result;
        console.log(result)

    }


}
import { FrameController } from "./frameController.js";

export class MainController{
    frame;
    
    frameTitle;
    sketchScript;

    repoName;
    repoData;
    sketchFolder;
    code;

    frameController;

    constructor(){
        this.repoName = "p5-5"
        this.frame = document.querySelector("#frame");
        this.frameTitle = document.querySelector(".frame-title")
        this.sketchScript = document.querySelector("#sketch-script")

        this.start();
    }

    async start(){
        await this.getRepo();
        await this.getSketchFolder();
        await this.getCode();

        this.frameController = new FrameController(this.frame, this.sketchFolder)
        this.setCode();
        this.setTitle();
    }

    setTitle(){
        document.title = this.repoName
        this.frameTitle.textContent = this.repoName
    }
    
    setCode(){
        document.querySelector(".code-title").textContent = localStorage.getItem("sketch");
        document.querySelector(".language-js").textContent = this.code;

        //highlight code
        hljs.highlightAll(); 
        hljs.initLineNumbersOnLoad();
    }

    async getCode(){
        var xd = await $.get(localStorage.getItem("sketch"));
        this.code = xd
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
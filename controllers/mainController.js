import { FrameController } from "./frameController.js";

export class MainController{
    //views
    frame;
    frameTitle;
    sketchScript;
    fileSelect;

    repoName;
    repoData;
    sketchFolder;
    modelFolder;
    code;

    frameController;

    constructor(){
        this.repoName = "p5-6"
        this.frame = document.querySelector("#frame");
        this.frameTitle = document.querySelector(".frame-title")
        this.sketchScript = document.querySelector("#sketch-script")
        this.fileSelect = document.querySelector("#file-select")

        this.start();
    }

    async start(){
        await this.getRepo();
        await this.getSketchFolder();
        await this.getCodeSelect(localStorage.getItem("sketch"))
        await this.getModelFolder();

        this.frameController = new FrameController(this.frame, this.sketchFolder)
        this.setCodeFile();
        this.setFileOption();
        this.setCode();
        this.setTitle();
    }

    //content-code
    setTitle(){
        document.title = this.repoName
        this.frameTitle.textContent = this.repoName
    }
    
    setCode(){
        document.querySelector("#code-content").textContent = this.code;

        //highlight code
        hljs.highlightAll(); 
        hljs.initLineNumbersOnLoad();
    }

    setFileOption(){
        const template = document.querySelector("#code-title-template");
        for (let i = 0; i < this.modelFolder.length; i++) {

            let x = template.content.cloneNode(true);
            let option = x.querySelector(".code-title")
            
            option.textContent = this.modelFolder[i].name
            option.value = this.modelFolder[i].path

            this.fileSelect.append(option)
        }
    }

    setCodeFile(){
        const codeTitle = document.querySelector(".code-title");
        codeTitle.textContent = document.querySelector("#first-option").textContent
        codeTitle.value = document.querySelector("#first-option").value

        this.fileSelect.addEventListener("change", async () => {
            console.log(this.fileSelect.value)
            await this.getCodeSelect(this.fileSelect.value)
            this.setCode()
        });
    }

    //routes
    async getModelFolder(){
        const url = "https://api.github.com/repos/Vraagtekens/" + this.repoName + "/contents/models"
        const response = await fetch(url)
        const result = await response.json()
    
        this.modelFolder = result;
    }

    async getCode(){
        var xd = await $.get(localStorage.getItem("sketch"));
        this.code = xd
    }

    async getCodeSelect(path){
        var xd = await $.get(path);
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
    }


}
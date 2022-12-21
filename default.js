
window.onload = async function() {
    await getRepo()

    await getRepoFile()
};

async function getRepo(){
    const url = "https://api.github.com/repos/Vraagtekens/p5-4/contents"
    const response = await fetch(url)
    const result = await response.json()

    console.log(result)
}

async function getRepoFile(){
    const url = "https://raw.githubusercontent.com/Vraagtekens/p5-4/main/index.html"
    const response = await fetch(url);
    const result = await response;

    console.log(response)
    console.log(result)
    document.querySelector(".test").innerHTML = await result
}

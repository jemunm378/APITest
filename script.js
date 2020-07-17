fetch("https://cors-anywhere.herokuapp.com/https://api.scratch.mit.edu/proxy/featured")
.then(res => res.json())
.then(text => {
    const parser = new DOMParser();
    const htmlDocument = parser.parseFromString(text, "text/html");
    const section = htmlDocument.documentElement.querySelector("section");
    document.querySelector("div").appendChild(section);
.then((data) => {document.write(JSON.stringify(data))})

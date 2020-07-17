fetch("https://cors-anywhere.herokuapp.com/https://api.scratch.mit.edu/news").then(res => res.json()).then((data) => {document.write(JSON.stringify(data))})

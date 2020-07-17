fetch("https://cors-anywhere.herokuapp.com/https://api.scratch.mit.edu/proxy/featured").then(res => res.json()).then((data) => {document.write(JSON.stringify(data))})

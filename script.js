fetch("https://cors-anywhere.herokuapp.com/https://scratch.mit.edu/site-api/comments/user/winter58/").then(res => res.json()).then((data) => {document.write(JSON.stringify(data))})

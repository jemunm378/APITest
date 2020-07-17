fetch("https://cors-anywhere.herokuapp.com/https://scratch.mit.edu/messages/ajax/get-message-count/").then(res => res.json()).then((data) => {document.write(JSON.stringify(data))})

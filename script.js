fetch("https://scratchdb.lefty.one/v2/project/info/id/1000").then(res => res.json()).then((data) => {document.write(JSON.stringify(data))})

fetch("https://scratchdb.lefty.one/v2/user/info/jemunm").then(res => res.json()).then((data) => { document.write(data.followers); });

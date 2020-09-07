fetch("https://scratchdb.lefty.one/v2/project/info/id/13727").then(res => res.json()).then((data) => { document.getElementById("test1").innerHTML = "test1" + data.title; });

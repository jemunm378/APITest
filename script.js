fetch("https://scratchdb.lefty.one/v2/project/info/id/13727").then(res => res.json()).then((data) => { document.getElementById("Title:").innerHTML = "Title:" + data.title; });
fetch("https://scratchdb.lefty.one/v2/project/info/id/13727").then(res => res.json()).then((data) => { document.getElementById("Description:").innerHTML = "Description:" + data.description; });

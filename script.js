fetch("https://scratchdb.lefty.one/v2/project/info/id/13727").then(res => res.json()).then((data) => { document.getElementById("Title:").innerhtml = "Title:" + data.title; });
<iframe src="https://forkphorus.github.io/embed.html?id=13727&auto-start=true&light-content=false" width="482" height="393" allowfullscreen="true" allowtransparency="true" style="border:none;"></iframe>

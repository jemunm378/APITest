fetch("https://scratchdb.lefty.one/v2/user/info/jemunm").then(res => res.json()).then((data) => { document.getElementById("following:").innerHTML = "following:" + data.following; });

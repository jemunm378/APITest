fetch("https://scratchdb.lefty.one/v2/user/info/jemunm").then(res => res.json()).then((data) => { document.getElementById("test1").innerHTML = "test1" + data.following; });

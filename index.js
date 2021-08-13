const express = require("express");

const app = express();

app.use(express.static("./static"));

app.set('view engine', 'ejs'); 

const users = [
    {
        id: "spdblx",
        firstName: "Matthew",
        lastName: "Sargent",
        email: "user@site.co.uk",
        password: "somestupidfakepasswordlmao",
        pfp: "https://cdn.glitch.com/156fb39e-f058-4c13-9fda-970d6472ba0e%2Fspdblx_pfp_v2.png?v=1624148342148",
        banner: "https://cdn.glitch.com/156fb39e-f058-4c13-9fda-970d6472ba0e%2FDSC00444.JPG?v=1626873611735",
        about: "Hey there! I'm Speedblocks, a graphic designer and front-end web developer based in Maine. <a href='https://spdblx.glitch.me/'>https://spdblx.glitch.me</a>"        
    },
    {
        id: "amogus",
        firstName: "Sus",
        lastName: "Imposter",
        email: "user@site.co.uk",
        password: "@dripCity4269",
        pfp: "https://api.mcpedl.com/storage/submissions/109757/images/amogus-the-sus-lord_2.png",
        banner: "https://images.squarespace-cdn.com/content/v1/5a96f6b1372b966da314fbbb/1607647550526-PU6TNDSYRPMFGCPXZSSS/among-us-banner.jpg?format=2500w",
        about: "amogus sussy imposter drippy drip sussy baka very sus 😳 😳 😳 😳 😳"
    }
]

app.get("/profile/:id", (req, res) => {
    const { id } = req.params;

    const match = users.find(user => user.id == id);

    if(match) {
        res.render("profile", { ...match });
    } else {
        res.send("<h1>User not found</h1>");
    }
})

app.listen(3000, () => {
    console.log("http://127.0.0.1:3000")
})
// alert("Test");

function Youtube() {
    document.getElementById("YouTube").style.backgroundImage = "url('https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg')"
    document.getElementById("YouTube").style.color = "transparent"
}

function YoutubeLeave() {
    document.getElementById("YouTube").style.backgroundImage = "none"
    document.getElementById("YouTube").style.color = "white" 
}

function Twitch() {
    document.getElementById("Twitch").style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/3/3f/Twitch_Logo.jpg')"
    document.getElementById("Twitch").style.color = "transparent"
}

function TwitchLeave() {
    document.getElementById("Twitch").style.backgroundImage = "none"
    document.getElementById("Twitch").style.color = "white"
}

function Twitter() {
    document.getElementById("Twitter").style.backgroundImage = "url('https://education.howthemarketworks.com/wp-content/uploads/2019/04/twitter-logo.png')"
    document.getElementById("Twitter").style.color = "transparent"
}

function TwitterLeave() {
    document.getElementById("Twitter").style.backgroundImage = "none"
    document.getElementById("Twitter").style.color = "white"
}

function Valorant() {
    document.getElementById("Valorant").style.backgroundImage = "url('https://prod.assets.earlygamecdn.com/images/Valorant-Logo_2021-09-17-094641_jsqj.png')"
    document.getElementById("Valorant").style.color = "transparent"
}

function ValorantLeave() {
    document.getElementById("Valorant").style.backgroundImage = "none"
    document.getElementById("Valorant").style.color = "white"
}

function Speedrun() {
    document.getElementById("Speedrun").style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Speedrun.com_text_logo.svg/2560px-Speedrun.com_text_logo.svg.png')"
    document.getElementById("Speedrun").style.color = "transparent"
}

function SpeedrunLeave() {
    document.getElementById("Speedrun").style.backgroundImage = "none"
    document.getElementById("Speedrun").style.color = "white"
}

function Pointer(e) {
    let x = e.clientX;
    let y = e.clientY;

    document.getElementById("pointer").style.top = y + "px"
    document.getElementById("pointer").style.left = x + "px"
    //alert("Mouse Moved!")

}

function test() {
    document.getElementById("button").style.display = "none"
    document.getElementById("yt-bg").style.display = "block"
    document.getElementById("container").style.display = "block"
    document.getElementById("Button-1").style.backgroundColor = "transparent"
    document.getElementById("Button-2").style.backgroundColor = "transparent"
}
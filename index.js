
document.getElementById("activity-click").addEventListener("click" ,function(){
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById("bot-feeling").textContent = "😝HAPPY BOT😝"
        document.getElementById("activity-name").textContent = data.activity
        document.body.classList.add("fun")
    })
})

import "../css/style.css";

const divs = document.getElementsByTagName("div");

for (let index = 0; index < divs.length; index++) {
    const element = divs[index];
    element.addEventListener("click", (ev) => {
        document.getElementById("result").textContent = `vous avez cliquer sur ${ev.target.id}`
    })
}
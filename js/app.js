import "../css/style.css";

const divs = document.getElementsByTagName("div");
const result = document.getElementById("result");
let prevColor = null;

for (let index = 0; index < divs.length; index++) {
    const element = divs[index];
    element.addEventListener("click", (ev) => {
        if (prevColor === ev.target.id) { 
            result.textContent = "Vous ne pouvez pas cliquer sur le même carré Veuillez cliquer sur un carré"
        console.log(prevColor === ev.target.id);
        }else {
        result.textContent = `vous avez cliquer sur ${ev.target.id}`
        prevColor = ev.target.id
        }
    })
}
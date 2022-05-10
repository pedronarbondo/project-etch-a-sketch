let container = document.querySelector(".grid-container");

function createGrid(amount){
    for (let rows = 0; rows < amount; rows++){
        for (let columns = 0; columns < amount; columns++) {
            let babyGrid = document.createElement("div");
            let proportion = 960/amount + "px"
            babyGrid.style.width = `${proportion}`
            babyGrid.style.height = `${proportion}`
            babyGrid.classList.add("babyGrid");
            container.appendChild(babyGrid);
            
            
        }
    } 
}


function letsPaint(amount){
createGrid(amount);
let innerDivs = document.querySelectorAll(".babyGrid");
innerDivs.forEach(babyDiv => babyDiv.addEventListener('mouseover', () => babyDiv.style.backgroundColor = "black"));
let newGridBtn = document.querySelector("button");
newGridBtn.addEventListener ("click", () => 
    innerDivs.forEach(babyDiv => babyDiv.style.backgroundColor = "lightgray"))
}

let slider = document.querySelector("input");
slider.addEventListener("mouseup", () => {
    container.innerHTML ="";
    letsPaint(slider.value);
});
    
letsPaint(16);
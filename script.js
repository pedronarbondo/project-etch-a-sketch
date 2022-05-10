let container = document.querySelector(".grid-container");

function createGrid(amount){
    for (let rows = 0; rows < amount; rows++){
        for (let columns = 0; columns < amount; columns++) {
            let babyGrid = document.createElement("div");
            let proportion = 960/amount + "px"
            console.log(proportion);
            babyGrid.style.width = `${proportion}`
            babyGrid.style.height = `${proportion}`
            babyGrid.classList.add("babyGrid");
            container.appendChild(babyGrid);
            
            
        }
    } 
}

createGrid(10)
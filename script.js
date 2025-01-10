const container = document.querySelector("#container");

function createGrid(size = 16){
    for(let i = 0; i < size; i++)
        {
            const row = document.createElement("div"); //Acts as its own row container
            for(let j = 0; j < size; j++)
            {
                const square = document.createElement("div");
                square.setAttribute("style", "width: 50px; height: 50px")
                square.style.borderStyle= "solid";
                square.style.borderColor ="black";
                row.appendChild(square);
            }
            container.appendChild(row);
        }
}

function removeGrid(){
    while(container.firstElementChild){
        container.removeChild(container.firstElementChild);
    }
}


//Grid color changes
container.addEventListener("mousemove", (e) => {
    e.target.style.background = "black";
})

function changeSize(){
    let size = prompt("Please enter the size for the grid:")
    if(Number.isInteger(Number(size)))
    {
        removeGrid();
        return createGrid(Number(size))
    }
    else
    {
        return -1
    }
}

//!Pass in user input after button click into the createGrid fucntion
createGrid();
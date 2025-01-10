const container = document.querySelector("#container");

for(let i = 0; i < 16; i++)
{
    const row = document.createElement("div"); //Acts as its own row container
    for(let j = 0; j < 16; j++)
    {
        const square = document.createElement("div");
        square.setAttribute("style", "width: 50px; height: 50px")
        square.style.borderStyle= "solid";
        square.style.borderColor ="black";
        row.appendChild(square);
    }
    container.appendChild(row);
}
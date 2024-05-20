document.addEventListener("DOMContentLoaded", ()=>{



for(m of mountainsArray){
    mountainSelect.appendChild(option(m.name));
}

function showMountain(){
    const m = mountainsArray[mountainSelect.selectedIndex];
    mountainResults.innerHTML = `
    <img alt="mountain" src="../images/${m.img}">
    <br>
    Name: ${m.name}
    <br>
    Elevation: ${m.elevation}
    <br>
    Effort: ${m.effort}
    <br>
    Lattitude/Longitude: (${m.coords.lat}, ${m.coords.lng})
    <br>
    ${m.desc}
    `
} 

mountainSelect.addEventListener("change", showMountain);

showMountain();
}) //END LOADED
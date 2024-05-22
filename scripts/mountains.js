document.addEventListener("DOMContentLoaded", () => {

    // function that can "fetch" the sunrise/sunset times
    async function getSunsetForMountain(lat, lng) {
        let response = await fetch(
            `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`);
        let data = await response.json();
        return data;
    }


    for (m of mountainsArray) {
        mountainSelect.appendChild(option(m.name));
    }

    async function showMountain() {
        const m = mountainsArray[mountainSelect.selectedIndex];
        mountainResults.innerHTML = `
    <img class="mountainImage" alt="mountain" src="../images/${m.img}">
    <br>
    <br>
    <h3>${m.name}</h3>
    <br>
    <h5>Elevation: ${m.elevation} ft.
    <br>
    Effort: ${m.effort}
    <br>
    Lattitude/Longitude: (${m.coords.lat}, ${m.coords.lng})
    </h5>
    <br>
    <p class="desc">${m.desc}</p>
    `
        const sunData = await getSunsetForMountain(m.coords.lat, m.coords.lng);
        mountainResults.innerHTML += ` 
    <p class="desc"> Sunrise:${sunData.results.sunrise}
    <br>
        Sunset:${sunData.results.sunset}</p>`
    }

    mountainSelect.addEventListener("change", showMountain);
    showMountain();
    
}) //END LOADED
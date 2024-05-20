document.addEventListener("DOMContentLoaded", () => {

    function getPark(park) {
        const element = document.createElement("div");
        element.classList.add("park");
        element.className = "arvo-regular-table";
        element.innerHTML = `
            <table><tr>${park.LocationName}</tr><table>
        `;
        return element;
    }

    function showResults() {
        content.innerHTML = ''; // Clear previous results
        let filtered = [];
        if (locationRadio.checked) {
            filtered = nationalParksArray.filter(o => {
                return o.State.toUpperCase() === locations.value.toUpperCase();
            });
        } else {
            filtered = nationalParksArray.filter(o => {
                return o.LocationName.includes(parkType.value);
            })
        }
        filtered.forEach(o => content.appendChild(getPark(o)));
    }

    locations.addEventListener("change", showResults);
    parkType.addEventListener("change", showResults);

    parkTypeLabel.style.display = "none";

    function handleSearchBy() {
        content.innerHTML = "";
        if (locationRadio.checked) {
            locationLabel.style.display = "block";
            parkTypeLabel.style.display = "none";
        } else {
            locationLabel.style.display = "none";
            parkTypeLabel.style.display = "block";
        }
        showResults();
    }

    locationRadio.addEventListener("click", handleSearchBy);
    parkTypeRadio.addEventListener("click", handleSearchBy);

    locationsArray.map(option).forEach(oe => locations.appendChild(oe));
    parkTypesArray.map(option).forEach(oe => parkType.appendChild(oe));

    //Show results on startup
    showResults();

}); // END CONTENT LOADED

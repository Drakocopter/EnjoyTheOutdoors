document.addEventListener("DOMContentLoaded", () => {
    function getPark(park) {
        const element = document.createElement("div");
        element.classList.add("park");
        element.className = "arvo-regular-parktable";
        element.innerHTML = `
            <table>
                <thead>
                    <tr><td>${park.LocationName}</td></tr>
                </thead>
                <tbody>
                ${park.Address && park.Address.length > 0 ? `<tr><td>${park.Address}</td></tr>` : ''}
                    <tr><td>${park.City}, ${park.State}${park.ZipCode > 0 ? `, ${park.ZipCode}` : ''}</td></tr>
                    ${park.Phone && park.Phone.length > 0 ? `<tr><td>Phone Number: ${park.Phone}</td></tr>` : ''}
                    ${park.Fax && park.Fax.length > 0 ? `<tr><td>Fax: ${park.Fax}</td></tr>` : ''}
                    ${park.Visit && park.Visit.length > 0 ? `<tr><td>Website: <a class="website" href="${park.Visit}" target="_blank" rel="noopener noreferrer">${park.Visit}</a></td></tr>` : ''}
                    <tr><td>Latitude / Longitude: ${park.Latitude}, ${park.Longitude}</td></tr>
                </tbody>
            </table>
            
        `;
        return element;
    }

    function showResults() {
        content.innerHTML = ''; // Clear previous results
        let filtered = [];
        if (locationRadio.checked) {
            filtered = nationalParksArray.filter(o => o.State.toUpperCase() === locations.value.toUpperCase());
        } else if (parkTypeRadio.checked) {
            filtered = nationalParksArray.filter(o => o.LocationName.includes(parkType.value));
        } else {
            filtered = nationalParksArray
        }
        filtered.forEach(o => content.appendChild(getPark(o)));
        if (filtered.length == 0){
            content.innerHTML = `<h2 class="arvo-regular">No Results Found :(</h2>`
        }
    }

    locations.addEventListener("change", showResults);
    parkType.addEventListener("change", showResults);

    parkTypeLabel.style.display = "none";

    function handleSearchBy() {
        content.innerHTML = "";
        if (locationRadio.checked) {
            locationLabel.style.display = "block";
            parkTypeLabel.style.display = "none";
        } else if (parkTypeRadio.checked) {
            locationLabel.style.display = "none";
            parkTypeLabel.style.display = "block";
        } else {
            locationLabel.style.display = "none";
            parkTypeLabel.style.display = "none";
        }
        showResults();
    }

    locationRadio.addEventListener("click", handleSearchBy);
    parkTypeRadio.addEventListener("click", handleSearchBy);
    allParksRadio.addEventListener("click", handleSearchBy)

    locationsArray.map(option).forEach(oe => locations.appendChild(oe));
    parkTypesArray.map(option).forEach(oe => parkType.appendChild(oe));

    // Show results on startup
    showResults();
}); // END CONTENT LOADED

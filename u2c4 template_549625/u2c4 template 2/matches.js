// write js code here corresponding to matches.html
var allMatches = JSON.parse(localStorage.getItem("schedule"));
displayData(allMatches);
function displayData(arr) {
    document.querySelector("tbody").innerHTML = "";
    arr.forEach(function (elem) {
        var row = document.createElement("tr");
        var column1 = document.createElement("td");
        column1.innerText = elem.matchNumber;
        var column2 = document.createElement("td");
        column2.innerText = elem.teamA;
        var column3 = document.createElement("td");
        column3.innerText = elem.teamB;
        var column4 = document.createElement("td");
        column4.innerText = elem.date;
        var column5 = document.createElement("td");
        column5.innerText = elem.venue;
        var column6 = document.createElement("td");
        column6.innerText = "Add as Favourites";
        column6.addEventListener("click", function () {
            clickedFavourites(elem);
        });
        row.append(column1, column2, column3, column4, column5, column6);
        document.querySelector("tbody").append(row);
    })
}



document.querySelector("#filterVenue").addEventListener("change", venueChange);
function venueChange() {
    var selected = document.querySelector("#filterVenue").value;
    if (selected == "none") {
        displayData(allMatches);
    } else {
        var venueFiltered = allMatches.filter(function (elem) {
            return elem.venue == selected;
        })
        displayData(venueFiltered);
    }
}




function clickedFavourites(elem) {
    var favouritesData = JSON.parse(localStorage.getItem("favourites")) || [];
    var filteredData = favouritesData.filter(function (item) {
        return elem.matchNumber == item.matchNumber;
    });
    if (filteredData.length > 0) {
        alert("Match Already Added to Favourites");
    } else {
        favouritesData.push(elem);
        localStorage.setItem("favourites", JSON.stringify(favouritesData));
        window.location.href = "favourites.html";
    }
}


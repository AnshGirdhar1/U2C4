// write js code here corresponding to favourites.html

var newData = JSON.parse(localStorage.getItem("favourites"));
console.log(newData);
displayData(newData);

function displayData(arr) {
    arr.forEach(function (elem, index) {
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
        column6.innerText = "Delete";
        column6.addEventListener("click", function () {
            clickedDeleted(index);
        });
        row.append(column1, column2, column3, column4, column5, column6);
        document.querySelector("tbody").append(row);
    })
}

function clickedDeleted(index) {
    newData.splice(index, 1);
    localStorage.setItem("favourites", JSON.stringify(newData));
    window.location.reload();
}
// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit", formSubmit);

var formData = JSON.parse(localStorage.getItem("schedule")) || [];
console.log(formData);
function formSubmit() {
    event.preventDefault();
    var singleMatch = {
        matchNumber: masaiForm.matchNum.value,
        teamA: masaiForm.teamA.value,
        teamB: masaiForm.teamB.value,
        date: masaiForm.date.value,
        venue: masaiForm.venue.value
    };
    formData.push(singleMatch);
    localStorage.setItem("schedule", JSON.stringify(formData));
    window.location.href = "matches.html";
}

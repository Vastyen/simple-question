
const yes = document.getElementById("yes");
const no = document.getElementById("no");



yes.addEventListener('mouseover', (event) => {
    yes.innerText = "Yes";
    no.innerText = "No";

});


no.addEventListener('mouseover', (event) => {

    yes.innerText = "No";
    no.innerText = "Yes";

});

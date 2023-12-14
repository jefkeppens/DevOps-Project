// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
// Add this script to your Index.cshtml or include it in a separate JavaScript file

document.addEventListener('DOMContentLoaded', function () {
    const partTypeSelect = document.getElementById('partType');
    const div = document.getElementsByClassName("container");
    const sections = div[0].getElementsByTagName('section');

    const applyFilter = (computerParts) => {
        const showItem = document.getElementsByClassName(partTypeSelect.value)
        for (let i = 0; i < sections.length; i++) {
            sections[i].classList.add("hide");
            if (partTypeSelect.value === "All") {
                sections[i].classList.remove("hide");
            }
        }

        for (let i = 0; i < showItem.length; i++) {
            showItem[i].classList.remove("hide");
        }
    };



    applyFilter();

    partTypeSelect.addEventListener('change', applyFilter);
});

const div = document.getElementsByClassName("container");
const sections = div[0].getElementsByTagName('section');


function searchFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    for (i = 0; i < sections.length; i++) {
        h2 = sections[i].getElementsByTagName("h2")[0];
        txtValue = h2.textContent || h2.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            sections[i].style.display = "";
        } else {
            sections[i].style.display = "none";
        }
    }
}
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
    const input = document.getElementById("myInput");
    const filter = input.value.toUpperCase();
    for (let i = 0; i < sections.length; i++) {
        const h2 = sections[i].getElementsByTagName("h2")[0];
        const txtValue = h2.textContent || h2.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            sections[i].style.display = "";
        } else {
            sections[i].style.display = "none";
        }
    }
}
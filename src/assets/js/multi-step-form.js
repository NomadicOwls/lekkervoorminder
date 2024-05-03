import TomSelect from "tom-select";
import "tom-select/dist/css/tom-select.css";
import "./../css/tom-select.scss";

var config = {};
new TomSelect("#preferred_services", config);

function showNext() {
    document.getElementById("step-1").classList.add("hidden");
    document.getElementById("step-2").classList.remove("hidden");
    document.getElementById("step-1-indicator").classList.remove("bg-blue-500","text-white");
    document.getElementById("step-1-indicator").classList.add("border-b-2",);
    document.getElementById("step-2-indicator").classList.add("bg-blue-500", "border-b-2", "text-white");
}

function showPrevious() {
    document.getElementById("step-2").classList.add("hidden");
    document.getElementById("step-1").classList.remove("hidden");
    document.getElementById("step-1-indicator").classList.add("bg-blue-500","text-white");
    document.getElementById("step-2-indicator").classList.remove("bg-blue-500", "border-b-2", "border-indigo-500","text-white");
    document.getElementById("step-2-indicator").classList.add("border-b-2");
}

document.addEventListener("DOMContentLoaded", function (event) {
    const form = document.querySelector("#form");

    form.addEventListener("input", (event) => {
        form.querySelector('#formtitle').classList.add('hidden');
        form.querySelector('#formindicator').classList.remove('hidden');
    });

    document.querySelector("#next-btn").addEventListener("click", showNext);
    document.querySelector("#prev-btn").addEventListener("click", showPrevious);
});

const emailButton = document.getElementById("emailbut")
emailButton.addEventListener("click", (e) => {
    copyCode()
})

const copyCode = () => {
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = "nrhtome@gmail.com"
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
}

const dropdownBg = document.querySelector(".dropdown-bg")

Array.from(document.querySelectorAll(".nav-item"))
.forEach(item => {
    const lastChild = item.lastElementChild;
    item.onmouseover = () => {
        dropdownBg.style.opacity = "1";
        dropdownBg.style.visibility = "visible";

        dropdownBg.style.width = getComputedStyle(lastChild).width;
        dropdownBg.style.height = getComputedStyle(lastChild).height;

        dropdownBg.style.left = lastChild.offsetLeft + "px";
        dropdownBg.style.top = lastChild.offsetTop + "px";
    };

    item.onmouseout = () => {
        dropdownBg.style.opacity = "0";
        dropdownBg.style.visibility = "hidden";
    };
})

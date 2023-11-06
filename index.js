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
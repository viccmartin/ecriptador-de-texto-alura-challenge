const textToEncrypt = document.getElementById("textToEncrypt")
const textEncrypted = document.getElementById("textEncrypted")
const asideEmpty = document.querySelector(".aside__display--empty")
const asideContent = document.querySelector(".aside__display--content")
const btnEncrypt = document.getElementById('encrypt')
const btnDecrypt = document.getElementById('decrypt')
const btnCopy = document.getElementById('copy')

const encryptText = () => {
    let text = textToEncrypt.value
    if (text === "") console.log('error')

    // La letra "e" es convertida para "enter"
    // La letra "i" es convertida para "imes"
    // La letra "a" es convertida para "ai"
    // La letra "o" es convertida para "ober"
    // La letra "u" es convertida para "ufat"
    asideEmpty.classList.add("hide")
    asideContent.classList.remove("hide")
    textEncrypted.innerText = text.toLowerCase().replaceAll("e", "enter").replaceAll('i', 'imes').replaceAll("a", "ai").replaceAll("o", 'ober').replaceAll("u", 'ufat')
    textToEncrypt.value = ""
}
const decryptText = () => {
    let text = textToEncrypt.value
    if (text === "") console.log('error')
    asideEmpty.classList.add("hide")
    asideContent.classList.remove("hide")
    textEncrypted.innerText = text.toLowerCase().replaceAll("enter", "e").replaceAll('imes', 'i').replaceAll("ai", "a").replaceAll("ober", "o").replaceAll('ufat', "u")
    textToEncrypt.value = ""
}
const copyContent = async () => {
    try {
        await navigator.clipboard.writeText(textEncrypted.innerText);
        console.log('Contenido copiado al portapapeles');
    } catch (err) {
        console.error('Error al copiar: ', err);
    }
}

btnEncrypt.addEventListener("click", encryptText)
btnDecrypt.addEventListener("click", decryptText)
btnCopy.addEventListener("click", copyContent)

let func = (img) => {
    let div = document.createElement("div")
    div.className="img"
    div.innerHTML = `<div>
                     <img src="./img/${img}">
                     </div>
    `
    return div
}

export { func }

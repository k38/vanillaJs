window.addEventListener("load", ()=>{
    const button = document.querySelector("button");
    button.addEventListener("click", start);
});

function start() {
    const items = document.querySelector(".items");
    for ( let i=0 ; i<number ; i++ ) {
        const span = createSpan(i * 0.1);
        items.appendChild(span);
    }
}

function createSpan(delay) {
    let span = document.createElement("span");
    span = setStyles(span, {
        display: "inline-block",
        transformOrigin: "center center",
        width: "20px",
        height: "20px",
        background: "green",
        opacity: "0",
        animation: `fadein 0.3s ease-in ${delay}s 1 normal forwards`,
    });
    return span;
}

function setStyles(elem, attr) {
    for(let key in attr) {
        elem.style[key] = attr[key];
    }
    return elem;
}
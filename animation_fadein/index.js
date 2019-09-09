window.addEventListener("load", ()=>{
    const button = document.querySelector("button");
    button.addEventListener("click", start);
});

function start() {
    const items = document.querySelector(".items");
    for ( let j=0 ; j<number ; j++ ) {
        const div = document.createElement("div");
        for ( let i=0 ; i<50 ; i++ ) {
            const span = createSpan(i, j);
            div.appendChild(span);
        }
        items.appendChild(div);
    }
}

function createSpan(i, j) {
    const b = j * 0.1;
    const a = 1.0 - b;
    const delay = a * ( i / 50 ) + b;
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
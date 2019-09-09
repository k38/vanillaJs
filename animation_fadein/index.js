window.addEventListener("load", ()=>{
    const button = document.querySelector("button");
    button.addEventListener("click", start);
});

function start() {
    const items = document.createElement("div");
    items.classList.add(".items");
    for ( let j=0 ; j<number ; j++ ) {
        const div = document.createElement("div");
        const b = j * 0.1;
        const a = 1.0 - b;
        for ( let i=0 ; i<50 ; i++ ) {
            const span = createSpan(i, j, a, b);
            div.appendChild(span);
        }
        items.appendChild(div);
    }
    document.querySelector("body").appendChild(items);
}

function createSpan(i, j, a, b) {
    const delay = Math.round( ( a * i * i / 2500 + b ) * 10 ) / 10;
    console.log(delay);
    let span = document.createElement("span");
    span = setStyles(span, {
        display: "inline-block",
        transformOrigin: "center center",
        width: "20px",
        height: "20px",
        background: "green",
        opacity: "0",
        animation: `fadein 0.3s cubic-bezier(0.4, 0.0, 0.2, 1.0) ${delay}s 1 normal forwards`,
    });
    return span;
}

function setStyles(elem, attr) {
    for(let key in attr) {
        elem.style[key] = attr[key];
    }
    return elem;
}
// @ts-check
let elem;

window.addEventListener("DOMContentLoaded", ()=>{
    elem = document.querySelector("img-360");
    // setSize(elem);

    // setTimeout(_=>{
    //     console.log("setTimeout");
    //     // const btn = document.querySelector("img-360::shadow div button");
    //     // const btn = document.querySelector("::shadow");
    //     const btn = document.querySelector("img-360");
    //     // const btn = document.querySelector("button");
    //     console.log(btn);
    // }, 3000);
});

// window.addEventListener("resize", ()=>{
//     setSize(elem);
// });

function setSize(elem) {
    elem.setAttribute("width", `${window.innerWidth}`);
    elem.setAttribute("height", `300`);
}
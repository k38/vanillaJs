document.addEventListener('DOMContentLoaded', DOMContentLoaded);

function DOMContentLoaded(){
    var sound = new Howl({
        src: ["sound.mp3"],
        sprite: {
            bg: [0, (4*60 + 25) * 1000, true],
            focus: [(4*60 + 29.5) * 1000, 1 * 1000],
            collision: [(4*60 + 34) * 1000, 1 * 1000],
            clear: [(4*60 + 39) * 1000, 2 * 1000],
        }
    });
    document.querySelectorAll("button").forEach(_ => {
        _.addEventListener("click", (e) => {
            console.log(e.target.id);
            sound.play(e.target.id);
        });
    });
}

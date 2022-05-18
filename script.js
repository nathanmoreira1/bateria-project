document.body.addEventListener("keyup",(event)=>{
    /* event.code identifica a tecla que foi apertada no teclado */
    playSound(event.code.toLocaleLowerCase());
});

document.querySelector(".composer button").addEventListener("click", ()=>{
    let song = document.querySelector("#input").value;

    if(song !== '') {
        let song_array = song.split(''); //Isso separa cada letra da string "song" em partes de um array
        playComposition(song_array);
    }
});

playSound = (sound) => {
    let audioElement = document.querySelector(`#s_${sound}`)
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)

    if(audioElement) {
        audioElement.currentTime = 0; /* Isso reinicia o audio */
        audioElement.play(); //A função nativa "play()" faz um audio tocar
    }

    if(keyElement) {
        keyElement.classList.add("active");

        setTimeout(()=>{
            keyElement.classList.remove("active");
        },300)
    }
}

playComposition = (song_array) => {
    let wait = 0;

    for(let i of song_array) {
        setTimeout(()=>{
            playSound(`key${i}`)
        },wait)
        wait += 250;
    }
}
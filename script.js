const cover = document.querySelector(".card-image");
const title = document.querySelector(".card-content h5");
const artist = document.querySelector(".artist");
const audio = document.querySelector("audio");

function stop(){
    audio.src = audio.ended
}

function send(){
    var cBox = document.getElementById("cBox")
    switch(cBox.value){
        case "0":
            if(confirm("Deseja executar?")){
                const data = {
                    title:"Slash - Apocalyptic Love ",
                    artist: "Slash",
                    cover: "files/Slash_img.jpg",
                    file: "files/Slash - Anastasia.mp3"
                };
                
                cover.style.background = `url('${data.cover}') no-repeat center center / cover`;
                title.innerText = data.title;
                artist.innerText = data.artist;
                audio.src = data.file;
            }
        break
        case "1":
            if(confirm("Deseja executar?")){
                const data = {
                    title:"Pantera - Cemetery Gates",
                    artist: "Pantera",
                    cover: "files/Pantera_img.jpg",
                    file: "files/Cementery Gates.mp3"
                };
                
                cover.style.background = `url('${data.cover}') no-repeat center center / cover`;
                title.innerText = data.title;
                artist.innerText = data.artist;
                audio.src = data.file;
            }
        break
        case "2":
            if(confirm("Deseja executar?")){
                const data = {
                    title:"Scorpions - Rock You Like Hurricane",
                    artist: "Scorpions",
                    cover: "files/Scorpions_img.jpg",
                    file: "files/Scorpions - Rock You Like a Hurricane.mp3"
                };
                
                cover.style.background = `url('${data.cover}') no-repeat center center / cover`;
                title.innerText = data.title;
                artist.innerText = data.artist;
                audio.src = data.file;
            }
        break
        case "3":
            if(confirm("Deseja executar?")){
                const data = {
                    title:"Dire Straits - Sultan of Swing",
                    artist: "Dire Straits",
                    cover: "files/Dire_Straits_img.jpg",
                    file: "files/Dire Straits - Sultan Of Swing.mp3"
                };
                
                cover.style.background = `url('${data.cover}') no-repeat center center / cover`;
                title.innerText = data.title;
                artist.innerText = data.artist;
                audio.src = data.file;
            }
        break
        case "4":
            if(confirm("Deseja executar?")){
                const data = {
                    title:"Steve Vai - For The Love Of God",
                    artist: "Steve Vai",
                    cover: "files/Steve_Vai_img.jpg",
                    file: "files/Steve Vai - For The Love Of God.mp3"
                };
                
                cover.style.background = `url('${data.cover}') no-repeat center center / cover`;
                title.innerText = data.title;
                artist.innerText = data.artist;
                audio.src = data.file;
            }
        break
        case "5":
            if(confirm("Deseja executar?")){
                const data = {
                    title:"Avenged Sevenfold - Cover Pantera",
                    artist: "Avenged Sevenfold",
                    cover: "files/Avenged_img.jpg",
                    file: "files/avenged_sevenfold_walk.mp3"
                };
                
                cover.style.background = `url('${data.cover}') no-repeat center center / cover`;
                title.innerText = data.title;
                artist.innerText = data.artist;
                audio.src = data.file;
            }
        break 
        case "":
            
        break  
    }
}
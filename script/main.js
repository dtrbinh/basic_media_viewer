function showSearchBox(e, x){
    e.preventDefault();
    let b = document.getElementById('video');
    let c = document.getElementById('music');
    switch (x) {
        case "Video":
            b.style.display = 'block';
            c.style.display = 'none';
            break;
        case "Music":
            b.style.display = 'none';
            c.style.display = 'block';
            break;
        default:
            break;
    }
}
function searchMusic(e,x){
    e.preventDefault();
    let def = "https://www.youtube.com/embed/"
    let link = def+x;
    document.getElementById('musicPlayer').src = link;
    console.log(link);
}

function searchVideo(e,x){
    e.preventDefault();
    let def = "https://www.youtube.com/embed/"
    let link = def+x;
    document.getElementById('videoPlayer').src = link;
    console.log(link);
}

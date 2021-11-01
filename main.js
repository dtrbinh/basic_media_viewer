function showSearchBox(x){
    let b = document.getElementById('video');
    let c = document.getElementById('music');
    switch (x) {
        case "Video":
            b.style.display = 'block';
            //c.style.display = 'none';
            break;
        case "Music":
            b.style.display = 'none';
            //c.style.display = 'block';
            break;
        default:
            break;
    }
}
var image_tracker = 'w';
function change_cell() {
    var image = document.getElementById('change_photo');
    if(image_tracker=='w') {
        image.src = "./img/instagram-black.png";
        image_tracker = 'b';
    } else {
        image.src = "./img/instagram-white.png";
        image_tracker = 'w';
    }
}


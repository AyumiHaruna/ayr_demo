//load src an load video modal
function modal_video_set( elm ){
    let player = document.getElementById("Modal_Video_Player");

    //set new src on the player
    player.src = elm.dataset.src;

    //show modal
    document.getElementsByClassName("Modal_Video")[0].style.display = 'block';
}

//close modal window and stop playing video
function close_modal_video() {
    let player = document.getElementById("Modal_Video_Player");

    //stop playing video (reset own src)
    player.src = player.src;

    //hide modal
    document.getElementsByClassName("Modal_Video")[0].style.display = 'none';
}
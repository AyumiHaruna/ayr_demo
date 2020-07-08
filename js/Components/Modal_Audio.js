// set source to audio modal
function modal_audio_set( elm ) { 
    //function from Sub_Player.js
    active_subPlayer_element( elm );

    //set some info variables
    let thumbnail = ( player_data[elm.dataset.list]['playList'][elm.dataset.track]['thumbnail'] !== '' )
                        ? player_data[elm.dataset.list]['playList'][elm.dataset.track]['thumbnail']
                        : 'img/audio_thumb.png' ;

    //create Modal view
    let toPrint = `
        <div class="row Modal_Audio">
            <div class="col-12 thumbnail">
                <img src="${thumbnail}" alt="thumbnail de la canción" />
            </div> 
            <div class="col-12 testPlayerBar">
                <audio controls crossorigin src="${elm.dataset.src}" style="display:none;"></audio> 
            </div>
            <div class="col-12 info">
                <span>${ player_data[elm.dataset.list]['playList'][elm.dataset.track]['songName'] }</span> <br>
                ${ player_data[elm.dataset.list]['playList'][elm.dataset.track]['artist'] }
            </div>
        </div>
    `;

    //insert view 
    document.getElementsByClassName(elm.dataset.target)[0].innerHTML = toPrint;

    // function from vendor/green_audio_player
    // generate cute player
    GreenAudioPlayer.init({
        selector: '.testPlayerBar',
        stopOthersOnPlay: true
    });
}

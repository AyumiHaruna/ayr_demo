//print "SuPlayer" on action window
function printSubPlayer( age, icon ) {

    var age = parseInt(age);
    let alreadyOneSelected = false;

    let toPrint = `
        <div class="col-12 Sub_Player_Container">
            <div class="row header">
                <div class="col-8 title">
                    <span>Reproductor</span>
                </div>         
                <div class="col-4 icon">
                    <img src="${icon}" alt="icono del reproductor" />   
                </div>
                <div class="secondBg"></div>
            </div>

            <div class="row playerList">
                <div class="col-sm-4 offset-sm-2 label">
                    Listas de Reproducción
                </div>
                <div class="col-sm-4 listForm">
                    <select class="Player_Select_Field" onChange="print_subPlayer_playList()">
            `;
           
                for (let i = 1; i <= Object.keys(player_data).length; i++) {    
                    if( player_data[i]["age"] === age ||
                        player_data[i]["age"] === 0 ) 
                    {
                        toPrint += `
                            <option value="${i}"> ${player_data[i]["name"]} </option>
                        `;

                        alreadyOneSelected = true;
                    }
                }

            toPrint += `  
                    </select>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-8 offset-sm-2 playerWrapper">
                    <div class="row">
                        <div class="col-sm-6 Player_Select_PlayList">
                        </div>

                        <div class="col-sm-6 Player_Select_Modal_Container">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    let action_window = document.getElementsByClassName("Index_Ventana_Accion")[0];
    action_window.innerHTML = toPrint;  

    //mark as selected, select first option
    document.getElementsByClassName("Player_Select_Field")[0].options[0].selected = true;

    //funcion in the same script
    print_subPlayer_playList();
}


//get selected playList and print list
function print_subPlayer_playList() {
    //clear player view
    document.getElementsByClassName('Player_Select_Modal_Container')[0].innerHTML = "";

    //set some variables
    let selected_field = document.getElementsByClassName("Player_Select_Field")[0] ; 
    let selected_value = selected_field.options[ selected_field.selectedIndex ].value;

    let toPrint = ``;

    for (let i = 1; i <= Object.keys(player_data[selected_value]["playList"]).length; i++) {    
        
        let action = ( player_data[selected_value]['playList'][i]['type'] === 'audio' ) 
                        ? `modal_audio_set(this)` 
                        : `modal_video_set(this)`;

        let type = ( player_data[selected_value]['playList'][i]['type'] === 'audio' ) 
                        ? `<i class="fas fa-music"></i>` 
                        : `<i class="fas fa-film"></i>`;

        toPrint += `
            <div 
                class="row list_Element"
                data-type="${player_data[selected_value]['playList'][i]['type']}"
                data-src="${player_data[selected_value]['playList'][i]['url']}" }
                data-list="${selected_value}"
                data-track="${i}"
                data-target="Player_Select_Modal_Container"
                onClick="${action}"
            >
                
                <div class="col-2 type">${type}</div>
                <div class="col-10 info">
                    <span>
                        ${player_data[selected_value]["playList"][i]["songName"]} 
                    </span> <br>
                    ${player_data[selected_value]["playList"][i]["artist"]}                        
                </div> 
           </div>
        `;
    }

    let action_window = document.getElementsByClassName("Player_Select_PlayList")[0];
    action_window.innerHTML = toPrint;  

    //for audio elements simulate click on first element to trigger "onClick" function
    let firstElement = document.getElementsByClassName("list_Element")[0];
    if(firstElement.dataset.type === 'audio'){
        firstElement.click();    
    }
}


//deactive all playList elements and active selected element
function active_subPlayer_element( elm ) {
    let elmList = Array.prototype.slice.call (
        document.getElementsByClassName('list_Element')
    );
    elmList.forEach( li => {
        li.classList.remove('active');
    });
        
    //active selected element
    elm.classList.add('active');
}

//generate buttons for "Index_Botonera_Acciones"
function generateActionButtons( age ) {
    // console.log(age);
    let selData = botones_accion_data[age]
    // console.log( selData );

    // change "Index_Botonera_Acciones" background
    let selWindow = document.getElementsByClassName('Index_Botonera_Acciones')[0];
    // selWindow.style.backgroundImage = `url( ${selData["background"]} )`;

    //generate list of buttons
    let toPrint = `
        <div class="col-12 action_button_wrapper">
            <div class="row justify-content-md-center">
    `;
    for (let i = 1; i <= Object.keys(selData.elements).length; i++) {        
        toPrint += `
            <div class="col-3">
                <div 
                    class="boton_accion" 
                    data-age="${age}"
                    data-target="${selData['elements'][i]['target']}"
                    data-icon="${selData['elements'][i]['icon']}"
                >
                    <img 
                        src="${selData['elements'][i]['icon']}" 
                        alt="boton de acción ${selData['elements'][i]['name']}"
                    />
                    
                    <div class="title"> ${selData['elements'][i]['name']} </div>
                </div>
            </div>   
        `;        
    }
    toPrint += `
            </div>
        </div>
    `;

    // name: ${selData['elements'][i]['name']} <br>
    // Infancia: (${age}) <br>
    // Icon: ${selData['elements'][i]['icon']} 

    selWindow.innerHTML = toPrint;

    //function from this script
    addEventListenerForBotonesAccion();
}

// add event listener for each printed "action button"
function addEventListenerForBotonesAccion() {
    //get all "botones_accion"
    let botones_accion = Array.prototype.slice.call
    (
        document.getElementsByClassName('boton_accion')
    );

    //add event listener for "botones accion"x
    botones_accion.forEach( (btn) => {
        btn.addEventListener("click", (elm) => {
            //function from Index_Ventana_Accion.js
            generateVentanaAccion( elm.currentTarget.dataset.age,
                                     elm.currentTarget.dataset.target,
                                     `${elm.currentTarget.dataset.icon}` );
        });
    });
}
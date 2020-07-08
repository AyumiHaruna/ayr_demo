//Get all "botones_infancias" buttons and store in array
const botones_infancias = Array.prototype.slice.call
(
    document.getElementsByClassName("Index_Botonera_Infancias")[0].
                            getElementsByClassName("Index_Infancias_btn_container")
);

// for each button add an event listener
botones_infancias.forEach(button => {
    button.addEventListener("click", ( elm ) => {
        // console.log( elm.target.dataset.target );

        //function from this script
        set_Index_Botonera_Infancia_activeBtn( elm );

        //function from - Index_Botonera_Acciones.js
        generateActionButtons( parseInt(elm.target.dataset.target) );
        
        //function from Index_Ventana_Acción.js
        generateVentanaAccion( elm.target.dataset.target, "apps", "img/index/Apps.png");
    });
});


function set_Index_Botonera_Infancia_activeBtn( elm ) {
    //function from this script
    clear_Index_Botonera_Infancia_activeBtns();
    
    elm.target.parentNode.classList.add("active")
}


//clear al "Index_Botonera_Infancias" active buttons 
function clear_Index_Botonera_Infancia_activeBtns(){
    botones_infancias.forEach( (btn) => {
        btn.classList.remove("active");
    });
}

//Make the DIV element draggagle:
dragElement(document.getElementById("move-arrow"));
console.log(document.getElementById("move-arrow"))
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    var width_container = document.getElementsByClassName("confirm__phone-number-form-body")[0].offsetWidth
    var width_icon_arrow = document.getElementsByClassName("confirm__phone-number-form-body-square")[0].offsetWidth
    var max_width_arrow = width_container - width_icon_arrow
    console.log(width_container)
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;


    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        console.log('pos3:', pos3, 'pos4:', pos4)
        console.log(document.getElementById("container").getBoundingClientRect().top)
        console.log(document.getElementById("container").getBoundingClientRect().left)
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();

        let temp = pos3
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        // elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        console.log('new', elmnt.offsetLeft - pos1)
        let margin_left =  elmnt.offsetLeft - pos1
        if (margin_left >= 0 && margin_left <= max_width_arrow){

            elmnt.style.left = (margin_left) + "px";
            if(margin_left ==max_width_arrow){
                e.stopPropagation()
                
                window.location.reload();
            }
        }

    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
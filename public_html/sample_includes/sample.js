/*
 * Sample JavaScript file
 */

/**
 * Creates a 128x128 pixel red box inside the element passed as the parent parameter
 * @param {type} parent a valid DOM container element
 * @returns {void}
 */
function addARedBox(parent){
    var box = document.createElement("div");
    box.style.width="128px";
    box.style.height="128px";
    box.style.backgroundColor="red";
    box.style.border="2px solid black";
    box.className="fancy";
    parent.appendChild(box);
    parent.onmouseover=null;
}
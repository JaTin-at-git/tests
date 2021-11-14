function createCheckBoxes(){
    var inputElement = document.createElement("div");
    inputElement.innerHTML=`<input type="checkbox" name="hamburger" id="hamburger" >`


    document.querySelector(".navbar__logo").appendChild(inputElement);
}

createCheckBoxes();
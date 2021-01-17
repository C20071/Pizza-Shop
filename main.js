var menu_list_array=["Chicken Tandoori Pizza","Veg Supreme Pizza","Panner Tikka Pizza","Deluxe Veggie Pizza","Veg Extravaganza Pizza"];

function getmenu(); {
    var htmldata;
    htmldata="<o1 class='menulist'>"
    menu_list_array.sort();
    for (let x = 0; x < menu_list_array.length; x++) {
    htmldata=htmldata+'<li>'+menu_list_array[x]+'</li>'        
    }
    htmldata=htmldata+'</o1>'
    document.getElementById("display_menu").innerHTML=htmldata;
}

function  add_item() {
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata="<section class='cards'>"
    for (let x = 0; x < menu_list_array.length; x++) {
        htmldata=htmldata+'<div class="card">' +'<img src="images/pizzaImg.png"/>'+'<div>'       
    }
    htmldata=htmldata+"</section>"
    document.getElementById("display_addedmenu").innerHTML=htmldata;
}
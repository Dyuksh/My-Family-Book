var imgArray = new Array();
 imgArray[0] = new Image();
 imgArray[0].src = 'father.jpg';
 imgArray[1] = new Image();
 imgArray[1].src = 'mother.jpg';
 imgArray[2] = new Image();
 imgArray[2].src = 'brohter.png';

 var cars = ["Father", "Mother", "Brother"];
var j = 0 ;
 function change() {
     document.getElementById("img1").src = imgArray[j].src;
     document.getElementById("lbl_name").innerHTML=cars[j];
     j++;
 }
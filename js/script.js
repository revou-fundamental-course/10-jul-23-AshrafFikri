var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];


function calculate(){
 
  if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
    modal.style.display = "block";
    modalText.innerHTML = `Masukan semua input`;

  }else{
    countBmi();
  }

}


function countBmi(){
  var p = [age.value, height.value, weight.value];
  if(male.checked){
    p.push("male");
  }else if(female.checked){
    p.push("female");
  }

  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
      
  var result = '';
  if(bmi<18.5){
    result = 'Kekurangan Berat Badan';
     }else if(18.5<=bmi&&bmi<=24.9){
    result = 'Normal(ideal)';
     }else if(25<=bmi&&bmi<=29.9){
    result = 'berat badan berlebih';
     }else if(30<=bmi&&bmi<=34.9){
    result = 'Kelebihan berat badan';
     }else if(35<=bmi){
    result = 'Kegemukan(obesitas)';
     }



resultArea.style.display = "block";
document.querySelector(".comment").innerHTML = `Anda memiliki berat badan <span id="comment">${result}</span>`;
document.querySelector("#result").innerHTML = bmi.toFixed(2);

}



// Saat pengguna mengklik <span> (x), tutup modal
span.onclick = function() {
  modal.style.display = "none";
}

// Saat pengguna mengklik di mana saja di luar modal, tutuplah
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

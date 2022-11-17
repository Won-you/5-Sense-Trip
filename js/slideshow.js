var slides=document.querySelectorAll("#slides >img");
var prev=document.getElementById("prev");
var next=document.getElementById("next");
var current=0;

showSlides(current);
prev.onclick=prevSlide;
next.onclick=nextSlide;

function showSlides(n){
  for(var i=0; i<slides.length; i++){
    slides[i].style.display="none"; /*모든 이미지를 화면에서 감춤*/
  }
  slides[n].style.display="block";
}
function prevSlide(){
  if(current >0) current-=1;
  else current= slides.length-1; /*이미지가 0이면 마지막 사진*/
  showSlides(current); /*이동한 위치의 이미지 표시*/
}
function nextSlide(){
  if(current <slides.length-1) current+=1;
  else current=0; /*첫번째 이미지로*/
  showSlides(current);
}
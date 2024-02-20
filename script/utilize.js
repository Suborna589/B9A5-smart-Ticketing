
function hideElementById(elementId){
    const element =document.getElementById(elementId);
    element.classList.add('hidden');


}  

function showElementById(elementId){
    const element=document.getElementById(elementId); 
    element.classList.remove('hidden');
} 

function  addBackgroundById(elementId){ 
    const element=document.getElementById(elementId);
    element.classList.add("bg-[#1DD100]");

}

function getRandomSelect(){
    const selectedString ="abcdefghij"; 
    const selects= selectedString.split(''); 


    const randomSelect =Math.random()*40;
    const index =Math.round(randomSelect);

    const seatNumber=selects[index];
 
    return seatNumber;
}

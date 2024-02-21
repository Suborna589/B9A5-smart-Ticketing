 
function seatSelect(){
    const seatNumber = getRandomSelect ();
        console.log(seatNumber);


const currentSelectSeat=document.getElementById("current-seat");
currentSelectSeat.innerText=seatNumber;
addBackgroundById(seatNumber);


}


function busTicket(){  
    hideElementById('banner-section');
    showElementById('select-seat-section');

}



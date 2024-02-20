

// function busTicket(){
//     const bannerSection=document.getElementById('banner-section'); 
//     bannerSection.classList.add('hidden');
        

//     const pariBahanSchdule=document.getElementById('paribahan-schedule');
//     pariBahanSchdule.classList.remove('hidden');

//     const busScheuleSection=document.getElementById('bus-schedule');
//     busScheuleSection.classList.remove('hidden');

//     const selectSeatSeation=document.getElementById('select-seat-section');
//     selectSeatSeation.classList.remove('hidden'); 


// } 
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



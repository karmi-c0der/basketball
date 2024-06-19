let count= 0;
let countGuest=0;

const home=document.querySelector("#home")
const btns=document.querySelectorAll('.btn')
const value=document.querySelector('#guest')
const guest=document.querySelectorAll('.guest')


btns.forEach(function (btn){
    btn.addEventListener('click', function(e){
      const points=e.currentTarget.classList;
        if(points.contains('increase')){
            count+=1;
        }
        if(points.contains('increasetwo')){
            count+=2;
        }
         if(points.contains('increasethree')){
            count+=3;
         }else if (points.contains('reset')){
            count=0;
         }

         home.textContent=count;
    })
})

guest.forEach(function(guest){
    guest.addEventListener('click', function(e){
        const guestPoint=e.currentTarget.classList;
        if (guestPoint.contains('increase')){
            countGuest+=1;
        }
        if(guestPoint.contains('increasetwo')){
            countGuest +=2;
        }
        if(guestPoint.contains('increasethree')){
            countGuest +=3;
        }else if(guestPoint.contains('reset')){
            countGuest=0;
        }
        value.textContent=countGuest;

    })
})






/*let guest = 0;

document.getElementById("home-el").textContent=home
document.getElementById("guest-el").textContent=guest

let homeEL=document.getElementById("home-el")
let guestEL=document.getElementById("guest-el")

function one(){
home += 1
homeEL.textContent= home 
}

function two(){
    home +=2
    homeEL.textContent=home
}

function three(){
home += 3
homeEL.textContent=home
}

function guestone(){
    guest +=1
    guestEL.textContent= guest
    }
    
    function guesttwo(){
        guest +=2
        guestEL.textContent= guest
    }
    
    function guestthree(){
    
        guest +=3
    guestEL.textContent= guest
    }
    
function newGame(){
    let startGame= home + guest 
    homeEL.textContent += startGame
    homeEL.textContent=0
    guestEL.textContent=0
    home=0
    guest=0
    
}
*/
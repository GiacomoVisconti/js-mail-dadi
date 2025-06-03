const pc_Number = Number(Math.floor(Math.random()*6))
const user_number = Number(Math.floor(Math.random()*6))
console.log(pc_Number, user_number);


if(pc_Number > user_number){
    alert("Mi spiace, ha vinto il PC")
    
} else if(pc_Number < user_number){
    alert("Congratulazioni, hai vinto")

}else{
    alert("Pareggio, i numeri sono uguali")
}


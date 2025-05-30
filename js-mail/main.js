//lista di mail registrare per la festa
const mail_list = ["mario.rossi@gmail.com", "gianfranco.gingi@gmail.fr", "biancabianco.99@gmail.com", "stendino15@libero.it"]
let user_mail = prompt("Inserisci la tua mail")

//per ogni mail presente nell'array
for(i = 0; i < mail_list.length; i++){
    let mail_selected = mail_list[i]

    //SE la mail inserita è uguale a quella selezionata
    if(user_mail == mail_selected){
        //stampa il messaggio
        alert("Sei invitato alla festa, hai le credenziali per entrare")
    }

}
document.forms["shipping"].addEventListener("submit", function(e) {

    let erreur;

    let inputs = this;

    for (var i = 0; i < inputs.length; i++) {
        console.log(inputs[i]);
        if (!inputs[i].value) {
            erreur = "Veuillez renseigner tous les champs";
        }
    }

    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    } else {
        alert("Formulaire ok"); // Remplacer par une redirection vers la page confirmation de commande
    }
})





function meFonction (e){
    let erreur;

    let inputs = this;

    for (var i = 0; i < inputs.length; i++) {
        console.log(inputs[i]);
        if (!inputs[i].value) {
            erreur = "Veuillez renseigner tous les champs";
        }
    }

    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    } else {
        alert("Formulaire ok"); // Remplacer par une redirection vers la page confirmation de commande
    }

}



document.forms["shipping"].addEventListener("submit", meFonction(e) )
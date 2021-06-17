//Fonction validation de formulaire
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
        alert("Merci pour votre commande :) \nVous allez être rédiriger votre la récapitulatif de votre commande"); // Remplacer par une redirection vers la page confirmation de commande
    }
})

//Fontion de récupération des données dans le local storage
function loadPanier() {
    const panier = JSON.parse(localStorage.getItem("unNounours"));
    console.log(panier);

    const ligneProduit = document.getElementById("lignes-produit");
    ligneProduit.innerHTML = (

        panier.map((produit, index) => (

            `
                <div class="container">
                    <div class="raw">
                        <div class="col-3"> ${produit.Nom} </div>

                        <div class="col-3"> ${produit.Couleur} </div>

                        <div class="col-3">
                                image produit
                        </div>

                        <div class="col-3">
                                <p class=""> ${produit.Prix} € </p>
                        </div>

                        <button onclick="supprProduit(${index})" type="button" class="btn btn-danger">Supprimer</button>
                        
                    </div>
                </div>
            `
        )).join('')
    );
};

    

function supprProduit(index) {
    const panier = JSON.parse(localStorage.getItem("unNounours"));
    console.log("bouton suppr !", index);

    panier.splice(index, 1);
    console.log(panier);

    localStorage.setItem("unNounours", JSON.stringify(panier));
    console.log(panier);

    loadPanier();
};

loadPanier();

// Array.from(child.parentNode.children).indexOf(child);


// <div class="col-3">
//         <img class="produit-photo img-fluid float " src="${produit.imageUrl}"/>
// </div>



// function meFonction (e){
//     let erreur;

//     let inputs = this;

//     for (var i = 0; i < inputs.length; i++) {
//         console.log(inputs[i]);
//         if (!inputs[i].value) {
//             erreur = "Veuillez renseigner tous les champs";
//         }
//     }

//     if (erreur) {
//         e.preventDefault();
//         document.getElementById("erreur").innerHTML = erreur;
//         return false;
//     } else {
//         alert("Merci pour votre commande :) n/Vous allez être rédiriger votre la récapitulatif de votre commande"); // Remplacer par une redirection vers la page confirmation de commande
//     }

// }



// document.forms["shipping"].addEventListener("submit", meFonction(e) )
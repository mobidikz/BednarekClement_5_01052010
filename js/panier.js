//Fonction validation de formulaire
// function testForm() {

//     let erreur;

//     let inputs = document.getElementById("contact").elements;

//     for (var i = 0; i < inputs.length; i++) {
//         console.log("2");
//         console.log(inputs[i]);
//         if (!inputs[i].value) {
//             erreur = "Veuillez renseigner tous les champs";
//         }
//     }

//     if (erreur) {
//         document.getElementById("erreur").innerHTML = erreur;
//         return false;
//     } else {
//         alert("Merci pour votre commande :) \nVous allez être rédiriger votre la récapitulatif de votre commande"); // Remplacer par une redirection vers la page confirmation de commande
//     }
// };


//Callback pour la validation du formulaire -> remplacé par onsubmit sur le html
// document.getElementById("contact").addEventListener("submit", function(e) {
//     e.preventDefault();
//     setAdress();
    
// });

//Fontion de récupération des données dans le local storage
function loadPanier() {
    const panier = JSON.parse(localStorage.getItem("unNounours"));
    console.log(panier);

    const ligneProduit = document.getElementById("lignes-produit");
    ligneProduit.innerHTML = (

        panier.map((produit, index) => (

            `
                <div class="container">
                    <div class="row">
                        <div class="col"> ${produit.Nom} </div>

                        <div class="col"> ${produit.Couleur} </div>

                        <div class="col">
                                image produit
                        </div>

                        <div class="col">
                                <p class=""> ${produit.Prix} € </p>
                        </div>

                        <button onclick="supprProduit(${index})" type="button" class="btn btn-danger col">Supprimer</button>
                        
                    </div>
                </div>
            `
        )).join('')
    );

    const reducer = (acc, cur) => acc + parseFloat(cur.Prix); // reduce() pour ajouer les élément du tableau entre eux ET parseFloat() pour transforter la sting et float
    const prixTotal = panier.reduce(reducer, 0);
    console.log("Prix total " + prixTotal);

    const prixTotalInser = document.getElementById("prix-total");
    prixTotalInser.innerHTML = (prixTotal + " €");

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

//Fonction récupération adresses
// function setAdress() {
//     // let contact = document.getElementsByTagName("input");
//     // console.log(contact);

//     const contact = new Object();
//     contact.firstName = document.getElementById("firstName").value;
//     contact.lastName = document.getElementById("lastName").value;
//     contact.city = document.getElementById("city").value;
//     contact.adress = document.getElementById("adress").value;
//     contact.email = document.getElementById("email").value;




//     const tableau = [
//         { name: 'TRodo', id: 'dkjfdsjfdkf474' },
//         { name: 'Jean', id: 'dkjfdsjfdkf474' },
//         { name: 'Arnold', id: 'dkjfdsjfdkf474' }
//     ]

//     // const produits = tableau.map(t => t.name) // ['TRodo', 'Jean', 'Arnold']


    



//     // ou écrit de cette manière 
//     // const contact2 = {};
//     // ["firstName", "lastName", "city", "adress", "email"].forEach((id) => {
//     //     contact2[id] = document.getElementById(id).value
//     // });

//     console.log(contact);


//     send();

//     // transforme l'objet en chaine de caractères et l'envois sur le localStorage
//     localStorage.setItem("adress", JSON.stringify(contact));
// }

//Fonction envois des informations à l'API
async function send(e) {

    // Création de l'objet contact
    const contact = new Object();
    contact.firstName = document.getElementById("firstName").value;
    contact.lastName = document.getElementById("lastName").value;
    contact.city = document.getElementById("city").value;
    contact.address = document.getElementById("adress").value;
    contact.email = document.getElementById("email").value;

    //Création du tableau products
    let products = JSON.parse(localStorage.getItem("unNounours"));
    products = products.map(t => t.id);
    
    
    const headers = {
        'Accept': 'application/json', 
        'Content-Type': 'application/json; charset=UTF-8'
    }
    
    //try et catch pour la gestion des erreurs
    try {
        const response = await fetch("http://localhost:3000/api/teddies/order", {
            method: "POST",
            headers: headers,
            body: JSON.stringify({ contact, products }) // { contact: contact, products: products }
        })
      
        const body = await response.json()

        

        console.log("changement de page");
        // window.location = "/pages/confirmation-commande.html";
        return true;
      
        console.log(body);
    } catch (err) {
        alert("Oups... Une erreur est survenue.")
        console.log(err);
    }
    return false;
  };

loadPanier();


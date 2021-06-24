console.log("test");


//Fontion de récupération des données dans le local storage
function loadPanier() {
    const panier = JSON.parse(localStorage.getItem("unNounours"));
    console.log(panier);

    const ligneProduit = document.getElementById("lignes-produit-conf");
    ligneProduit.innerHTML = (

        panier.map((produit) => (

            `
                <div class="container">
                    <div class="row">
                        <div class="col"> ${produit.Nom} </div>

                        <div class="col"> ${produit.Couleur} </div>

                        <div class="col">
                            🐻
                        </div>

                        <div class="col">
                                <p class=""> ${produit.Prix} € </p>
                        </div>
                        
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
}

//Fontion de récupération de l'adresse
function loadAdress() {
    const adress = JSON.parse(localStorage.getItem("adress"));
    console.log(adress);

    const blockAdress = document.getElementById("adresse-livraison");
    blockAdress.innerHTML = (
        `
            <div class="container text-right">
                <div class="row">
                    <div class="col"> ${adress.firstName} ${adress.lastName} </div>
                </div>

                <div class="row">  
                    <div class="col"> ${adress.city} </div>
                    
                </div>

                <div class="row">  
                    <div class="col"> ${adress.adress} </div>
                </div>

                <div class="row">  
                    <div class="col"> ${adress.email} </div>
                </div>
            </div>
        `
    );
}

loadPanier();
loadAdress();
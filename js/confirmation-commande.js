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
                                image produit
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

loadPanier();
// Récuperation du tableau de tout les produits
const fetchProduit = async() => {
    const parsedUrl = new URL(window.location.href);
    const id = parsedUrl.searchParams.get("id"); // 

    return await fetch(`http://localhost:3000/api/teddies/${id}`).then(res => res.json());
};


// Création de la Présentation Produit
async function presProduct() {
    console.log("fonction showProduits() appellée ");
    produit = await fetchProduit(); // Les variables non-déclarées sont toujours globales

    const results = document.getElementById("results");
    results.innerHTML = (

        `   <div>
                <!-- Bloc 0 : Titre -->
                <section>
                    <h1>
                        ${produit.name}
                    </h1>
                    <p>
                        ${produit.description}
                    </p>
                </section>
        
                <!-- Bloc 1 : Produit et personnalisation -->
                <section>
                    <div>
                        <img class="produit-photo" src="${produit.imageUrl}" />
                    </div>
                    <section>
                        <h2 class="produit-nom" id="nom-produit" value="${produit.name}"> 
                            ${produit.name} 
                        </h2>
                        <div>
                            <div> 
                                ⭐⭐⭐⭐⭐
                            </div>
                            <div>
                                Stock
                            </div>
                        </div>
                        <p>
                            ${produit.description}
                        </p>
                        <div class="personnalisation">
                            <table>
                                <tr>
                                    <td>Prix</td>
                                    <td id="prix-produit">${numberWithCommas(produit.price)} €</td>
                                </tr>

                                <tr>
                                    <td>Taille</td>
                                    <td>35 cm</td>
                                </tr>

                                <tr>
                                    <td>Couleur</td>
                                    <td>
                                        ${generateSelect(produit.colors)}
                                    </td>
                                </tr>

                                <tr>
                                    <td>Disponibilité</td>
                                    <td>7 en stock</td>
                                </tr>

                            </table>
                        </div>
                        <div>
                            <button>
                                Ajouter au panier
                            </button>
                            <button>
                                Acheter maintenant
                            </button>
                        </div>
                    </section>
                </section>
        
                <!-- Bloc 2 : Description détaillée du produit -->
                <section>
                    <h2>
                        Description du produit
                    </h2>
        
                    <p>
                        Nom de la liste.
                    </p>
                    <p>
                        Introduction de 2 lignes.
                    </p>
                    <ul>
                        <li>
                            Détail 1
                        </li>
        
                        <li>
                            Détail 2
                        </li>
        
                        <li>
                            Détail 3
                        </li>
                        <li>
                            Détail 4
                        </li>
                    </ul>
        
                    <p>
                        Conclusion
                    </p>
                    <p>
                        Conclusion en deux ou trois lignes.
                    </p>
                </section>
            </div>
        `
    );
};

// Selection de la couleur du produit
function generateSelect(items) {
    let select =`<select>`;

    for (let item of items) {
        select += `<option value="${item}">${item}</option>`
    }

    select += "</select>";

    return select;
};



// Fonction pour mettre une virgule à deux chiffres en partant de la droite
function numberWithCommas(x){
	return x.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ',');
}


//ajout dans panier

// let unNounours = [];

//Nique ta mère javascript

let couleurProduit ="";
let nomProduit = "";
let prixProduit ="";

function setData(){
 
    couleurProduit = document.querySelector("select").value;
    console.log(couleurProduit);
    
    nomProduit = produit.name;
    prixProduit = numberWithCommas(produit.price);



    const unNounours = JSON.parse(localStorage.getItem("unNounours")) || []; //retourne le premier qui est vrais 
    console.log(unNounours);


    unNounours.push(
        {
             Nom : nomProduit,
             Prix : prixProduit,
             Couleur : couleurProduit
        }
    );
  

    // unNounours = JSON.parse(localStorage.getItem("unNounours"));
    console.log(unNounours);

    
    localStorage.setItem("unNounours", JSON.stringify(unNounours));

//     unNounours = JSON.parse(unNounours);
//     localStorage.setItem("produit", unNounours);

//     console.log(unNounours);
  

//    localStorage.setItem("unNounours", JSON.stringify(unNounours));
//    console.log(unNounours);
}




presProduct();
setData();


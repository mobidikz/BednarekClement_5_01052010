// Test de la console dans la navigateur
console.log("La peluche dans ton nombril");

// Récuperation du tableau de tout les produits
const fetchProduits = async() => {
    return await fetch("http://localhost:3000/api/teddies").then(res => res.json());
};


// Création de la Card Produit
async function showProduits() {
    const produits = await fetchProduits();
    console.log(produits);

    const results = document.getElementById("results");
    results.innerHTML = (

        produits.map(produit => (

            `
                <div class="container-products">
                    <div class="container-products_card">
                        <a href="/pages/produit.html?id=${produit._id}">Voir produit</a> 

                        <div class="container-products_card_img">
                            <img class="produit-photo" src="${produit.imageUrl}" />
                        </div>

                        <div class="container-products_card_name">
                            <h3 class="produit-nom"> ${produit.name} </h3>
                        </div>

                        <div class="container-products_card_stars">
                            * * * * *
                        </div>

                        <div class="container-products_card_price">
                            <em class="produit-prix"> ${produit.price} </em>
                        </div>
                    </div>
                </div>
            `
        )).join('')
    );
};

console.log(results);
showProduits();

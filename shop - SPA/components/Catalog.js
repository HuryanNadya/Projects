
import {loadCatalog, clickCart} from './functions.js' 



class Catalog {
    constructor() {
    }
    
    create() {
        let catalog = document.querySelector(".catalog");
        let singleProductBlock;
        const catalogData = loadCatalog(); // get api data from Local Storage

        catalogData.forEach(element => {
            let productAction = document.createElement("div");
            productAction.classList.add("product-action");
            let buttonGroup = document.createElement("div");
            buttonGroup.classList.add("button-group");

            let cartButton = document.createElement("button");
            cartButton.innerHTML = `<i class="fa fa-shopping-cart"></i> Add to Cart`;
            cartButton.addEventListener("click",function() {
                clickCart(element.id, element.price);
            });

            buttonGroup.appendChild(cartButton);
            productAction.appendChild(buttonGroup);

            singleProductBlock = document.createElement("div");
            singleProductBlock.classList.add("single-product");
            singleProductBlock.insertAdjacentHTML("afterBegin",`
                <div class="product-img">
                    <a href="#product${element.id}">
                        <img class="primary-img" src="${element.image}" alt="${element.title}">
                    </a>
                </div>
                <div class="product-description">
                    <h5><a href="#product${element.id}">${element.title}</a></h5>
                    <div class="price-box">
                        <span class="price">${element.price}$</span>
                    </div>                    
                </div>
            `);
            singleProductBlock.appendChild(productAction);
            catalog.appendChild(singleProductBlock);
        });

    }
    init() {
        return this.create();

    }
}
export default new Catalog();
								
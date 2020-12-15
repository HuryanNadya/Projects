
import {clickCart} from './functions.js' 

class Product {
    constructor() {

    }
    async getProduct(id) {
        const productApiUrl = "https://fakestoreapi.com/products/"+id;
        const productData = await fetch(productApiUrl)
        .then(response => response.json());       

        const data = await productData;
        return data;
    }
    
    create() {
        let catalog = document.querySelector(".product-block");
        const productId = window.location.hash.replace('#product','');

        this.getProduct(productId).then(function(data){
            let cartButton = document.createElement("button");
            cartButton.classList.add("toch-button");
            cartButton.classList.add("toch-add-cart");
            cartButton.innerHTML="Add to Cart";
            cartButton.addEventListener("click",function() {
                clickCart(data.id, data.price);
            });
            catalog.insertAdjacentHTML("afterbegin", `
            
            <div class="toch-prond-area">
                <div class="row">
                    <div class="col-md-5 col-sm-5 col-xs-5">
                        <div class="clear"></div>
                        <div class="tab-content">
                            <!-- Product = display-1-1 -->
                            <div role="tabpanel" class="tab-pane fade in active" id="display-1">
                                <div class="row">
                                    <div class="col-xs-12">
                                        <div class="toch-photo">
                                            <img src="${data.image}" data-imagezoom="true" alt="${data.title}">
                                        </div>
                                    </div>
                                </div>
                            </div>                            
                        </div>                        
                    </div>
                    <div class="col-md-7 col-sm-7 col-xs-7">
                        <h2 class="title-product">${data.title}</h2>
                        <div class="about-toch-prond">
                            <p class="">Category: ${data.category}</p>
                            <p class="short-description">${data.description}</p>
                            <hr>
                            <span class="current-price">${data.price}$</span>
                            <span class="item-stock">Availability: <span class="text-stock">In Stock</span></span>
                        </div>
                        
                        <div class="product-quantity">
                            <!--<span>Qty</span>
                            <input type="number" placeholder="1">
                            <button type="submit" class="toch-button toch-add-cart">Add to Cart</button>
                            <hr>-->
                        </div>
                    </div>
                </div>   
            </div>     
            
            `);
            let productQuantity = catalog.querySelector(".product-quantity");
            productQuantity.insertAdjacentElement("beforeend", cartButton);
            productQuantity.insertAdjacentHTML("beforeend", `<hr>`);
        })
  }
    init() {
        return this.create();

    }
}
export default new Product();

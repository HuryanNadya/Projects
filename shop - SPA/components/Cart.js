import {getCookie} from './functions.js'

class Cart {
    constructor() {

    }
    async getProduct(id) {
        const productApiUrl = "https://fakestoreapi.com/products/"+id;
        const productData = await fetch(productApiUrl)
        .then(response => response.json());       

        const data = await productData;
        return data;
    }
    deleteProduct(id, price) {
        const restCookie = getCookie('userItems') || '';

        const arrProducts = restCookie.split('|');
        const newArr = arrProducts.filter((item) => {
            let myId = item.split(',')[0].replace('id:', '')
            return  myId !== id
        })

        const totalCount =  document.querySelector('#totalCount');
        const totalPrice = document.querySelector('#totalPrice');  

        totalCount.innerText = +totalCount.innerText - 1;
        totalPrice.innerText = (+totalPrice.innerText - price).toFixed(2);

        document.cookie = "userItems="+newArr.join('|')
        document.querySelector(".shopping-cart").innerHTML="";
        this.init()
    }
    createCart(shoppingCart) {            
        shoppingCart.insertAdjacentHTML("afterbegin",`
        <div class="table-responsive">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <td class="text-center">Image</td>
                        <td class="text-left">Product Name</td>
                        <td class="text-left">Model</td>
                        <td class="text-right">Unit Price</td>
                        <td class="text-right"></td>
                    </tr>
                </thead>
                <tbody id="cartList">                   
                </tbody>
            </table>
        </div>        
        `);
        return shoppingCart;
    }
    createCartButtons(id, price) {
        let td = document.createElement("td");
        td.classList.add("text-left");
        let div = document.createElement("div");
        div.classList.add("btn-block");
        div.classList.add("cart-put");

        let deleteButton = document.createElement("button");
        deleteButton.classList.add("btn");
        deleteButton.classList.add("btn-danger");
        deleteButton.innerHTML=`<i class="fa fa-times-circle"></i>`;
        let self = this;
        deleteButton.addEventListener("click", function() {
            self.deleteProduct(id, price);
        });
        div.appendChild(deleteButton);
        td.appendChild(div);
        return td;
    }

    create() {
        let shoppingCart = document.querySelector(".shopping-cart");
        shoppingCart = this.createCart(shoppingCart);
        let cartList = shoppingCart.querySelector("#cartList");

        let restCookie = getCookie('userItems') || '';
        const arrProducts = restCookie.split('|');
        arrProducts.pop(); // delete last empty array element       
        
        arrProducts.map((item) => {
            const itemArr = item.split(',')
            let id = itemArr[0].replace('id:', '');
            let price = itemArr[1].replace('price:', '');
            
            let newTd = this.createCartButtons(id, price);
        
            this.getProduct(id).then(function(item){
                let newTr = document.createElement("tr");
              
                newTr.insertAdjacentHTML("afterbegin", `                
                    <td class="text-center">
                        <a href="#product${item.id}">
                        <img class="small-thumbnail" src="${item.image}" alt="${item.title}"></a>
                    </td>
                    <td class="text-left">
                        <a href="#product${item.id}">${item.title}</a>
                    </td>
                    <td class="text-left">${item.category}</td>   
                    <td class="text-right">${item.price}</td>                 
                `);
                newTr.appendChild(newTd);
                cartList.appendChild(newTr);
            })
        })

    }

    init() {
        return this.create();
    }
}

export default new Cart();

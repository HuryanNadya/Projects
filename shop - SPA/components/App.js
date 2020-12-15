import {header} from './Header.js';
import {footer} from './Footer.js';
import {main} from './Main.js';
import Catalog from './Catalog.js';
import Product from './Product.js';
import Cart from './Cart.js';
import {getProducts, loadCart} from './functions.js'


class App {
    constructor() {
        this.element="";
        this.data="";       
    }
    
    create() {
        let element = document.createElement("div");
        element.classList.add("app");
        this.element = element;

    }
    render() {
        let script = document.querySelector("script");       
        this.element.appendChild(header); 
        this.element.appendChild(main); 
        this.element.appendChild(footer); 
        document.body.insertBefore(this.element, script);
    }
    init() {
        getProducts();
        this.createHead();
        this.create();
        this.render();
        Catalog.init();

    }
    createHead() {
        const cssFile = ["css/style.css", "css/bootstrap.min.css","css/font-awesome.min.css"];
        let meta = document.createElement("meta");
        meta.setAttribute("charset","UTF-8");
        document.head.appendChild(meta);
        let title = document.createElement("title");
        title.innerHTML='Online shop';
        document.head.appendChild(title);        
        let cssName;
        cssFile.forEach((index) => {
            cssName=document.createElement("link");
            cssName.setAttribute("href", index);
            cssName.setAttribute("rel","stylesheet");
            document.head.appendChild(cssName);
        })
        
       
    }
}


let loadPage = function() {
    let catalog = document.querySelector('.catalog');
    let product = document.querySelector(".product-block");
    let cart =  document.querySelector(".shopping-cart");
    if (window.location.hash.indexOf('#product')!=-1) {
        product.innerHTML="";
        catalog.innerHTML="";
        cart.innerHTML="";
        Product.init();
    } else if (window.location.hash=="#cart") {
        catalog.innerHTML="";
        product.innerHTML="";
        cart.innerHTML="";
        Cart.init();
    } 
    else if (window.location.hash=="#home") {
        catalog.innerHTML="";
        product.innerHTML="";
        cart.innerHTML="";
        new App().init();
    }
}


document.addEventListener('DOMContentLoaded', function() {
    loadPage();
    loadCart()});
window.addEventListener("hashchange", loadPage);


export default new App().init();
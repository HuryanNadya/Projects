import {nav} from './Nav.js';

class Header{
   
    create() {
        let element = document.createElement("header");
        element.classList.add='header-area';
        let headercode = `
            <!-- HEADER-MIDDLE START -->
            <div class="header-middle">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-sm-6 col-xs-6">
                            <div class="logo">
                                <a href="/" title="Malias"><img src="images/logo.png" alt="Malias"></a>
                            </div>
                        </div>
                        <div class="col-md-9 col-sm-6 col-xs-6">
                            <div class="quick-access">                           
                                <div class="top-cart">
                                    <ul>
                                        <li>
                                            <a href="#cart">
                                                <span class="cart-icon"><i class="fa fa-shopping-cart"></i></span>
                                                <span class="cart-total">
                                                    <span class="cart-title">shopping cart</span>
                                                    <span class="cart-item"><span id="totalCount">0</span> item(s)- </span>
                                                    <span class="top-cart-price">$<span id="totalPrice">00.00</span></span>
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            <!-- HEADER-MIDDLE END -->      
            `;
        element.insertAdjacentHTML("afterBegin", headercode);
        element.insertAdjacentElement("beforeEnd", nav);

        return element;
    }
    init() {
        return this.create();         
    }
}
const header = new Header().init();

export {header};
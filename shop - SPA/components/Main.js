
class Main {
    create() {
        let element = document.createElement("section");
        element.classList.add("page-content");
        element.insertAdjacentHTML("afterBegin",`
        <div class="container">
                <div class="row">
                    <div class="col-md-12 catalog">
                    </div>
                    <div class="col-md-12 product-block">
                    </div>

                    <div class="col-md-12 shopping-cart">
                    </div>
                </div>
        </div>            
        `);
        return element;
    }
    init() {
        return this.create();
        
    }
}

const main = new Main().init();
export {main};
class Footer {
    constructor() {
        this.social = {
            name : ['facebook', 'google', 'twitter', 'youtube'],
            link: ['https://www.facebook.com', 'https://www.google.com','https://twitter.com', 'https://www.youtube.com'],
            class: ['fa-facebook', 'fa-google-plus', 'fa-twitter', 'fa-youtube']
        }
    }
    create() {
        let element = document.createElement('footer');
        element.classList.add("footer-area");
        element.insertAdjacentHTML("afterBegin",`
            
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                    <div class="copyright">
                        <p>Copyright &copy; N.Huryan</p>
                        
                    </div>
                </div>
            </div>        
        `);
        let social = document.createElement("div");
        social.classList.add("social-media");        
        
        for (let i=0; i<this.social.name.length; i++) {
            let link = document.createElement("a");
            link.setAttribute("href",this.social.link[i]);
            let ico = document.createElement("i");
            ico.classList.add("fa");
            ico.classList.add(this.social.class[i]);
            link.appendChild(ico);
            social.appendChild(link);

        }
        element.querySelector(".copyright").insertAdjacentElement("beforeend",social);
        return element;
        


    }
    init() {
        return this.create();

    }
}

const footer = new Footer().init();
export {footer};
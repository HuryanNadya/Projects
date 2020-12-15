class Nav {
    constructor() {
        this.menu={
            name: ['Home','About','Contact'],
            link: ['#home', '#about', '#contact'] //for future pages
        };
    }
    create() {        
        let element= document.createElement("div");  
        element.classList.add('mainmenu-area');
        element.insertAdjacentHTML("afterBegin", `
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="mainmenu">
                        
                        </div>
                    </div>
                </div>
            </div>`
        );
        let mainMenu = element.querySelector(".mainmenu");  

        let menuNav = document.createElement("nav"),
            menuUl= document.createElement("ul");        
        for (let i=0; i<this.menu.name.length;i++) {
            let li = document.createElement("li");
            li.innerHTML=`<a href="${this.menu.link[i]}">${this.menu.name[i]}</a>`;
            menuUl.appendChild(li);
        }
        menuNav.appendChild(menuUl);
        mainMenu.appendChild(menuNav);
        return element;

    }
    init() {
        return this.create();

    }
}

const nav = new Nav().init();
export {nav};
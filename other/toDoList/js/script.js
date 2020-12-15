    let doc=document;
   
    let listInput = doc.querySelector("#todo-input");     
    let listInputValue;
        
    let list = doc.querySelector(".todo-list"); 

    //input сheck
    let checkInput = function() {     
        listInputValue = listInput.value;   
        if (listInputValue.length==0 || listInputValue==" ") {  
            alert("You must write something!" );
            return;
        } else {
            createList(listInputValue);                  
        }
    }
    //create new list item
    let createList = function(value) {
        let iEdit = document.createElement("i");
        iEdit.classList.add("edit");
        iEdit.addEventListener("click",editList);
        let iDelete = document.createElement("i");
        iDelete.classList.add("remove");
        iDelete.addEventListener("click",removeList);
        let buttons = document.createElement("div");
        buttons.classList.add("buttons");
        buttons.appendChild(iEdit);
        buttons.appendChild(iDelete);

        let listItem = document.createElement("li");
        listItem.innerHTML = 
        `<div class="form-check"> 
            <label class="form-check-label"> 
                <input class="checkbox" type="checkbox"><span>${value}</span><i class="input-helper"></i>                
            </label> 
        </div> `;
        listItem.appendChild(buttons);
        list.insertAdjacentElement('afterBegin',listItem)
        listInput.value="";
        setTimeout(function() {                    
            list.firstElementChild.classList.add("fade-in");
          }, 200);
           
    }

    //delete list item
    let removeList = function() {
        let parent = this.closest("li");
        parent.classList.add("fade-out");
        setTimeout(function() {                    
            parent.remove();
        }, 500);               
      
    };


    //edit list item
    let editList = function() {      
        let parent=this.closest("li");
        let parentSpan=parent.querySelector(".form-check-label span");
        let oldValue=parentSpan.textContent;                
        let newValue = prompt("Edit List", oldValue);
        if (newValue) {
            parentSpan.textContent=newValue;
        } 
    }

    
    //проверка на ввод Enter
    listInput.addEventListener("keyup", function(event){        
        if (event.key=="Enter") {
            checkInput()          
        }
    });
    doc.querySelector("#add-button").addEventListener("click", checkInput);   



  
 



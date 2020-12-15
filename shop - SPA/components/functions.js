export async function getProducts() {        
    const productApiUrl = "https://fakestoreapi.com/products";
    const productData = await fetch(productApiUrl)
    .then(response => response.json());
    await localStorage.setItem('productCatalog', JSON.stringify(productData));    

}

export let loadCart = function() {  
    let totalCost = 0;
    let totalCount = 0;
    let restCookie = getCookie('userItems') || '';  
    
    const arrProducts = restCookie.split(' |');
    arrProducts.pop(); // delete last empty array element 
    arrProducts.map((item) => {        
        const itemArr = item.split(',')
        let price = itemArr[1].replace('price:', '');        
        totalCost+=+price;
        totalCount++;  
    })
    debugger
    document.querySelector('#totalCount').innerText = totalCount;
    document.querySelector('#totalPrice').innerText = totalCost.toFixed(2);
}

export let getCookie = function(name) {  //get data from из cookie
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}   
export const loadCatalog = function() { //get data from LocalStorage
    return JSON.parse(localStorage.getItem("productCatalog")) || [];
} 

export let clickCart = function(id, price) {
    
    let totalCost = price;
    let totalCount = 1;
    const itemText = `id:${id},price:${price} |`;
    let restCookie = getCookie('userItems') || '';
    
    const arrProducts = restCookie.split(' |');
    arrProducts.pop();
    arrProducts.map((item) => {        
        const itemArr = item.split(',')
        let id = itemArr[0].replace('id:', '');
        let price = itemArr[1].replace('price:', '');
        
        totalCost+=+price;
        totalCount++;  
    })
    document.cookie = `userItems=${itemText}${restCookie}`;
    document.querySelector('#totalCount').innerText =totalCount;
    document.querySelector('#totalPrice').innerText =  totalCost.toFixed(2);
}
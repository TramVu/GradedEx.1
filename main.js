var carts = document.getElementsByClassName("add-to-cart btn btn-default");

let products= [
    {
        name: 'Vsmart Joy 4',
        tag: 'Joy4',
        price: '3.290.000d',
        inCart: 0
    },
    {
        name: 'Vsmart Star 3',
        tag: 'Star3',
        price: '1.990.000d',
        inCart: 0
    },
    {
        name: 'Vsmart Active 3',
        tag: 'Active 3',
        price: '3.390.000d',
        inCart: 0
    },
    {
        name: 'Vsmart Live',
        tag: 'Live',
        price: '3.490.000d',
        inCart: 0
    },
    {
        name: 'Vsmart Joy 2+',
        tag: 'Joy2+',
        price: '2.490.000d',
        inCart: 0
    }
]


for (let i = 0 ; i < carts.length; i++) {
    carts[i].addEventListener('click',() => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function onLoadCartNumbers () {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector ('.iconcart span').textContent = productNumbers +1;
    }
}


function cartNumbers(product) {  
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);


    if( productNumbers) {
        localStorage.setItem ('cartNumbers',productNumbers + 1);
        document.querySelector ('.iconcart span').textContent = productNumbers +1 ;
    } else {
        localStorage.setItem ('cartNumbers',1);
        document.querySelector ('.iconcart span').textContent = 1;
    }

    setItems(product);
    function setItems() {
        let cartItems = localStorage.getItem ('productsInCart');
        cartItems = JSON.parse(cartItems);
        console.log("My cartItems are", cartItems);

        if (cartItems != null) {
            if (cartItems[product.tag] == undefined) {
                cartItems = {
                    ...cartItems,
                    [product.tag]: product   
                }
            }
            cartItems[product.tag].inCart += 1 ; 
        } else {
            product.inCart = 1 ;
            cartItems = {
                [product.tag] : product
            }  
        }
        localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    }
}

function totalCost(product) {
    //console.log("The product price is", product.price);
    let cartCost = localStorage.getItem("totalCost");
    

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }else {
        localStorage.setItem("totalCost", product.price);
    }
    
    alert ("Add to cart sucessfully !!!")
}

onLoadCartNumbers ();


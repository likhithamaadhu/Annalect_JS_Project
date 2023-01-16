//cart
// var cart=[];

// function displaycart(a){
//     let j=0;
//     if(cart.length==0){
//         document.getElementById('cart-item').innerHTML = "Your cart is empty";
//     }
//     else{
//         document.getElementById("cart-item").innerHTML= cart.map((items)=>
//         {
//             var{image,title,price}=items;
//             return(

// ------------------------------
fetch('https://fakestoreapi.com/products/')
    .then(data => data.json())
    .then(completedata => {
        // console.log(completedata[item].title)});
        
        let data1 = "";
        completedata.map((values) => {
            data1=`
            <div class="cart-content">
            <div class="cart-box">
                <img src="${values.image}" alt="" class="cart-img">
                <div class="detail-box">
                    <div class="cart-product-title">${values.title}</div>
                    <div class="cart-price">$ ${values.price}</div>
                    <input type="number" value="1" class="cart-quantity">
                </div>
                <!-- remove cart -->
                <i class='bx bxs-trash-alt cart-remove'></i>
            </div>
        </div>`
        });
        document.getElementById("cart-item").innerHTML=data1;
    })
    .catch(error=>console.log(error));
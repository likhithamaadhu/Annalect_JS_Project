fetch('https://fakestoreapi.com/products/')
    .then(data => data.json())
    .then(completedata => {
        //console.log(completedata[2].title))
        let data1 = "";
        completedata.map((values) => {
            data1+=`
            <div class="card text-center" style="width: 16rem;">
            
                <img class="card-img-top" src=${values.image} alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${values.title}</h5>
                    <p class="rating"><i class="fa-solid fa-star rating-icon" color:"#f8ce0b"></i>${values.rating.rate}</p>
                    <p class="price">$ ${values.price}</p>
                    <div class="row">
                    <a href="#" class="btn btn-outline-warning" onclick=view(${values.id})>View</a>
                    <a href="cart.html" class="btn btn-outline-success"  onclick='addtocart("+(i++)+)'>Add to Cart</a>
                    </div>
                </div>
            </div>
      `
        });
        document.getElementById("cards").innerHTML=data1;
    })
    .catch(error=>console.log(error));

function view(productid){
    productid=this.productid;
    location.assign("single.html")
}
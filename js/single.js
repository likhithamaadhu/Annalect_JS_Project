
fetch('https://fakestoreapi.com/products/')
    .then(data => data.json())
    .then(completedata => {
        // console.log(completedata[item].title)});
        
        let data1 = "";
        completedata.map((values) => {
            data1=`
            <section class="container sproduct my-5 pt-2">
    <div class="row">
        <div class="col-lg-5 col-md-12 col-12">
            <img class="image-fluid w-100" src="${values.image}" alt="">
        </div>


        <div class="col-lg-6 col-md-12 col-12">
        <h6>Products/${values.category}</h6>
        <h3 class="py-4">${values.title}</h3>
        <h2>${values.price}</h2>
        <select class="my-3">
            <option>Select Size</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
            <option>XXXL</option>
        </select>
        <br>
        <input id="quant" type="number" value="1" style="width: 50px;">
        <button class="btn btn-dark" href="#">Add to Cart</button>
        <h4 class="pt-5">Product Details</h4>
        <span>${values.description}</span>
    </div>

    </div>

</section>
      `
        });
        document.getElementById("singleproduct").innerHTML=data1;
    })
    .catch(error=>console.log(error));



// search function

// let search = document.querySelector('.srch');

// search.addEventListener('keyup',()=>{
//     let output = search.value;

//     if (output == `${values.category}`){
//         document.getElementById('products').innerHTML = data.category
//     }

// });




let products = fetch('product.json')
    .then(res => res.json())
    .then(wholedata =>{
        let data = "";
        wholedata.map((values)=>{
            data+= `<div class="pd-card">
            <div class="image">
                <img src="${values.image}">
            </div>
            <div class="title">
                <h3>${values.title}</h3>
                <h4>${values.category}</h4>
            </div>
            <div class="desc">
                <p>${values.description}</p>
            </div>
            <span>${values.price}</span>
            <button class="btn">Add to Cart</button>
            </div>`
        });

        document.getElementById('products').innerHTML = data
    })
    .catch(error=>console.log('Sorry cant find what you looking'))

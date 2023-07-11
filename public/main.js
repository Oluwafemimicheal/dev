const productContainer = document.querySelector('.product-container')

// const data = () => {
//     const response = await fetch('../data.js')
//     const data = await response.json()
//     console.log(data)
// }

const url = '../data.js'

async function data() {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
}

data()



// const product = data.map((product) => {
//     return `
//     <div class="card">
//     <a href="product.html" class="imagebx">
//         <img src="./image/adeolu-eletu-E7RLgUjjazc-unsplash.jpg" alt="Loading">
//     </a>
//     <div class="card-text">
//         <h3>${product.job}</h3>
//         <p>${product.name}</p>
//     </div>
// </div>`
// })

// console.log(product)
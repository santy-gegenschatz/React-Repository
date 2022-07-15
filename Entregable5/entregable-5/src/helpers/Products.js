let p1 = {id : "1", nombre: 'Remera Basic Black', precio : 15, stock : 10, url : 'https://http2.mlstatic.com/D_NQ_NP_643633-MLA31351644651_072019-O.jpg'}
let p2 = {id : "2", nombre: 'Jean Extra-Denim', precio : 40, stock : 6, url : 'https://http2.mlstatic.com/D_NQ_NP_643633-MLA31351644651_072019-O.jpg'}
let p3 = {id : "3", nombre: 'Camisa Regular White', precio : 25, stock : 20, url : 'https://http2.mlstatic.com/D_NQ_NP_643633-MLA31351644651_072019-O.jpg'}
let p4 = {id : "4", nombre: 'Campera OutRider', precio : 75, stock : 12, url : 'https://http2.mlstatic.com/D_NQ_NP_643633-MLA31351644651_072019-O.jpg'}
let p5 = {id : "5", nombre: 'Gorra Bear Market', precio : 12, stock : 3, url : 'https://http2.mlstatic.com/D_NQ_NP_643633-MLA31351644651_072019-O.jpg'}

let products = [];
products.push(p1);
products.push(p2);
products.push(p3);
products.push(p4);
products.push(p5);

const Products = (resolution, delay) => {
    let promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (resolution) {
                resolve(products)
            } else {
                reject("Ha habido un error crítico, lo lamentamos")
            }
        }, delay);
    });
    console.log("Products");
    console.log(products);
    console.log("Promesa");
    console.log(promesa);
  return (promesa)
}

export default Products;

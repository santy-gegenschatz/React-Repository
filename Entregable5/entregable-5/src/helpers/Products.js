let p1 = {id : "1", nombre: 'Basic Black T-Shirt', precio : 15, stock : 10, description : '100% Hand Woven Cotton', url : 'https://static.dafiti.com.ar/p/topper-6959-873019-1-zoom.jpg'}
let p2 = {id : "2", nombre: 'Extra-Denim Jean', precio : 40, stock : 6, description : 'Classic, yet stylish', url : 'https://http2.mlstatic.com/D_NQ_NP_663600-MLA43732813599_102020-W.jpg'}
let p3 = {id : "3", nombre: 'Regular White Shirt', precio : 25, stock : 20, description : 'Ideal for Business Meetings',url : 'https://i.ebayimg.com/thumbs/images/g/c0EAAOSwXTVid0C0/s-l300.jpg'}
let p4 = {id : "4", nombre: 'OutRider Jacket', precio : 75, stock : 12, description : 'Take warmth with you', url : 'https://http2.mlstatic.com/D_NQ_NP_643633-MLA31351644651_072019-O.jpg'}
let p5 = {id : "5", nombre: 'Bear Market Cap', precio : 12, stock : 3, description : 'Is the bear market over?', url : 'https://http2.mlstatic.com/D_NQ_NP_2X_866308-MLM49983765519_052022-F.jpg'}

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
  return (promesa)
}

export default Products;

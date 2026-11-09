const products = [
    { id: 1, name: "Iphone 16", price: 12000000, category: "phone", stock: 10 },
    { id: 2, name: "Samsung S25", price: 15000000, category: "phone", stock: 5 },
    { id: 3, name: "MacBook Air", price: 15000000, category: "laptop", stock: 3 },
    { id: 4, name: "Redmi Note 14", price: 2500000, category: "phone", stock: 0 },
    { id: 5, name: "AirPods Pro", price: 2000000, category: "accessory", stock: 15 },
    { id: 6, name: "Lenovo Legion", price: 13000000, category: "laptop", stock: 2 },
    { id: 7, name: "Samsung Buds", price: 1500000, category: "accessory", stock: 0 },
    { id: 8, name: "iPad Air", price: 8000000, category: "tablet", stock: 7 },
    { id: 9, name: "Xiaomi Band", price: 500000, category: "accessory", stock: 20 },
    { id: 10, name: "HP Pavilion", price: 9000000, category: "laptop", stock: 4 }
];

// 1. Eng qimmat mahsulot
function getMostExpensiveProduct() {
    let max = products[0];

    for (let i = 0; i < products.length; i++) {
        if (products[i].price > max.price) {
            max = products[i];
        }
    }

    return max;
}

console.log(getMostExpensiveProduct());

// 2. Eng arzon mahsulot
function getCheapestProduct() {
    let min = products[0];

    for (let i = 0; i < products.length; i++) {
        if (products[i].price < min.price) {
            min = products[i];
        }
    }

    return min;
}

console.log(getCheapestProduct());

// 3. Mahsulotlar soni
function getProductsCount() {
    return products.length;
}

console.log(getProductsCount());

// 4. Omborda mavjud mahsulotlar
function getAvailableProducts() {
    let available = [];

    for (let i = 0; i < products.length; i++) {
        if (products[i].stock > 0) {
            available.push(products[i]);
        }
    }

    return available;
}

console.log(getAvailableProducts());

// 5. Omborda yo'q mahsulotlar
function getOutOfStockProducts() {
    let outOfStock = [];

    for (let i = 0; i < products.length; i++) {
        if (products[i].stock == 0) {
            outOfStock.push(products[i]);
        }
    }

    return outOfStock;
}

console.log(getOutOfStockProducts());
const getProducts = (req, res) => {  //Read
    res.json(products);
}
const getProductsByID = (req, res) => {  //Read
    const id = req.params.id;
    console.log(id)
    const result = products.find((product) => product.id == id);
    if (result == undefined) {
        res.status(404).json({ success: false, message: "Product Not Found" });
    }
    res.json({ success: true, result });
}

const addProducts = (req, res) => {
    const product = req.body;
    products.push({ id: products.length + 1, ...product });
    res.json({ success: true, product });
}

const updateProducts = (req, res) => {
    const id = req.params.id;
    const product = req.body;
    const result = products.find((product) => product.id == id);
    if (result == undefined) {
        res.status(404).json({ success: false, message: "Product Not Found" });
    }
    result.name = product.name;
    result.category = product.category;
    result.price = product.price;
    res.json({ success: true, result });
}

const delelteProducts = (req, res) => {
    const id = req.params.id;
    const result = products.find((product) => product.id == id);
    if (result == undefined) {
        res.status(404).json({ success: false, message: "Product Not Found" });
    }
    const index = products.indexOf(result);
    products.splice(index, 1);
    res.json({ success: true, result });
}
module.exports = [
    getProducts,
    getProductsByID,
    updateProducts,
    addProducts,
    delelteProducts
]
var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/swag-shop')
var Product = require('./model/product');
var WishList = require('./model/wishlist');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.post('/product', function (req, res) {
    var product = new Product();
    product.title = req.body.title;
    product.price = req.body.price;
    product.save(function (err, savedProduct) {
        if (err) {
            res.status(500).send({
                error: "Could not save product"
            });
        } else {
            res.status(200).send(savedProduct);
            /*res.send(savedProduct);*/
            /*res.json(savedProduct);*/

        }
    })


});

app.post('/wishlist', function (req, res) {
    var wishlist = new WishList();
    wishlist.title = req.body.title;

    wishlist.save(function (err, newWishList) {
        if (err) {
            res.status(500).send({
                error: "Could not create wishlist"
            });
        } else {

            res.send(newWishList);
        }
    })
})

app.get('/wishlist', function (req, res) {
    WishList.find({}).populate({
        path: 'products',
        model: 'Product'
    }).exec(function (err, wishLists) {
        if (err) {
            res.status(500).send({
                error: "Could not find wishlists"
            });
        } else {
            res.status(200).send(wishLists);
        }
    })
}); /*This is an example of how to populate linked items*/

app.put('/wishlist/product/add', function (req, res) {
    Product.findOne({
        _id: req.body.productId
    }, function (err, product) {
        if (err) {
            res.status(500).send({
                error: "Couldn't find product"
            });
        } else {
            /*Update params: (find the object,what to add) -- In our example we decide to add only the product _id*/
            WishList.update({
                _id: req.body.wishListId
            }, {
                $addToSet: {
                    products: product._id
                }
            }, function (err, wishList) {
                if (err) {
                    res.status(500).send({
                        error: "Couldn't find product"
                    });
                } else {
                    res.send(wishList);
                }

            })
        }
    })



});

app.get('/product', function (req, res) {
    Product.find({}, function (err, products) {
        if (err) {
            res.status(500).send({
                error: "Could not find the item"
            });
        } else {
            res.send(products);
        }

    });
})

app.listen(3000, function () {

    console.log("Swag Shop API is running on localhost:3000")

})

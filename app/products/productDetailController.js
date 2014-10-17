/**
 * Created by HSO on 10/16/14.
 */
(function(){
    "use strict";

    angular
        .module("productManagement")
        .controller("productDetailController",productDetailController);

    function productDetailController(){
        var vm = this;

        vm.product = {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2010",
            "description": "15 gallon capacity rolling garden cart",
            "cost": 20.00,
            "price": 32.99,
            "category": "garden",
            "tags": ["barrow", "cart", "wheelbarrow"],
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        };

        vm.title = "Product Detail: " + vm.product.tags.toString();

        if(vm.product.tags) {
            vm.product.tagList = vm.product.tags.toString();
        }
    }
}());
/**
 * Created by HSO on 10/16/14.
 */
(function(){
    "use strict";

    angular
        .module("productManagement")
        .controller("productDetailController",["product","productService",productDetailController]);

    function productDetailController(product, productService){
        var vm = this;

        vm.product = product;

        vm.title = "Product Detail: " + vm.product.productName;

        if(vm.product.tags) {
            vm.product.tagList = vm.product.tags.toString();
        }

        vm.marginPercent = productService.calculateMarginPercent(vm.product.price, vm.product.cost);
    }
}());
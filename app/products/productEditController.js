/**
 * Created by buggy on 10/27/14.
 */
(function () {
    "use strict";

    angular
        .module("productManagement")
        .controller("productEditController",['product',productEditController]);

    function productEditController(product){
        var vm = this;

        vm.product = product;

        if (vm.product && vm.product.productId) {
            vm.title = "Edit: " + vm.product.productName;
        }
        else {
            vm.title = "New Product";
        }
    }
}());
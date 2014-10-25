/**
 * Created by buggy on 10/15/14.
 */
(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("productListController", ["productResource", productListController]);

    function productListController(productResource) {
        var vm = this;

        productResource.query(function(data){
            vm.products = data;
        });

        vm.showImage = false;

        vm.toggleImage = function () {
            vm.showImage = !vm.showImage;
        }

    }
}());
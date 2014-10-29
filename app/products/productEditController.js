/**
 * Created by buggy on 10/27/14.
 */
(function () {
    "use strict";

    angular
        .module("productManagement")
        .controller("productEditController",['product','$state','$timeout','productService',productEditController]);

    function productEditController(product, $state, $timeout, productService){
        var vm = this;

        vm.product = product;

        vm.priceOption = "percent";

        vm.marginPercent = function(){
            return productService.calculateMarginPercent(vm.product.price, vm.product.cost);
        };

        vm.calculatePrice = function(){
            var price = 0;

            if(vm.priceOption=='amount'){
                price = productService.calculatePriceFromMarkupAmount(vm.product.cost, vm.markupAmount);
            }

            if(vm.priceOption=='percent'){
                price = productService.calculatePriceFromMarkupPercent(vm.product.cost, vm.markupPercent);
            }

            vm.product.price = price;

        };

        if (vm.product && vm.product.productId) {
            vm.title = "Edit: " + vm.product.productName;
        }
        else {
            vm.title = "New Product";
        }

        vm.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            vm.opened = !vm.opened;
        };

        vm.saveButtonClicked = true;
        vm.needsValidation = true;

        vm.submit = function(isValid) {
            if (isValid) {
                vm.product.$save();
                //toastr.success("Save Successful");
                vm.saveButtonClicked = false;
                $timeout(function(){vm.saveButtonClicked = true;}, 3000);
            }
            else {
                vm.needsValidation = false;
                $timeout(function(){vm.needsValidation = true;}, 5000);
            }
        };

        vm.cancel = function(){
            $state.go('productList');
        };

        vm.addTags = function(tags){
            if(tags){
                var array = tags.split(',');
                vm.product.tags = vm.product.tags ? vm.product.tags.concat(array) : array;
                vm.newTags = "";
            }
            else{
                alert("Please enter one or more tags separated by commas");
            }
        };

        vm.removeTag = function(idx){
            vm.product.tags.splice(idx, 1);
        }

    }
}());
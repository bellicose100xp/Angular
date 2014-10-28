/**
 * Created by buggy on 10/27/14.
 */
(function () {
    "use strict";

    angular
        .module("productManagement")
        .controller("productEditController",['product','$state','$timeout',productEditController]);

    function productEditController(product, $state, $timeout){
        var vm = this;

        vm.product = product;

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

        vm.submit = function(isValid) {
            if (isValid) {
                vm.product.$save();
                toastr.success("Save Successful");
                vm.saveButtonClicked = false;
                $timeout(function(){vm.saveButtonClicked = true;}, 3000);
            }
            else {
                alert("Please correct the validation errors first.");
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
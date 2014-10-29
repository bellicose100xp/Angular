/**
 * Created by HSO on 10/15/14.
 */
(function () {
    "use strict";
    var app = angular.module('productManagement',
        ['common.services',
            'ui.router',
            'ui.mask',
            'ui.bootstrap',
            'productResourceMock']);

    app.config(["$stateProvider", "$urlRouterProvider",
            function ($stateProvider, $urlRouterProvider) {
                // set default route
                $urlRouterProvider.otherwise("/");


                $stateProvider
                    .state("home", {
                        url: "/",
                        templateUrl: "app/welcomeView.html"
                    })

                    //product List
                    .state("productList", {
                        url: "/products",
                        templateUrl: "app/products/productListView.html",
                        controller: "productListController as vm"
                    })

                    //product Edit
                    .state("productEdit", {
                        abstract: true,
                        url: "/products/edit/:productId",
                        templateUrl: "app/products/productEditView.html",
                        controller: "productEditController as vm",
                        resolve: {
                           // productResource: "productResource",
                            product: function (productResource, $stateParams) {
                                var productId = $stateParams.productId;
                                return productResource.get({productId:productId}).$promise;

                            }
                        }
                    })
                    .state("productEdit.info",{
                        url:'/info',
                        templateUrl: "app/products/productEditInfoView.html"
                    })
                    .state("productEdit.price",{
                        url:'/info',
                        templateUrl: "app/products/productEditPriceView.html"
                    })
                    .state("productEdit.tags",{
                        url:'/info',
                        templateUrl: "app/products/productEditTagsView.html"
                    })

                    //product details
                    .state("productDetail", {
                        url: "/products/:productId",
                        templateUrl: "app/products/productDetailView.html",
                        controller: "productDetailController as vm",
                        resolve: {
                          //  productResource: "productResource",
                            product: function (productResource, $stateParams) {
                                var productId = $stateParams.productId;
                                return productResource.get({productId:productId}).$promise;

                            }
                        }

                    })
            }]
    );
}());
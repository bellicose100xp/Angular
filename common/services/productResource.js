/**
 * Created by buggy on 10/16/14.
 */
(function(){
    "use strict";

    angular
        .module("common.services")
        .factory("productResource",["$resource", productResource]);

    function productResource($resource){
        return $resource("/api/products/:productId")
    }

}());
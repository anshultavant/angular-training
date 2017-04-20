"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductFilterPipe = (function () {
    function ProductFilterPipe() {
    }
    ProductFilterPipe.prototype.transform = function (value, filterBy) {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return value.filter();
    };
    return ProductFilterPipe;
}());
exports.ProductFilterPipe = ProductFilterPipe;
//# sourceMappingURL=filter.pipe.js.map
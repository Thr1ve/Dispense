module.exports = function(Product) {

    Product.search = function(request){
        var found = this.findById(request, function(err, instances) {
            return instances;
        });
        return found;
    };
};




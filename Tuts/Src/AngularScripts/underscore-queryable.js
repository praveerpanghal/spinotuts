/// <reference path="jquery-1.8.2.js" />
/// <reference path="unserscore-min.js" />


(function () {

    function queryable(arr) {

        var self = this;

        self.array = arr;

        return self;
    }

    var extendedMethodNames = [
          "each"
        , "map"
        , "reduce"
        , "reduceRight"
        , "find"
        , "filter"
        , "where"
        , "findWhere"
        , "reject"
        , "every"
        , "some"
        , "contains"
        , "invoke"
        , "pluck"
        , "max"
        , "min"
        , "sortBy"
        , "groupBy"
        , "indexBy"
        , "countBy"
        , "shuffle"
        , "sample"
        , "toArray"
        , "size"
        , "partition"
        , "first"
        , "initial"
        , "last"
        , "rest"
        , "compact"
        , "flatten"
        , "without"
        , "union"
        , "intersection"
        , "difference"
        , "uniq"
        , "zip"
        , "unzip"
        , "object"
        , "indexOf"
        , "lastIndexOf"
        , "sortedIndex"
        , "findIndex"
        , "findLastIndex"
        , "range"
    ];

    function createMethod(methodName) {

        var templateString = [
            'function (){'
          , '  var expr = "_.' + methodName + '(this.array";'
          , '  for (var i = 0; i < arguments.length; i++) {'
          , '    expr += ", arguments[" + i + "]";'
          , '  }'
          , '  expr += ");";'
          , '  var result = eval(expr);'
          , '  return _.isArray(result) ? result.queryable() : result;'
          , '}'
        ].join("\n");

        try {
            eval("queryable.prototype." + methodName + " = " + templateString);

            console.log("methodName", methodName);
        } catch (e) {
            console.log("createMethod failed: " + templateString, e);
            return null;
        }
    }

    _.each(extendedMethodNames, function (methodName) {
        createMethod(methodName);
    });

    queryable.prototype.setArray = function (anotherArr) {
        this.array = anotherArr;
    };

    queryable.prototype.getArray = function () {
        return this.array;
    };

    // Extend array with a new entry point for Queryable.
    // ReSharper disable once NativeTypePrototypeExtending
    Array.prototype.queryable = function () {
        return new queryable(this);
    };
})();

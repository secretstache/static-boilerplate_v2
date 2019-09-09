module.exports = function(context, options) {
    var ret = "",
    offset = parseInt(options.hash.offset) || 0,
    limit = parseInt(options.hash.limit) || 100,
    i = (offset < context.length) ? offset : 0,
    j = ((limit + offset) < context.length) ? (limit + offset) : context.length;

    for(i,j; i<j; i++) {
    ret += options.fn(context[i]);
    }

    return ret;
}
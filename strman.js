function concat(a,b){
    return a + b;
}
function printFirst(a){
    return a[0];
}
function printLast(a){
    return a[a.length-1];    
}
function slice4(a){
    return a.slice(0,4);
}

exports.concat = concat;
exports.printFirst = printFirst;
exports.printLast = printLast;
exports.slice4 = slice4;

function fn(a) {
    return a;
}
/* 定义时不确定类型  泛型  <T> 定义一个t类型  根据内容自动判断*/
function fn1(a) {
    return a;
}
console.log(fn1(12));
/* Focus 使用泛型 */
let ad = fn1(12);
let ax = fn1("231");
console.log(ad, ax);
function f3(params) {
    return params.letsh;
}

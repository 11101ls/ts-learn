// object 类型限制
let b;
b = {
    name: "123",
};
console.log(b);
let d;
d = function (n1, n2) {
    return n1 + n2;
};
let e; //e为字符串数组
let f; //声明数组
// Focus  元组 长度固定
let h; //
// Focus  枚举  enum
// Focus 声明枚举类
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["femal"] = 1] = "femal";
})(Gender || (Gender = {}));
// 使用
let i;
i = {
    name: "kkk",
    gender: Gender.male
};
let xx;
const H1 = "111kafjpsaj";
// export class Hjsfhks {
//   name: string = "123";
// }
function add(a, b) {
    console.log(a + b);
}
export { add, H1 };

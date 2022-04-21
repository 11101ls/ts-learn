// object 类型限制
let b:{
  name:string,
  age?:number,// ? 可选
  [xxx: string]: any // 任意属性

}
b={
    name:"123",
}
console.log(b);

let d:(a:number,b:number)=>{}
d=function (n1:number,n2:number) {
    return n1+n2
}
let e:string[]; //e为字符串数组
let f:Array<number>;  //声明数组

// Focus  元组 长度固定
let h:[string,string]  //

// Focus  枚举  enum
// Focus 声明枚举类
enum Gender{
  male,
  femal
}
// 使用
let i: { name: string, gender: Gender;}
i={
  name:"kkk",
  gender:Gender.male

}

// 类型别名
type myType=1|2|3|4|5|6
let xx:myType




const H1="111kafjpsaj"
// export class Hjsfhks {
//   name: string = "123";
// }
function add(a: number, b: number) {
  console.log(a + b);
}
export { add, H1 };
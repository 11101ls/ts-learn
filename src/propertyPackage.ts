class PersonOne {
 public _name: string;// 公共属性 任意位置修改 访问
 private _age: number;//私有属性  只能在类内部修改
  constructor(name:string,age:number) {
    this._name=name
    this._age=age
  
  }
  // 定义方法  获取私有属性
  // getAge(){
  //   return  this._age
  // }
  get age(){
    return this._age
  }
  // 定义方法 修改私有属性
  // setAge(value:number){
  //   this._age=value
  // }
  // Focus 简写形式
  set age(value: number) {
    this._age=value
  }
}
const per=new PersonOne("孙",12)
per._name="zju"
console.log(per.age);
per.age=222
console.log(per.age);

console.log(per);

class c {
  // 属性简写
  constructor(public name:string) {
    
  }
}

// 接口  定义类和对象的结构 可以当做类型声明 多个接口同名  则取并集

interface myInterface{
  name:string;
  age:number;
}
/* 限制类结构    接口内的属性不能有实际值   只定义结构 不考虑值 */
interface myInter{
  name:string
  sayHellow():void;
}

/* Focus 使用类实现接口  */
class MyClass implements myInter {
  name: string;
  constructor(name: string) {
    this.name=name
  }
  
  sayHellow(): void {
  console.log("HELL");
  }
}
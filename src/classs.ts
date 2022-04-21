// class 
// Focus 抽象类 不允许创建实例 只能继承
abstract class Base {

  /* 实例属性*/
  // name:string="lllsds"
  // age:number=12321321
  name: string;
  age: number;
  // 构造函数
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;

  }
  // Focus 抽象方法 用于定义  然后子类实现
  abstract sshA():void
salla() {

    console.log(this.name, "saofsahfsi  ---Salla");

  }



}

class Person extends Base{
  // /* 实例属性*/
  // // name:string="lllsds"
  // // age:number=12321321
  // name: string;
  // age: number;
  // // 构造函数
  // constructor(name:string,age:number) {
  //     // console.log(this);
  //     // Focus this指向当前对象
  //     this.name=name;
  //     this.age=age
      
  // }
  // /* 类属性/静态属性  方法  Person.sta访问*/
  // // 只读
  // readonly sre: number = 222
  // static sta:number=88888

  // salla(){
    
  //   console.log(this.name,"saofsahfsi  ---Salla");
    
  // }
      ccc:string
    constructor(ccc:string,name:string,age:number){
      /* Focus 子类中必须调用父类的属性 */
      super(name,age)
    }
    salla(): void {
      // Focus 引用父类方法
      super.salla()
    }
  sshA(){
    console.log("2223231");
    
  }
 
}
// Focus   继承 自父类
class Dog extends Base{
  sshA(): void {
   console.log("DOG");
   
  }
// Focus重写方法 
run(){
  console.log(this.name,"run!!!!");
  
}
// Focus  覆盖
  salla() {

    console.log(this.name, "saofsahfsi  ---Salla  哇哇哇");

  }
}

// const a=new Person("123",555)
const a = new Dog("123", 555);

a.salla()
a.run()
a.sshA()
console.log(a,"000s","---");

export default Dog
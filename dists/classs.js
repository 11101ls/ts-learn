// class 
// Focus 抽象类 不允许创建实例 只能继承
class Base {
    // 构造函数
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    salla() {
        console.log(this.name, "saofsahfsi  ---Salla");
    }
}
class Person extends Base {
    constructor(ccc, name, age) {
        /* Focus 子类中必须调用父类的属性 */
        super(name, age);
    }
    salla() {
        // Focus 引用父类方法
        super.salla();
    }
    sshA() {
        console.log("2223231");
    }
}
// Focus   继承 自父类
class Dog extends Base {
    sshA() {
        console.log("DOG");
    }
    // Focus重写方法 
    run() {
        console.log(this.name, "run!!!!");
    }
    // Focus  覆盖
    salla() {
        console.log(this.name, "saofsahfsi  ---Salla  哇哇哇");
    }
}
// const a=new Person("123",555)
const a = new Dog("123", 555);
a.salla();
a.run();
a.sshA();
console.log(a, "000s", "---");
export default Dog;

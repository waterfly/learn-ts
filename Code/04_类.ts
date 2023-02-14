
/*
1. 修饰符，public, protected, private, readonly
2. 抽象类, abstract
3. 类类型，static, typeof
4. 把类当做接口
*/

// 1. 修饰符, public, protected, private, readonly
{
  class Greeter {
    public a: string;  // 默认 public
    protected b: string; // 子类可访问
    private c: string; // 只有自身可访问
    readonly d: string = "readonly"; // 只能在 定义 或 构造函数 内初始化
  }
}
 

// 2. 抽象类, abstract，abstract定义的方法必须实现
{
  abstract class GreeterBase {
    name : string,
    age: number,
    // 抽象类内可以定义细节
    printName(): void {
      console.log('Department name: ' + this.name);
    },
    // abstract 定义的方法必须在派生类中实现
    abstract getPerson() : object,
  }

  class Greeter extends GreeterBase {

    // 必须实现 abstract 定义的方法
    getPerson() : object {
      return {
        name: this.name,
        age: this.age,
      }
    }
  }
}

// 3. 类类型，static, typeof
{
  class Greeter {
    static a: string = "static";  // 默认 public
  }

  let greet : typeof Greeter = Greeter; // 表示 greet 是一个类类型，非实例类型
  console.log(greet.a);
}

// 4. 把类当做接口
{
  class Point {
    x: number;
    y: number;
  }

  interface Point3d extends Point {
    z: number;
  }

  let point3d: Point3d = {x: 1, y: 2, z: 3};
}


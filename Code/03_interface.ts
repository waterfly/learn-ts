// 1. interface 形式，类似协议
{
  // 基本属性、可选属性、只读属性、任意属性、函数属性
  {
    interface LabelledValue {
      label: string;
      color?: string; // ?  可选属性，表示该属性可有可无
      readonly x?: number; // readonly 只读属性，初始化赋值后不能改变
      [propName: string]: any; // 字符串索引签名，表示 LabelledValue 还可以有其他任意数量任意类型的属性
      mySearch: (source: string, subString: string) => boolean; // 函数类型，两个入参 (string, string)，一个返回值类型(boolean)，注意函数的入参名字可以不是 source、subString
    }

    function printLabel(labelledObj: LabelledValue) {
      console.log(labelledObj.label);
    }

    let myObj: LabelledValue = {
      size: 10,
      label: "Size 10 Object",
      mySearch: (source: string, subString: string) => {
        let result = source.search(subString);
        return result > -1;
      },
    };
    printLabel(myObj);
  }

  // 函数属性
  {
    interface FunctionValue {
      (source: string, subString: string): boolean; // 只有一个函数也可以写成这样
    }
  }

  // 可索引签名
  {
    interface StringArray {
      [index: number]: string; // 可索引签名，表示使用数组索引获取到的是string
    }

    let myArray: StringArray;
    myArray = ["Bob", "Fred"];

    let myStr: string = myArray[0];

    // 一个特例，可索引类型支持两种：字符串和数字，数字最后也是转化为字符串，所以数字必须是字符串返回类型的子类型
    {
      // 父类型
      class Animal {
        name: string;
      }

      // 子类型
      class Dog extends Animal {
        breed: string;
      }

      // 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
      interface NotOkay {
        [x: number]: Animal; // 错误，数字类型必须对应具体的子类型
        [x: string]: Dog;
      }
    }
  }

  // 类类型
  {
    // 实现接口
    {
      interface ClockInterface {
        currentTime: Date;
      }

      // 类 Clock 实现 ClockInterface 协议，关键词 implements
      class Clock implements ClockInterface {
        currentTime: Date;
        constructor(h: number, m: number) {}
      }
    }
  }

  // 接口继承，可继承多个接口
  {
    interface Shape {
      color: string;
    }

    interface PenStroke {
      penWidth: number;
    }

    // 可继承多个接口
    interface Square extends Shape, PenStroke {
      sideLength: number;
    }

    let square = <Square>{};
    square.color = "blue";
    square.sideLength = 10;
    square.penWidth = 5.0;
  }

  // 接口继承类，接口可以像继承类一样继承接口
  {
    class Control {
      private state: any;
    }

    interface SelectableControl extends Control {
      select(): void;
    }

    class Button extends Control implements SelectableControl {
      select() {}
    }
  }
}

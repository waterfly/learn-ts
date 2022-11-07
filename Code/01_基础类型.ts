/*
 * @Author: WaterFly
 * @Date: 2022-11-07 10:40:45
 * @Description:
 * Just enjoy code.
 */

// 1. 布尔值
{
  let isDone: boolean = false;
}

// 2. 数字
{
  let dec: number = 6;
}

// 3. 字符串
{
  let name: string = "bob";
}

// 4. 数组，两种形式 元素类型[] 或 Array<元素类型>
{
  let list: number[] = [1, 2, 3, 4];
  // or
  let array: Array<number> = [1, 2, 3, 4];
}

// 5. 元素 Tuple
{
  let x: [string, number] = ["string", 4];
}

// 6. 枚举
{
  enum Color {
    red,
    blue,
    yellow,
  }

  let c: Color = Color.red;
}

// 7. any，任意类型
{
  let a: any = [3, "4"];
}

// 8. void，表示没有任何类型，一般用于返回值
{
  // 表示没有任何返回值
  function test(a): void {
    console.log(a);
  }

  // 声明一个变量为void类型是没有意义的，只能赋值 null 或 undefined
  let a: void = null;
}

// 9. null 和 undefined，同js中的null 和 undefined，是任何类型的子类型，可以赋值给任何类型
{
  let n: null = null;
  let u: undefined = undefined;
}

// 10. never，表示用不存在的值的类型，一般用于函数直接抛出异常或函数内死循环不会返回
{
  // 函数抛出异常
  function error(msg): never {
    throw new Error(msg);
  }

  // 函数内死循环
  function deal(): never {
    while (true) {
      console.log("test never");
    }
  }
}

// 11. object，表示除基本类型（boolean,number,string,symbol,null,undefined）以外的其他类型（function, object）
{
  // 表示 o 为 object类型 或 null
  function create(o: object | null): void {
    console.log(o);
  }

  // 传入 object or null
  create({ prop: 0 }); // OK
  create(null); // OK

  // other will make error
  create(42); // Error
  create("string"); // Error
}

// 12. 类型断言，类似强制类型转换，用于编译器检查
{
  // 第一种写法，尖括号写法
  {
    let value: any = "hello";
    let length: number = (<string>value).length;
  }

  // 第二种写法，as写法，建议使用这种
  {
    let value: any = "hello";
    let length: number = (value as string).length;
  }
}

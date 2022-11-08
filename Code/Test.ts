/*
 * @Author: WaterFly
 * @Date: 2022-11-08 10:42:10
 * @Description:
 * Just enjoy code.
 */

{
  let idDone: boolean = false;

  let dec: number = 6;
  let name: string = "Bob";

  let list: number[] = [1, 2, 3, 4];
  let array: Array<number> = [5, 6, 7, 8];

  let tuple: [number, string] = [1234, "5678"];

  enum KindType {
    will,
    doing,
    done,
    finish,
  }

  let kind: KindType = KindType.doing;

  let test: any = [3, 4, "5"];

  let value: any = "hello";
  let count: number = (value as string).length;
  let lenght: number = (<string>value).length;
}

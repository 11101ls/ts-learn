function fn(a:number):number {
  return a 
}
/* 定义时不确定类型  泛型  <T> 定义一个t类型  根据内容自动判断*/
function fn1<T>(a:T):T {
   return a
}
  
console.log(fn1(12));
/* Focus 使用泛型 */
let ad = fn1(12);
let ax=fn1<string>("231")
console.log(ad,ax);


/* 通过接口规范 泛型 的值  t 必须 一个实现类或者接口 */
interface inter{
  letsh:number
}

function f3<T extends inter>(params:T):number {
    return params.letsh
}
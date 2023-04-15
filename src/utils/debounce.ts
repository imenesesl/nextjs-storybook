type Func = (...args: any[]) => any;

export default function debounce<T extends Func>(func: T, delay: number): T {
  let timerId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay) as ReturnType<typeof setTimeout>;
  } as T;
}

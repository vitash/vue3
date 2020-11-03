export { }

{
    function fhdz<A extends any[], R>(fn: (this: void, ...args: A) => R, delayMs = 200) {
        let timerId = 0
        return (...args: A) => new Promise<R>((res) => {
            clearTimeout(timerId)
            timerId = setTimeout(() => res(fn(...args)), delayMs)
        })
    }

    let log1 = fhdz(<T, R>(a: T, r: R) => (console.log(1, a), r))
    let r1 = await log1("", 3)
    console.log(r1);

    setTimeout(log1, 100, 3) // log 
    setTimeout(log1, 400, 32) // - 
    setTimeout(log1, 500, 34) // - 
    setTimeout(log1, 600, 344)
    setTimeout(log1, 700, 3444)

    class A {
        a = 3
        fnA() { return this.a; }
    }
    let fnA = fhdz(new A().fnA)
}

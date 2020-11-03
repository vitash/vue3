
/* export */ const Smb2 = Symbol("ss")

export const AA = {
    val: 3,
    val2: { value: "3" },
    [Smb2]: "ss"
}

type UnwrapAA<T> = {
    [K in keyof T]: T[K] extends { value: infer V } ? V : T[K]
}
type UnwrapAA1 = UnwrapAA<typeof AA>

class A1 {
    public static k1 = "ds" as const
    private static k2 = "ds2" as const
    private static readonly Smb1 = Symbol("sd")
    static get_obj() {
        return {
            val: 3,
            [A1.k1]: 3,
            [A1.k2]: 3,
            [A1.Smb1]: "ds"
        }
    }
}
function test_smb1() {
    let a = A1.get_obj()
    // a 的类型提示错了
}


interface Ref<T> {
    val: T,
    num: 1 | 2
}
interface Computed<T> extends Ref<T> {
    readonly val: T // 类型不严谨，甚至是错误的，类型应该是允许更粗的
    num: 1 // | 2 | 3 // error 类型应该是不可变的，在只读的 Ref 上是可用的
}

(ref: Ref<number>, c: Computed<number>) => {
    ref = c
    ref.val = 3
}

(a: Readonly<boolean>) => {

}

// type WatchOpt<T extends string> = number | (T extends 'a' | 'b' ? T : 'a' | 'b')
type WatchOpt<T extends string> = number | T
type WatchOpt2 = { a: number }
function watch1<T extends string>(a: WatchOpt<T>, b?: WatchOpt2 | { a: 'a' | 'b' }) {
    // watch1("ad", "sd")

}
{
    interface A {
        (): number
        a: string
        f1(): void
    }
    (a: A & ThisType<{ b: number }>) => {

    }
} {
    type ObjectDescriptor<D, M> = {
        data?: D;
        methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
    };

    function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
        let data: object = desc.data || {};
        let methods: object = desc.methods || {};
        return { ...data, ...methods } as D & M;
    }

    let obj = makeObject({
        data: { x: 0, y: 0 },
        methods: {
            moveBy(dx: number, dy: number) {
                this.x += dx;
                this.y += dy;

            },
        },
    });
} {
    // let objA: { fn1(this: { name: string }): void } = {
    //     fn1() {
    //         return {
    //             key: 33,
    //             name: this.name,
    //             fn2() {
    //                 return this.key + 1000
    //             }
    //         }
    //     }
    // }
} {
    type PropFn = <T>(opt: { a: T, isRequired?: true, props?: any, }) => T | undefined

    function p<T>(p1: PropFn) { }
    type PropDef = <T>(props: any) => T
} {
    function emits<E extends (() => 1) | ReadonlyArray<string>>(e: E) { }
    emits(["sd", "ds"] as const)
    emits(() => 1)

    function emits2<E extends Record<string, (...args: any[]) => any>>(e: E) { }
    emits2({
        open() { }
    })
} {
    // https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABMMBBAPAFQHwAo4AOUAjAFyIDeiAhuZgDTJjG62KYCU5AbnDACaIAvh0rCAUOJSpcFcYgU1yVQgFMwuUVSHD68xShbUt+xYuoA6NRo6mJIydNl22VAeQDMuu4dYmzZpYCFlBwAGIwAB6q-Jp2QuIO4lAAngSqiKiIALxi1po8fIIJTnKByoj5WsI11ADOmXpmvsaUdoFW6TbxibalLhVVYjo69YgQCHVQTQbMfm0B5p3qcWYJIkA
    type EmitFns = {
        onClose(): void
        onOpen(u: { name: string }): void
    }
    type EmitEvents<T> = [T] extends [any] ? {
        [K in keyof T]:
        T[K] extends (...args: infer Args) => any
        ? (event: K, ...args: Args) => void
        : (...args: any[]) => void
    } : never
    type T1 = EmitEvents<EmitFns>

    type Fn1 = ((a: 1 | 2) => 1 | 2) & ((a: 2 | 3) => 2 | 3)
    (fn1: Fn1) => {

    }

    function compE<E>(option1: {
        emits: E
    }, options: {
        setup(e: EmitEvents<E>): void
    }) { }

    compE({
        emits: {
            onClose() { }
        },
    }, {
        setup(e) {
            e
        }
    })
} {
    function fnA<T>(opt1: { a: T, fn1(a: T): void }) { }

    fnA({
        a: { open() { } } as const,
        fn1(a) {
            a.open()
        }
    })
} {
    const a = ([1, 2]).map

}

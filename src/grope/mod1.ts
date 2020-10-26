
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



const a = new Proxy({} as Record<PropertyKey, any>, {
    get(target, key: string) {
        console.log(typeof key) // 真特么坑人，key 永远不会是 number 类型
        console.log(Number.isInteger(key)) // 这个永远是 false
        return target[key]
            || (key == "a" && "aaa")
            || (key == "b" && "bbb")
            || ((Number.isInteger(+key) && +key > 0) ? key : -1)
            || undefined
    }
})

const k1: PropertyKey = 3
console.log(a[33])


Reflect.get({}, "1")
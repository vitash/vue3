import { reactive, readonly, toRefs, Ref, watchEffect } from "vue"
import { ref } from "vue"
import { AA } from "./mod1"

AA.val.toFixed() // AA[Smy2] 是不可访问的

let a = reactive({ value: 3 })
let a2 = ref(3)
a2.value
let a3 = ref<1 | 2>()
a3.value

const count = ref(0)  // count: { value: number }
const state = reactive({
    count
})

console.log(state.count) // 0

state.count = 1 // count: number
console.log(count.value) // 1


let b1 = ref([ref({ a: 3 })])
b1.value.filter
let b2 = readonly(b1)
let b3 = b1.value[0].value.a = 4
// let b33 = b1.value[0].a

let b4 = [ref({ a: 3 })] as const


const book = reactive({
    author: 'Vue Team',
    year: '2020',
    title: 'Vue 3 Guide',
    description: 'You are reading this book right now ;)',
    price: 'free'
})

let { author, title } = toRefs(book)

let w1 = watchEffect(effect => {
    
})
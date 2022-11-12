<template>
    <div>
        <!-- {{ hello }} -->
    </div>
</template>

<script setup lang="ts">
// 原始類型
let hello: string = "Hello";
let num: number = 123
let str: string = "abc";

// Array  有兩種定義方式
let arr1: number[] = [1,2,3];
let arr2: Array<number | string> = [1,2,3,"abc"];

// 元祖
let tuple: [number, string] = [0,"asd"]
// tuple.push(2)  //可以新增新元素，但是要這樣使用
// tuple[2]  //但是不能訪問

// function
let add = (x: number, y: number): number => x + y

let compute: (x: number, y: number) => number
compute = (a, b) => a + b


//Object
let obj: {x: number, y: number} = {
    x: 1,
    y: 2
}
obj.x = 3;

// symbol
let s1: symbol = Symbol();
let s2 = Symbol();

//undefined, null
let un: undefined = undefined;
let nu: null = null;

num = undefined;  //undefined和null是所有類型的子類型，但是要設置 ，strictNullChecks為false


// void 沒有任何返回值的類型
let noReturn = () => {}

//any 任何類型，不建議使用，因為那就不用用ts了
let x;
x = 1
x = "asd"
x = false

//never 永遠不會有返回值的類型
//第一種: 拋出異常
let error = () => {
    throw new Error("error")
}
//死循環
let endless = () => {
    while(true){}
}


// 數字枚舉  ， 有反向映射
enum Role {
    Reporter,
    Developer,
    Maintainer,
    Owner,
    Guest
}

//字串枚舉
enum Message {
    Success= "成功了",
    Fail= "失敗了"
}

// 將數字枚舉和字串枚舉混用，形成異構枚舉，但是容易混淆，不建議使用
enum Answer {
    N,
    Y = 'Yes'
}

enum Char {
    //const 
    a,
    b = Char.a,
    c = 1 + 4,

    //computed
    d = Math.random(),
    e = "123".length
}


//const enum

const enum Month {
    Jan,
    Feb,
    Mar

}


class Dog {
    constructor(public name: string) {
        this.name = name;
        
    }
    static legs = 4;
}
class A extends Dog {
    constructor(name: string) {
        super(name);
    }
}

console.log(A.legs)

// Dog.legs = 5;
// console.log(Dog.legs)
// console.log(A.legs)
// A.legs = 100;
// console.log(Dog.legs)
// console.log(A.legs)

Dog.legs = 500;
console.log(Dog.legs)
console.log(A.legs)
console.log(Dog.legs === A.legs)




class Auto {
    state = 1
    private state2 = 2
}
interface AutoInterface extends Auto {

}
interface AutoInterface2 {
    state: number
    state2: number
}

// class C implements AutoInterface2 {
//     state = 2
//     private state2 = 3
// }

interface Log<T = string> {
    (value: T): T
}
let myLog: Log = function(value) {
    console.log(value)
    return value;
}

myLog("1")

interface Obj123 {
    a: number,
    b: string
}

type key= Readonly<Obj123>

</script>
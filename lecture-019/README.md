# Lecture 18 | JavaScript Interview Series

## Agenda for today

- [Null vs Undefined vs Not defined](https://youtu.be/KP85Ys4GLu8)
- [Comparison Operators and Truthy Falsy Values](https://youtu.be/-Mnaj-GaJro)
- [Shallow Copy and Deep Copy from every methord possible](https://youtu.be/nohXAwhw-mY)
- [Array.isArray() Methord](https://youtu.be/hPNOeEH4X9k)

## Undefined in JavaScript

```js
console.log(a); // but it is undefined, since it is not valued yet
let a = 2; // gets memory location
```

> Output : `undefined`

```bash
> node undefined.js
/Users/milind/Documents/git-repos/pepcoding-webdev/lecture-019/undefined.js:1
console.log(a);
            ^

ReferenceError: Cannot access 'a' before initialization
    at Object.<anonymous> (/Users/milind/Documents/git-repos/pepcoding-webdev/lecture-019/undefined.js:1:13)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47
```

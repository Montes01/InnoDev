export type Fact = {
    value: `+${number}` | `+${number}%` | `-${number}` | `-${number}%`
    fact:string
}
export type Company = {
    name:string,
    image?:string
}
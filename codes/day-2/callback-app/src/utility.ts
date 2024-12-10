// function filterValues(input: number[], loginFnRef: logicFnType): number[] {
//     const output: number[] = []
//     for (const element of input) {
//         const status = loginFnRef(element)
//         if (status)
//             output.push(element)
//     }
//     return output
// }

import { logicFnType } from "./types"

export function filterValues<T>(input: T[], loginFnRef: logicFnType<T>): T[] {
    const output: T[] = []
    for (const element of input) {
        const status = loginFnRef(element)
        if (status)
            output.push(element)
    }
    return output
}



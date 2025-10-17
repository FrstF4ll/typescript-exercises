/**
 * Complete the function body
 *
 * To run the tests : `deno test src/arrays/arrays_test.ts`
 *
 * As you will see, TypeScript will considerably
 * improve the autocomplete experience in your editor.
 */

export function removeNumbersBelowThreshold(
  array: number[],
  threshold: number,
): number[] | [] {
return array.filter((el) => el >= threshold)
}

export function filterStringByLength(
  array: string[],
  minLength: number,
  maxLength: number,
): string[] | [] {
  return array
  .filter((el) => el.length >= minLength)
  .filter((el) => el.length <= maxLength)
}
export function getOnlyTheLowercaseLettersOfTheString(string: string): string {
  const lowerCase = /[a-z]/g
  const onlyLower:string = string.match(lowerCase)!.join('')
  return onlyLower
}
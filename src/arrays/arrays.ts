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
  const minArr = array.filter((el) => el.length >= minLength)
  const filteredArr = minArr.filter((el) => el.length <= maxLength)
  return filteredArr
}
export function getOnlyTheLowercaseLettersOfTheString(string: string): string {
return string
}
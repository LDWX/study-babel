export function printMe() {
  console.log('I get called from print.js!');
}

export function writePaper() {
  console.log("this is writePaper")
}

export let name = "shenxin"

export function changeName (n) {
  name = n
}

export function getName() {
  return name
}

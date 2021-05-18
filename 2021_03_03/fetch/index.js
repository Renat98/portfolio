import fetch from "node-fetch";

let values = [10, 20, 30];
let urls = [
  "https://kodaktor.ru/api/m/",
  "https://kodaktor.ru/api/MS2/",
  "https://kodaktor.ru/api/MS3/",
];
async function task(values, urls) {
  const headers = { "Content-Type": "application/json" };
  let part;
  let res = [];
  let output = {};
  for (let i = 0; i < values.length; i++) {
    res[i - 1] ? (part = "/" + res[i - 1]) : (part = "");
    output = await fetch(urls[i] + values[i] + part, { headers }).then((x) =>
      x.json()
    );
    res.push(output.result);
  }
  return res;
}
console.log(await task(values, urls));

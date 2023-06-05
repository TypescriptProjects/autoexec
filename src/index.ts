import sha1 from "crypto-js/sha1";

/** dfs前端直传签名校验 Start*/
const time = new Date().getTime() / 1000;

const timestamp: number = parseInt(time.toString());
const nonce = sha1(new Date().getTime().toString()).toString();
const upload_token =
  "2_eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODQzNzc0MTAsImlzcyI6InpmcyIsIm5hbWUiOiJ1cGxvYWQifQ.BWSbNLrKZ_tMk6KunFYZk-cUvBDLYXsgbc8lomh9IWk";

const secret = [nonce, timestamp, upload_token].sort().join("");
const signature = sha1(secret).toString().toUpperCase();

console.log("timestamp:", timestamp);
console.log("nonce:", nonce);

console.log("signature:", signature);
/** dfs前端直传签名校验 End */

// 正则表达式
const isMobile = /Mobi|Android|iPhone/i.test("ipho233");
console.log(isMobile);

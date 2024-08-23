const accountId = 12345
let accountEmail = "anni@gmail.com"
var accountPass = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2

accountEmail = "abc@gmail.com"
accountPass = "23451"
accountCity = "Bengalr"

/*
Prefer not to use Var
because of issue in block scope and functional scope
*/

// console.log(accountPass)
console.table([accountId, accountEmail, accountPass, accountCity, accountState])


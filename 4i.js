		function Change(amount, coins) {
    let change = [],
        count = 0,
        sum = 0;
    while (sum != amount && !(amount < 0)) {

        change.push(coins[count]);
        sum = change.reduce((a, b) => a + b);

        if (sum > amount) {
            change.pop();
            count++;
        }
    }
    return change;
}
const coins = [25, 10, 5, 2, 1];
console.log(Change(66, coins));
console.log(Change(34, coins)); 
console.log(Change(43, coins));
console.log(Change(-22, coins));


// Shoprite Discount App

let disc10 = 10/100;
let disc20 = 20/100;
let disc30 = 30/100;
let disc40 = 40/100;
let disc50 = 50/100;
let disc80 = 80/100;

let discount10 = disc10 * price;
let discount20 = disc20 * price;
let discount30 = disc30 * price;
let discount40 = disc40 * price;
let discount50 = disc50 * price;
let discount80 = disc80 * price;

let price = 10000000;

if(price <= 10000) {
    alert(`Hey ${firstName}!`);
    alert(`You have a discount of N${discount10} off the total sum of all your purchased items, therefore, you are paying the sum of N${price - discount10}`);
} else if( price <= 100000) {
    alert(`Hey ${firstName}!`);
    alert(`You have a discount of N${discount20} off the total sum of all your purchased items, therefore, you are paying the sum of N${price - discount20}`);
} else if( price <= 500000) {
    alert(`Hey ${firstName}!`);
    alert(`You have a discount of N${discount30} off the total sum of all your purchased items, therefore, you are paying the sum of N${price - discount30}`);
} else if( price <= 750000) {
    alert(`Hey ${firstName}!`);
    alert(`You have a discount of N${discount40} off the total sum of all your purchased items, therefore, you are paying the sum of N${price - discount40}`);
} else if( price <= 1000000) {
    alert(`Hey ${firstName}!`);
    alert(`You have a discount of N${discount50} off the total sum of all your purchased items, therefore, you are paying the sum of N${price - discount50}`);
} else if( price >= 1000001) {
    alert(`Hey ${firstName}!`);
    alert(`You have a discount of N${discount80} off the total sum of all your purchased items, therefore, you are paying the sum of N${price - discount80}`);
}

module.exports = function toReadable (number) {
let text = '';
const first = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const second = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
let result = '';
if (number === 0) {
    result = 'zero';
}
else {
     if (Math.floor(number % 100) < 20) {
         result = first[Math.floor(number % 100)];
        } 
        else {
            ((Math.floor(number % 100) !== 0) && (Math.floor(number % 100) >= 20)) ?
            result = second[Math.floor((number % 100) / 10)] + ' ' + first[Math.floor((number % 100) % 10)] :
            result = second[Math.floor((number % 100) / 10)];
            }
        if (Math.floor(number / 100) !== 0) {
            result = first[Math.floor(number / 100)] + ' hundred ' + result; 
        }
     }

 if (result.slice(-1) === ' ') {result = result.slice(0, -1)};
 return result;
}
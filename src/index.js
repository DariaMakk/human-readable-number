module.exports = function toReadable (number) {
  let result = '';
  const numbers = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'one hundred',
    200: 'two hundred',
    300: 'three hundred',
    400: 'four hundred',
    500: 'five hundred',
    600: 'six hundred',
    700: 'seven hundred',
    800: 'eight hundred',
    900: 'nine hundred',
  }
  
  let a = (Math.floor(number / 100)) * 100;
  let b = Math.floor((number % 100) / 10) * 10;
  let c = number % 10;
  if (9 < b && b < 20) c += 10, b = 0;

  if (number === 0) return 'zero';  
  return (`${numbers[a]} ${numbers[b]} ${numbers[c]}`).replace(/ {1,}/g,' ').trim();
}

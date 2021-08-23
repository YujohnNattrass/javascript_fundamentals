function stringToInteger(str) {
  const STR_TO_DIGITS = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 0: 0 }
  let number = 0;
  let multiplier = 10 ** (str.length - 1)

  for (let index = 0; index < str.length; index += 1) {
    number += (STR_TO_DIGITS[str[index]] * multiplier);
    multiplier /= 10;
  }

  return number;
}

stringToInteger('4321');      // 4321
stringToInteger('570');       // 570

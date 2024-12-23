export const useFirstLetterCapital = (str) => {
  let firstChar = str.charAt(0);
  let restOfChar = str.substring(1);

  let sentence = firstChar.toUpperCase() + restOfChar.toLowerCase();

  return sentence;
};

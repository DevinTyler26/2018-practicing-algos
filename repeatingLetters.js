const string = "This is a string with repeating letters";

const repeat = string => {
  output = {};
  let len = string.length;
  for (let i = 0; i < len; i++) {
    if (output[string[i]]) {
      output[string[i]] += 1;
    } else {
      output[string[i]] = 1;
    }
  }
  console.log(output);
  findHighest(output);
};

const findHighest = obj => {
  highestValue = 0;
  highestLetter = "";
  for (key in obj) {
    if (obj[key] > highestValue) {
      if (key !== " ") {
        highestValue = obj[key];
        highestLetter = key;
      }
    }
  }
  console.log(highestValue, highestLetter);
};

repeat(string);

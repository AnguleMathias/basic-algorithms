/**
 * check through the letters of a magazine
 * and gives possibility to contruct a harmlessRansomNote cut of from magazine
 *
 * return boolean if we have enough words to write the harmlessRansomNote
 */

const harmlessRansomNote = (noteText, magazineText) => {
  // store each word in an array with assumptionno punctuations and all are lower case
  const noteArray = noteText.split(" ");
  const magazineArray = magazineText.split(" ");
  const magazineObject = {};

  // using a hash table
  // Check through magazine text and return each word count
  magazineArray.forEach((word) => {
    if (!magazineObject[word]) {
      magazineObject[word] = 0;
    }
    magazineObject[word]++;
  });
};

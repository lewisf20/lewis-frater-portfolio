let indexChittr = 0;
let indexLearn = 0;
let indexEport = 0;

imageChange();

function imageChange() {
  //Get images via their class
  const chittrImages = document.querySelectorAll('.chittrImage');
  const learningImages = document.querySelectorAll('.learningImage');
  const eportfolioImages = document.querySelectorAll('.eportfolioImage');

  //Set display to none for each image
  eachImage(chittrImages);
  indexChittr++;

  eachImage(learningImages);
  indexLearn++;

  eachImage(eportfolioImages);
  indexEport++;

  if (indexChittr > chittrImages.length) {
    indexChittr = 1;
  }
  if (indexLearn > learningImages.length) {
    indexLearn = 1;
  }
  if (indexEport > eportfolioImages.length) {
    indexEport = 1;
  }

  //Set one image to display block
  chittrImages[indexChittr - 1].style.display = 'block';
  learningImages[indexLearn - 1].style.display = 'block';
  eportfolioImages[indexEport - 1].style.display = 'block';

  //call itself every 3.5 seconds
  setTimeout(imageChange, 3500);
}

//Set display to none for each image
function eachImage(imageArray) {
  imageArray.forEach((element) => {
    element.style.display = 'none';
  });
}

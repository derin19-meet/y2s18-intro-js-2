// YOUR TASK: Add more pictures!
var pictures = ['dog.jpg' ,"dog1.jpg", "dog2.jpg", 
"dog3.jpg", "dog4.jpg", "dog5.jpg"];

var currentIndex = 0;


function showNextPicture() {
  currentIndex++; // increment current picture
  // if currentIndex is too large, start from the beginning again
  if (currentIndex >= pictures.length) {
    currentIndex = 0;
  }
  document.getElementsByTagName("img")[0].src ="./imgs/"+pictures[currentIndex]
  // YOUR TASK: Finish this function!
}




document.getElementsByTagName("img")[0].addEventListener("click", 
	function(event)
{showNextPicture()});
 
 const fontControl = document.getElementById('font-size-control');
 const textElement = document.getElementById('text');

 // Add an event listener to the font-size control input
 fontControl.addEventListener('input', textSize); 
 
 function textSize () {
     // Update the font size of the text element
     textElement.style.fontSize = fontControl.value + 'px';
 }
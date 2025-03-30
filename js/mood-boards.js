
// Mood board collage layout
document.addEventListener('DOMContentLoaded', function() {
  const moodBoardContainer = document.getElementById('mood-board-container');
  
  if (moodBoardContainer) {
    // Create a layout with varying spans
    moodboardImages.forEach((image, index) => {
      // Create wavy pattern with varying spans
      let colSpan = "md:col-span-4";
      let rowSpan = "md:row-span-1";
      
      // Create wave pattern with varying spans
      if (index % 7 === 0) {
        colSpan = "md:col-span-6";
        rowSpan = "md:row-span-2";
      } else if (index % 7 === 1) {
        colSpan = "md:col-span-3";
        rowSpan = "md:row-span-1";
      } else if (index % 7 === 2) {
        colSpan = "md:col-span-3";
        rowSpan = "md:row-span-1";
      } else if (index % 7 === 3) {
        colSpan = "md:col-span-4";
        rowSpan = "md:row-span-2";
      } else if (index % 7 === 4) {
        colSpan = "md:col-span-5";
        rowSpan = "md:row-span-1";
      } else if (index % 7 === 5) {
        colSpan = "md:col-span-3";
        rowSpan = "md:row-span-1";
      } else {
        colSpan = "md:col-span-4";
        rowSpan = "md:row-span-1";
      }
      
      // Create element with appropriate classes
      const moodBoardItem = document.createElement('div');
      moodBoardItem.className = `mood-board-item ${colSpan} ${rowSpan} animate-on-scroll`;
      moodBoardItem.innerHTML = `<img src="${image}" alt="Mood Board Image ${index + 1}">`;
      
      // Add to container
      moodBoardContainer.appendChild(moodBoardItem);
    });
  }
});

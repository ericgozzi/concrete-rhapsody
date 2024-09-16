document.addEventListener('DOMContentLoaded', function() {
    const draggables = document.querySelectorAll('.draggable');
  
    draggables.forEach(draggable => {
      draggable.onmousedown = function(event) {
        // Calculate the offset between the mouse pointer and the element's position
        const shiftX = event.clientX - draggable.getBoundingClientRect().left;
        const shiftY = event.clientY - draggable.getBoundingClientRect().top;
  
        function moveAt(pageX, pageY) {
          draggable.style.left = pageX - shiftX + 'px';
          draggable.style.top = pageY - shiftY + 'px';
        }
  
        // Move the element to follow the mouse cursor
        function onMouseMove(event) {
          moveAt(event.pageX, event.pageY);
        }
  
        // Attach the move event handler to the document
        document.addEventListener('mousemove', onMouseMove);
  
        // Release the element when the mouse button is released
        draggable.onmouseup = function() {
          document.removeEventListener('mousemove', onMouseMove);
          draggable.onmouseup = null;
        };
  
        // Prevent the default action (like text selection)
        draggable.ondragstart = function() {
          return false;
        };
      };
    });
  });
  
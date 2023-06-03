/*Enter your js code here*/
function navigate(direction, left, right) {
  // Handle navigation logic here
  if (direction === 'left') {
    // Perform left navigation
    window.location.href = left;
  } else if (direction === 'right') {
    // Perform right navigation
    window.location.href = right;
  }
}

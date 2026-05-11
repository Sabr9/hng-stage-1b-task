/**
 * Function to update the time in milliseconds.
 * We use Date.now() to get the current epoch time.
 */
function updateCurrentTime() {
    // Look for the specific data-testid required by the task
    const timeElement = document.querySelector('[data-testid="test-user-time"]');
    
    if (timeElement) {
        // Update the text content with the current milliseconds
        timeElement.textContent = Date.now().toString();
    }
}

// 1. Initial call so the time appears immediately on page load
updateCurrentTime();

// 2. Update the time every 10 milliseconds to keep it "live" 
// and ensure the test runner sees a fresh value.
setInterval(updateCurrentTime, 10);
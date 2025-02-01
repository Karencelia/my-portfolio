function updateUTCTime() {
    const utcElement = document.querySelector('[data-testid="currentTimeUTC"]');
    utcElement.style='text-align:center';
    if (!utcElement) return; // Prevent errors if the element is not found

    const now = new Date();
    const utcTime = now.toISOString().replace('T', ' ').substring(0, 19) + " UTC";
    
    // Correct string formatting
    utcElement.textContent = `Current UTC Time: ${utcTime}`;
}

// Update time on page load
updateUTCTime();

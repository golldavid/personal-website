/**
 * Custom ROT13-style encryption for contact information obfuscation
 * Created to decrypt previously encrypted personal contact details
 */

String.prototype.rotX = function() {
    // Character set including letters, numbers, and common punctuation
    const charset = "- abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,:@";
    const offset = Math.floor(charset.length / 2); // Split charset in half
    let result = "";
    
    for (let char of this) {
        const index = charset.indexOf(char);
        
        if (index === -1) {
            // Character not in charset, keep unchanged
            result += char;
        } else {
            // Apply ROT transformation: swap between first and second half
            let newIndex;
            if (index < offset) {
                // First half maps to second half
                newIndex = index + offset;
            } else {
                // Second half maps to first half  
                newIndex = index - offset;
            }
            result += charset.charAt(newIndex);
        }
    }
    
    return result;
};

/**
 * Display function to decrypt and show obfuscated contact information
 * @param {string} elementId - ID of the HTML element to update
 * @param {string} encryptedText - The encrypted text to decrypt and display
 */
function show(elementId, encryptedText) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = encryptedText.rotX();
    }
}
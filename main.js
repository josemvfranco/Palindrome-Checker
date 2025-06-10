document.getElementById('checkBtn').addEventListener('click', function () {
    const inputText = document.getElementById('inputText').value.trim();
    const resultDiv = document.getElementById('result');

    if (inputText.length === 0) {
        resultDiv.textContent = 'Please enter some text.';
        resultDiv.style.color = 'red';
        return;
    }

    // Normalize the string: remove non-alphanumeric chars and convert to lowercase
    const normalized = inputText.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Check palindrome
    const isPalindrome = normalized === normalized.split('').reverse().join('');

    if (isPalindrome) {
        resultDiv.textContent = `"${inputText}" is a palindrome!`;
        resultDiv.style.color = 'green';
    } else {
        resultDiv.textContent = `"${inputText}" is not a palindrome.`;
        resultDiv.style.color = 'red';
    }
});

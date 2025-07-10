const textInput = document.getElementById('textInput');
const charCount = document.getElementById('charCount');

const maxChars = 100;

function updateCharCount() {
    let count = textInput.value.length;
    let counterSpan = charCount.querySelector('span');
    
    counterSpan.textContent = count;
    
    if (count > maxChars) {
        charCount.className = 'limit-warning';
        charCount.innerHTML = `<span>${count}</span> characters - ${count - maxChars} over limit! ⚠️`;
    } else {
        charCount.className = '';
        let emoji = '';
        
        
        if (count > maxChars * 0.8) {
            emoji = ' 😬';
        } else if (count > maxChars * 0.5) {
            emoji = ' 😊';
        } else if (count > 0) {
            emoji = ' 👍';
        }
        
        charCount.innerHTML = `<span>${count}</span> / ${maxChars} characters${emoji}`;
    }
}

textInput.addEventListener('input', updateCharCount);

updateCharCount();
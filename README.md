# Counter_App
## Date: 10/7/2025
## Objective:
To build a live character counter using JavaScript that dynamically displays the number of characters entered into a textarea — similar to what you see in Twitter or feedback forms.

## Tasks:

#### 1. Create the HTML Structure:
Add a ```<textarea>``` for user input.

Place a ```<div> or <p>``` below it to show the live character count.

Include a label or heading like “Write your message”.

#### 2. Style with CSS:
Center the layout using margin or flexbox.

Style the textarea with border, padding, and font size.

Style the counter to be bold and place it neatly below the input area.

#### 3. Add JavaScript Functionality:
Use addEventListener("input", ...) on the textarea.

Inside the function, get the length of the value (.value.length).

Update the counter element with this number in real time.

#### 4. Enhancements:
Set a maximum character limit (e.g., 100) and show remaining characters.

Change the text color if the user exceeds the limit.

Add emojis or icons using Unicode for visual feedback.
## HTML Code:
```
<!DOCTYPE html>
<html>
<head>
    <title>TextBuddy - Character Counter</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
</head>
<body>
    <header>
        <h1><i class="fas fa-keyboard"></i> TextBuddy</h1>
        <p class="tagline">Count your characters in real-time</p>
    </header>

    <div class="message-box">
        <h2>Write your message</h2>
        <textarea id="textInput" placeholder="Type something here... (max 100 characters)"></textarea>
        <p id="charCount"><span>0</span> characters</p>
        <div class="tips">
            <p>Tip: Keep your message concise for better readability!</p>
        </div>
    </div>
    
    <footer>
        <p>Made with <span class="heart"></span> by Nanda Kishore R 2025</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
```

## CSS Code:

```
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f7fa;
    color: #333;
    line-height: 1.6;
}

header {
    background-color: #4a6fa5;
    color: white;
    text-align: center;
    padding: 1.5rem 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

header h1 {
    margin: 0;
    font-size: 2.2rem;
}

.tagline {
    margin: 5px 0 0;
    font-size: 1rem;
    opacity: 0.9;
}

.message-box {
    max-width: 600px;
    margin: 2rem auto;
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

h2 {
    color: #4a6fa5;
    margin-top: 0;
    border-bottom: 2px solid #eaeaea;
    padding-bottom: 10px;
}

textarea {
    width: 100%;
    height: 150px;
    padding: 12px;
    border: 2px solid #ddd;
    border-radius: 6px;
    font-size: 16px;
    transition: border 0.3s;
    resize: vertical;
    box-sizing: border-box;
}

textarea:focus {
    border-color: #4a6fa5;
    outline: none;
}

#charCount {
    text-align: right;
    font-weight: bold;
    color: #555;
    margin: 10px 0;
}

.limit-warning {
    color: #e74c3c;
}

.tips {
    background-color: #f8f9fa;
    border-left: 4px solid #4a6fa5;
    padding: 10px 15px;
    margin-top: 20px;
    font-size: 0.9rem;
    color: #666;
}

.tips p {
    margin: 0;
}

footer {
    text-align: center;
    padding: 1.5rem 0;
    color: #666;
    font-size: 0.9rem;
    border-top: 1px solid #eee;
    margin-top: 2rem;
}

.heart {
    color: #e74c3c;
    display: inline-block;
    animation: pulse 1.5s infinite;
}

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
}

@media (max-width: 650px) {
    .message-box {
        margin: 1rem;
        padding: 1.5rem;
    }
}
```
## JS code:
```
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
```
## Output:

![image](https://github.com/user-attachments/assets/a89ce950-d848-452c-a137-ac13c5deb256)
![image](https://github.com/user-attachments/assets/47a4b32f-73b1-4e05-a33c-6fadac039025)


## Result:
A live character counter using JavaScript that dynamically displays the number of characters entered into a textarea — similar to what you see in Twitter or feedback forms is built successfully.

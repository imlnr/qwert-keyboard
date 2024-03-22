document.addEventListener('DOMContentLoaded', function () {
    const keyboardButtons = document.querySelectorAll('.keyboard div');
    let caps = false;

    keyboardButtons.forEach(button => {
        button.addEventListener('click', () => {
            const textArea = document.querySelector('.text-area');
            console.log(button.textContent);
            if (button.textContent === 'delete') {
                textArea.textContent = textArea.textContent.slice(0, -1);
            }
            else if (button.textContent === 'Space') {
                textArea.textContent += ' ';
            }
            else if (button.textContent === 'Enter') {
                textArea.textContent += '\n';
            }
            else if (button.textContent == 'tab') {
                textArea.textContent += '\t';
            }
            else if (button.textContent === 'Caps ') {
                caps = !caps;
                const capsNoti = document.querySelector('.caps-noti');
                capsNoti.style.color = caps ? 'red' : 'white';
                console.log(caps);
            }
            else {
                if (caps) {
                    textArea.textContent += button.textContent.toUpperCase();
                } else {
                    textArea.textContent += button.textContent.toLowerCase();
                }
            }
        });
    });
});
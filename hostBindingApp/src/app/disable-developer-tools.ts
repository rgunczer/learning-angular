export function disableDevTools() {

    // disable context menu mouse right click
    addEventListener('contextmenu', e => {
        console.log('contextmenu...');
        e.preventDefault();
    }, false);

    // disable opening developer tools from keyboard
    addEventListener('keydown', e => {
        if (e.keyCode === 123 /* F12: Chrome, Edge dev tools */ ||
            (e.shiftKey && e.ctrlKey && (
                e.keyCode === 73 /* + I: Chrome, FF dev tools */ ||
                e.keyCode === 67 /* + C: Chrome, FF inspect el */ ||
                e.keyCode === 74 /* + J: Chrome, FF console */ ||
                e.keyCode === 75 /* + K: FF web console */ ||
                e.keyCode === 83 /* + S: FF debugger */ ||
                e.keyCode === 69 /* + E: FF network */ ||
                e.keyCode === 77 /* + M: FF responsive design mode */)) ||
            (e.shiftKey && (
                e.keyCode === 118 /* + F5: Firefox style editor */ ||
                e.keyCode === 116 /* + F5: Firefox performance */)) ||
            (e.ctrlKey && e.keyCode === 85 /* + U: Chrome, FF view source */)) {
            console.log('keydown to devtools');
            e.preventDefault();
        }
    }, false);

}
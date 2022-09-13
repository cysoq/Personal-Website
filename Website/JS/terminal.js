let terminal = document.getElementById("terminal")
terminal.value = "~$ "
let laststatic = terminal.value.length

if (localStorage.getItem('terminalValue') != null) {
    terminal.value = localStorage.getItem('terminalValue')
}
if (localStorage.getItem('laststatic') != null) {
    laststatic = localStorage.getItem('laststatic')
}

// Handles the user commands (returns string based on command)
function handleCommand(command) {
    terminal.value += "\n"
    // clear
    if (command.split(" ")[0] == "clear") {
        //document.getElementById('style').setAttribute('disabled', false);

        if (command.split(" ").length > 1) {
            terminal.value += "clear: extra operand\n"
        } 
        else {
            terminal.value = ""
        }
    }
    // help
    else if (command.split(" ")[0] == "help") {
        
        if (command.split(" ").length > 1) {
            terminal.value += "help: extra operand\n"
        } 
        else {
            terminal.value += "Navigation (Takes you to the page):\n"
            terminal.value += "\thome\n\tpojects\n\texperience\n\tcertifications\n\tqualifications\n\tservice\n"
            terminal.value += "Tools:\n"
            terminal.value += "\tclear\n\tstyle\n"
        }
    }
    // home 
    else if (command.split(" ")[0] == "home") {

        if (command.split(" ").length > 1) {
            terminal.value += "home: extra operand\n"
        } 
        else {
            home()
        }
    }
    // projects 
    else if (command.split(" ")[0] == "projects") {

        if (command.split(" ").length > 1) {
            terminal.value += "projects: extra operand\n"
        } 
        else {
            projects()
        }
    }
    // experience 
    else if (command.split(" ")[0] == "experience") {

        if (command.split(" ").length > 1) {
            terminal.value += "experience: extra operand\n"
        } 
        else {
            experience()
        }
    }
    // certifications
    else if (command.split(" ")[0] == "certifications") {

        if (command.split(" ").length > 1) {
            terminal.value += "certifications: extra operand\n"
        } 
        else {
            certifications()
        }
    }
    // qualifications
    else if (command.split(" ")[0] == "qualifications") {

        if (command.split(" ").length > 1) {
            terminal.value += "qualifications: extra operand\n"
        } 
        else {
            qualifications()
        }
    }
    // service
    else if (command.split(" ")[0] == "service") {

        if (command.split(" ").length > 1) {
            terminal.value += "service: extra operand\n"
        } 
        else {
            service()
        }
    }
    // style
    else if (command.split(" ")[0] == "style") {

        styleHelp = "Usage: style [options]\n\nOptions:\n\toff\n\tdefault\n\tlight\n"
        if (command.split(" ").length > 2 || command.split(" ").length == 1) {
            terminal.value += styleHelp
        }
        else if (command.split(" ")[1] == "off" || command.split(" ")[1] == "default" || command.split(" ")[1] == "light") {
            style(command.split(" ")[1])
        }
        else {
            terminal.value += styleHelp
        }
    }

    // empty command 
    else if (command == "") {
        terminal.value += ""
    }
    // command not found
    else {
        terminal.value += command.split(" ")[0] + ": command not found\n"
    }
    terminal.value += "~$ " // starts the next `~$ ` line
    laststatic = terminal.value.length
    localStorage.setItem('terminalValue', terminal.value)
    localStorage.setItem('laststatic', laststatic)
}

// Set up the textarea as a terminal
terminal.addEventListener("keydown", function(event) { // listens to the text box
    if (event.key === "Enter") { // listens for enter
        event.preventDefault(); // prevents going to next line
        // Enter key was hit
        let recentUserCommand = terminal.value.split("~$ ").pop() // Gets most recent command 

        handleCommand(recentUserCommand) // Will update terminal based on command
    }
    else if (terminal.selectionStart <= (laststatic-1)) { // prevents the user from deleting or doing anything to `~$` 
        event.preventDefault();
    }
    else if (event.key === "Delete" || event.key === "Backspace" || event.key === "ArrowLeft") { // prevents bakcspace of space in front of `~$ ` 

        if (terminal.selectionStart <= laststatic) {
            event.preventDefault();
        }
    }
})

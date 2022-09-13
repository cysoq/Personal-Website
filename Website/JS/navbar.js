let terminalButton = document.getElementById("terminalButton")
terminal.setAttribute("hidden", true)
let dropdownContent = document.getElementById("dropdownContent")
dropdownContent.setAttribute("hidden", true)

if (localStorage.getItem('style') != null) {
    document.getElementById('style').setAttribute('href', localStorage.getItem('style'));
}

if (localStorage.getItem('terminal') == 'true') {
    terminal.removeAttribute("hidden")
}

function enableTerminal() {

    let terminal = document.getElementById("terminal")
    let hidden = terminal.getAttribute("hidden")
    if (hidden) {
        terminal.removeAttribute("hidden")
        localStorage.setItem('terminal', 'true')
    } else {
        terminal.setAttribute("hidden", true)
        localStorage.setItem('terminal', 'false')
    }
}

function dropdown() {
    let dropdownContent = document.getElementById("dropdownContent")
    let hidden = dropdownContent.getAttribute("hidden")
    if (hidden) {
        dropdownContent.removeAttribute("hidden")
    } else {
        dropdownContent.setAttribute("hidden", true)
    }
}

function home() {
    location.href = "index.html"
}

function projects() {
    location.href = "projects.html"
}

function experience() {
    location.href = "experience.html"
}

function certifications() {
    location.href = "certifications.html"
}

function qualifications() {
    location.href = "qualifications.html"
}

function service() {
    location.href = "service.html"
}

function personalStatement() {
    location.href = "personalStatement.html"
}

function style(type) {

    if (type=="off") {
        document.getElementById('style').setAttribute('href', 'CSS/empty.css');
        localStorage.setItem('style', 'CSS/empty.css')
    }
    else if (type=="default") {
        document.getElementById('style').setAttribute('href', 'CSS/style.css');
        localStorage.setItem('style', 'CSS/style.css')
    }
    else if (type=="light") {
        document.getElementById('style').setAttribute('href', 'CSS/light.css');
        localStorage.setItem('style', 'CSS/light.css')
    }
}


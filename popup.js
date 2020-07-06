function sayHello(){
    document.body.innerText = "download modi ai driver";
    var a = document.body.createElement('a');
    a.href = 'http://www.iana.org/_img/iana-logo-pageheader.png';
    a.download = 'iana-logo-pageheader.png'; // Filename
    a.click(); 
}
window.onload = sayHello;


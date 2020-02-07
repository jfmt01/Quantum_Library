const express = require('express'),
    app = express(),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    cookieSession = require('cookie-session');

app.use(cookieParser());
app.use(cookieSession({ secret: "Soy un dato de una cookie" }));

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`);
    req.session.visitas || (req.session.visitas = 0);
    let principal = req.session.visitas++
    console.log(`${principal} a la página de inicio`);
});

app.route('/ciencia').get((req, res) => {
    res.sendFile(`${__dirname}/views/ciencia.html`);
    req.session.vCien || (req.session.vCien = 0);
    let vCiencia = req.session.vCien++
    console.log(`${vCiencia} a la sección de ciencia`);
});

app.route('/tecnologia').get((req, res) => {
    res.sendFile(`${__dirname}/views/tecnologia.html`);
    req.session.vTecno || (req.session.vTecno = 0);
    let vTech = req.session.vTecno++
    console.log(`${vTech} a la sección de tecnología`);
});

app.route('/buscar/?').get((req, res) => {
    switch (req.query.buscar) {

        case "ciencia":
            res.sendFile(`${__dirname}/views/ciencia.html`);
            req.session.vCien || (req.session.vCien = 0);
            let vCiencia = req.session.vCien++
            console.log(`${vCiencia} a la sección de ciencia`);
            break;

        case "tecnologia":
            res.sendFile(`${__dirname}/views/tecnologia.html`);
            req.session.vTecno || (req.session.vTecno = 0);
            let vTech = req.session.vTecno++
            console.log(`${vTech} a la sección de tecnología`);
            break;

        case "":
            console.log("Debes escribir algo para realizar la busqueda")
            
        default:
            res.sendFile(`${__dirname}/views/index.html`);
            break;
    }

});

app.listen(8080);
console.log(`
            Servidor inicializado!
                        
                    Ingrese desde su navegador web a localhost:8080 0 127.0.0.1:8080 para visualizar el curriculum`);
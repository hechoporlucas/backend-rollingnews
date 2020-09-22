const noticiasCtrl = {};

noticiasCtrl.getPrueba = (req, res) => {
    res.send('esto es una prueba')
};

noticiasCtrl.crearNoticia = (req, res) => {
    console.log(req.body);
};

export default noticiasCtrl;
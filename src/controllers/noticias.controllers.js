import Noticia from "../models/Noticias";
const noticiasCtrl = {};

noticiasCtrl.getPrueba = (req, res) => {
  res.send("esto es una prueba");
};

noticiasCtrl.getNoticias = async (req, res) => {
  try {
    const listaNoticia = await Noticia.find(); //aca traigo todos mis datos...
    res.status(200).json(listaNoticia);
  } catch (err) {
    console.log(err);
    res.status(500).json({ mensaje: "algo fallo" });
  }
};

noticiasCtrl.crearNoticia = async (req, res) => {
  console.log(req.body);
  try {
    const {
      tituloNoticia,
      descripcionBreve,
      descripcionDetallada,
      imagenPrincipal,
      categoria,
      fecha,
      autor,
      principalPortada,
      principalCategoria,
    } = req.body;
    //preparo objeto para guardar en base de datos...
    const noticiaNueva = new Noticia({
      tituloNoticia,
      descripcionBreve,
      descripcionDetallada,
      imagenPrincipal,
      categoria,
      fecha,
      autor,
      principalPortada,
      principalCategoria,
    });
    //guardo en base de datos...
    await noticiaNueva.save();
    //mensaje al frontend...
    res.status(201).json({ mensaje: "se agrego una nueva noticia" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ mensaje: "ocurrio un error" });
  }
};

noticiasCtrl.eliminarNoticia = async (req, res) => {
    try{
        console.log(req.params.id);
        await Noticia.findByIdAndDelete(req.params.id);
        res.status(200).json({mensaje: "producto eliminado correctamente"});
    }catch(err){
        console.log(err);
        res.status(500).json({mensaje: 'ocurrio un error'});
    }
};

noticiasCtrl.modificarNoticia = async (req, res) => {
    try {
        await Noticia.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({mensaje: "el producto se ha modificado."});
    } catch (err) {
        console.log(err);
        res.status(500).json({mensaje: "ha ocurrido un error."});
    }
};

export default noticiasCtrl;

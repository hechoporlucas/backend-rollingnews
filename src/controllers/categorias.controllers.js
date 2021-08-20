import categoria from "../models/Categorias";
const categoriaCtrl = {};

categoriaCtrl.getPrueba = (req, res) => {
  res.send("esto es una prueba");
};

categoriaCtrl.getCategoria = async (req, res) => {
  try {
    const listaCategoria = await categoria.find(); //aca traigo todos mis datos...
    res.status(200).json(listaCategoria);
  } catch (err) {
    console.log(err);
    res.status(500).json({ mensaje: "algo fallo" });
  }
};

categoriaCtrl.crearCategoria = async (req, res) => {
  console.log(req.body);
  try {
    const {
      agregarCategoria,
      descripcionCategoria,
    } = req.body;
    //preparo objeto para guardar en base de datos...
    const categoriaNueva = new categoria({
      agregarCategoria,
      descripcionCategoria,
    });
    //guardo en base de datos...
    await categoriaNueva.save();
    //mensaje al frontend...
    res.status(201).json({ mensaje: "se agrego una nueva categoria" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ mensaje: "ocurrio un error" });
  }
};

categoriaCtrl.eliminarCategoria = async (req, res) => {
    try{
        console.log(req.params.id);
        await categoria.findByIdAndDelete(req.params.id);
        res.status(200).json({mensaje: "producto eliminado correctamente"});
    }catch(err){
        console.log(err);
        res.status(500).json({mensaje: 'ocurrio un error'});
    }
};


export default categoriaCtrl;

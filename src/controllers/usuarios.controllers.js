import Usuario from "../models/Usuarios";
const usuariosCtrl = {};

//empezamos a definir las funciones...
usuariosCtrl.getUsuarios = async (req, res) => {
  try {
    const listaUsuarios = await Usuario.find(); //aca traigo todos mis datos...
    res.status(200).json(listaUsuarios);
  } catch (err) {
    console.log(err);
    res.status(500).json({ mensaje: "algo fallo" });
  }
};

usuariosCtrl.crearUsuario = async (req, res) => {
  console.log(req.body);
  try {
    const { nombre, apellido, correo, password } = req.body;
    //preparo el objeto para guardar en base de datos..
    const nuevoUsuario = new Usuario({
      nombre,
      apellido,
      correo,
      password,
      state: false,
      range: 0,
    });
    //guardo en base de datos..
    await nuevoUsuario.save();
    res.status(201).json({ mensaje: "se agrego el nuevo usuario con exito" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ mensaje: "ocurrio un error" });
  }
};

usuariosCtrl.eliminarUsuario = async (req, res) => {
    try{
        console.log(req.params.id);
        await Usuario.findByIdAndDelete(req.params.id);
        res.status(200).json({mensaje: "usuario eliminado correctamente"});
    }catch(err){
        console.log(err);
        res.status(500).json({mensaje: 'ocurrio un error'});
    }
};

usuariosCtrl.modificarUsuario = async (req, res) => {
    try {
        await Usuario.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({mensaje: "el usuario se ha modificado."});
    } catch (err) {
        console.log(err);
        res.status(500).json({mensaje: "ha ocurrido un error."});
    }
};

export default usuariosCtrl;
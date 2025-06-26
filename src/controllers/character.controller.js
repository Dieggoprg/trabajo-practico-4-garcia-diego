//CONTROL  --  VALIDACIONES

import PERSONAJES from "../models/characters.models.js";

export const crearPersonajes = async (req, res) => {
    const {name, ki, race, gender, description} = req.body;

    //quitarle espacios a los valores que sean STRING
    if(req.body){  //
        for (let valor in req.body) // 'FOR IN' para recorrer objetos
        if(typeof valor === "string"){ //aquí compara si el type de dato de la request es string
            req.body[valor] = req.body[valor].trim(); // y si pasa esa condición entonces le saca los espacios de la request (si es que tiene)  
        }
    }

    // if(!name || !ki || !race || !gender) {
    //   return res.status(400).json({menssage: "Los campos: 'name, ki, race, gender'  son Obligatorios"})

    if(name === undefined || name === "") return res.status(400).json( {
        Menssage: "Nombre no puede estar vacio"
    } )

    if(ki === undefined || ki === "") return res.status(400).json( {
        Menssage: "Ki no puede estar vacio"
    } )

    if(race === undefined || race === "") return res.status(400).json( {
        Menssage: "Race no puede estar vacio"
    } )

    if(gender === undefined || gender === "") return res.status(400).json( {
        Menssage: "Gender no puede estar vacio"
    } )

    //validación del ki
    const kiEntero = Math.floor(ki);
    if (ki === kiEntero) return res.status(400).json({Menssage: 'El Ki debe ser Integer' });

    //validación del Gender
    if(gender !== "Female" && gender !== "Male") return res.status(400).json({Menssage: 'Gender no válido'})

    //validación de la descripción 
    if (typeof description  !== "string") return res.status(400).json({Menssage: 'Description no válida, debe ser una cadena de texto si se desea proporcionar'})

    //validación para un nombre único
    if (name) {
        const nombreUnico = await PERSONAJES.findOne({where: {name}});

        if(nombreUnico !== null) return res.status(400).json(
        {Menssage: 'Nombre Existente'
    })
    }

  try {
    const personajes = await PERSONAJES.create(req.body);
    return res.status(201).json(personajes);

  } catch (error) {
   return res.status(500).json({ error: error.message });
  }
};

export const traerTodosLosPJ = async (req, res) => {
  try {
    const personajes = await PERSONAJES.findAll();

    if(personajes.lenght === 0) return res.status(404).json({Menssage : "NO SE ENCONTRÓ NINGÚN PERSONAJE"})

    return res.json(personajes);

  } catch (error) {
   return res.status(500).json({ error: error.message });
  }
};

export const traePersonajesXid = async (req, res) => {
  try {
    const personajes = await PERSONAJES.findByPk(req.params.id);
    if (personajes) res.status(200).json(personajes);
    else res.status(404).json({ message: "Personaje no encontrado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

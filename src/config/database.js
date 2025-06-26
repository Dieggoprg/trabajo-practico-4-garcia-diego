//CONFIGURACIÓN DE LA BASE DE DATOS
import {Sequelize} from "sequelize";
import "dotenv/config";


 const sequelize = new Sequelize (
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host : process.env.DB_HOST,
        dialect : process.env.DB_DIALECT
    }
);

export const startDB = async() => {
    try {
        await sequelize.authenticate();
        console.log("Se establecio la conexión con la Db");
        await sequelize.sync()
        
    } catch (error) {
        console.log("Hubo un error al establecer la conexión con la Db: ", error);
        

    };
}
 

export default sequelize;
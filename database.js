import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './ventas_db.sqlite', // Archivo donde se guardarán los datos
    logging: false
});

export default sequelize;
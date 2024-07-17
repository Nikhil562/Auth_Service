const express = require('express');
const bodyParser = require('body-parser');

const db = require('./models/index');

const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

// const {User} = require('./models/index');
// const bcrypt = require('bcrypt');

const app = express();

const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server Started on Port: ${PORT}`);
        if(process.env.DB_SYNC) {
            db.sequelize.sync({alter: true});
        }
        // const incomingpassword = '123456';
        // const user = await User.findByPk(3);
        // const response = bcrypt.compareSync(incomingpassword, user.password);
        // console.log(response);
    });
}   

prepareAndStartServer();
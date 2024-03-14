 sequelize init
write pwd and name od db
npx sequelize db:create
npx sequelize db:migrate
 npx sequelize model:generate --name User --attributes email:string,password:string
in migration file   email: {
        type: Sequelize.STRING,
        allowNull:false,
        unqiue:true,
        validate:{
          isEmail:true
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull:false,
        validate:{
          len:[3,300]
        }
      },

in user models 
 User.init({
    email:{
      email: {
        type: DataTypes.STRING,
        allowNull:false,
        unqiue:true,
        validate:{
          isEmail:true
        }
      },
    password: 
    {
      type:DataTypes.STRING,
      allowNull:false,
      validator:{
        len:[3,300]
      }
    }


npx sequelize db:migrate


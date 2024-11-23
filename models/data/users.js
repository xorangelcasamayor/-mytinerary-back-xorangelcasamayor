import 'dotenv/config.js';
import '../../config/database.js';
import bcryptjs from 'bcryptjs'
import User from '../User.js';


const users = [
  { 
    name: 'Juan', 
    lastName: 'Pérez', 
    email: 'juan.perez@mail.com', 
    password: 'qwerty123', 
    phone: 1234567890, 
    online: true, 
    photoUrl: 'https://robohash.org/JuanPérez.png', 
    country: 'Argentina' 
  },
  { 
    name: 'Ana', 
    lastName: 'Gómez', 
    email: 'ana.gomez@mail.com', 
    password: '123abc456', 
    phone: 2345678901, 
    online: false, 
    photoUrl: 'https://robohash.org/AnaGómez.png', 
    country: 'Spain' 
  },
  { 
    name: 'Carlos', 
    lastName: 'Díaz', 
    email: 'carlos.diaz@mail.com', 
    password: 'password2024', 
    phone: 3456789012, 
    online: true, 
    photoUrl: 'https://robohash.org/CarlosDíaz.png', 
    country: 'Chile' 
  },
  { 
    name: 'María', 
    lastName: 'López', 
    email: 'maria.lopez@mail.com', 
    password: 'lopez@321', 
    phone: 4567890123, 
    online: true, 
    photoUrl: 'https://robohash.org/MaríaLópez.png', 
    country: 'Mexico' 
  },
  { 
    name: 'Pedro', 
    lastName: 'Martínez', 
    email: 'pedro.martinez@mail.com', 
    password: 'pedro2023!', 
    phone: 5678901234, 
    online: false, 
    photoUrl: 'https://robohash.org/PedroMartínez.png', 
    country: 'Colombia' 
  },
  { 
    name: 'Lucía', 
    lastName: 'Sánchez', 
    email: 'lucia.sanchez@mail.com', 
    password: 'lucia#2024', 
    phone: 6789012345, 
    online: true, 
    photoUrl: 'https://robohash.org/LucíaSánchez.png', 
    country: 'Peru' 
  },
  { 
    name: 'Jorge', 
    lastName: 'Fernández', 
    email: 'jorge.fernandez@mail.com', 
    password: 'jorge@567', 
    phone: 7890123456, 
    online: true, 
    photoUrl: 'https://robohash.org/JorgeFernández.png', 
    country: 'Argentina' 
  },
  { 
    name: 'Patricia', 
    lastName: 'Ruiz', 
    email: 'patricia.ruiz@mail.com', 
    password: 'patty@456', 
    phone: 8901234567, 
    online: false, 
    photoUrl: 'https://robohash.org/PatriciaRuiz.png', 
    country: 'Spain' 
  },
  { 
    name: 'David', 
    lastName: 'Rodríguez', 
    email: 'david.rodriguez@mail.com', 
    password: 'david!789', 
    phone: 9012345678, 
    online: true, 
    photoUrl: 'https://robohash.org/DavidRodríguez.png', 
    country: 'Mexico' 
  },
  { 
    name: 'Elena', 
    lastName: 'Hernández', 
    email: 'elena.hernandez@mail.com', 
    password: 'elenah123', 
    phone: 1230984567, 
    online: true, 
    photoUrl: 'https://robohash.org/ElenaHernández.png', 
    country: 'Chile' 
  },
  { 
    name: 'José', 
    lastName: 'Ramírez', 
    email: 'jose.ramirez@mail.com', 
    password: 'jose#2023', 
    phone: 2341095678, 
    online: false, 
    photoUrl: 'https://robohash.org/JoséRamírez.png', 
    country: 'Argentina' 
  },
  { 
    name: 'Marta', 
    lastName: 'Jiménez', 
    email: 'marta.jimenez@mail.com', 
    password: 'marta456!', 
    phone: 3452106789, 
    online: true, 
    photoUrl: 'https://robohash.org/MartaJiménez.png', 
    country: 'Peru' 
  },
  { 
    name: 'Luis', 
    lastName: 'García', 
    email: 'luis.garcia@mail.com', 
    password: 'garcia@123', 
    phone: 4563217890, 
    online: false, 
    photoUrl: 'https://robohash.org/LuisGarcía.png', 
    country: 'Colombia' 
  },
  { 
    name: 'Sofía', 
    lastName: 'Moreno', 
    email: 'sofia.moreno@mail.com', 
    password: 'sofia2024$', 
    phone: 5674328901, 
    online: true, 
    photoUrl: 'https://robohash.org/SofíaMoreno.png', 
    country: 'Mexico' 
  },
  { 
    name: 'Antonio', 
    lastName: 'Castro', 
    email: 'antonio.castro@mail.com', 
    password: 'castro2023#', 
    phone: 6785439012, 
    online: true, 
    photoUrl: 'https://robohash.org/AntonioCastro.png', 
    country: 'Spain' 
  }
];


async function createHash(data) {
  let hashPassword = await data.map(users=>{
    let passwordhash = bcryptjs.hashSync(
      users.password,10
    )
    return {...users,password:passwordhash}
  })
  return hashPassword
  
  }
  
  let usersHash = await createHash(users)
  User.insertMany(usersHash)
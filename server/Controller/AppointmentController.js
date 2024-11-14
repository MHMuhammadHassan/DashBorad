const db = require('../config/db');
require('dotenv').config();

// const getAppointments = (req , res) =>{

//     const query = ''

//     db.query(query, (err , result) =>{

//         if (err) {
//             console.log('fetch appointments ' , err);
//             res.status(500).send();
//         }
//         else
//             res.json(result);
//     })
// }

const getAppointments = (req , res) =>{
    const qurey = 'Select * from appointment';
    db.query(qurey,(err , result) =>{
        if(err){
            console.log('fetch appiontment error : ' ,err);
            res.status(500).send();
        }
        else
            res.status(200).json(result);
    } )

}

module.exports = [getAppointments];
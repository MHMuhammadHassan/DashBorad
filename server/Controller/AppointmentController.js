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

const addAppointment = (req, res) => {
    const { name, type, previousAppointment, status, nextAppointment } = req.body;
    console.log('connect');
    
    // Validate input
    if (!name || !type || !previousAppointment || !status || !nextAppointment) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const query = `INSERT INTO appointment (name, type, previousAppointment, status, nextAppointment) 
                   VALUES (?, ?, ?, ?, ?)`;
    const values = [name, type, previousAppointment, status, nextAppointment];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error('Insert appointment error:', err);
            return res.status(500).json({ error: 'Failed to add appointment' });
        }
        res.status(201).json({ message: 'Appointment added successfully', appointmentId: result.insertId });
    });
};


module.exports = { getAppointments, addAppointment };
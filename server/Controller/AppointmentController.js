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


const updateAppointment = (req, res) => {
    const { appointmentId } = req.params; // Get the appointment ID from the route parameters
    const { name, type, previousAppointment, status, nextAppointment } = req.body; // Get updated fields from the request body

    // Check if all fields are provided
    if (!appointmentId || !name || !type || !previousAppointment || !status || !nextAppointment) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const query = `UPDATE appointment 
                   SET name = ?, type = ?, previousAppointment = ?, status = ?, nextAppointment = ? 
                   WHERE id = ?`;
    const values = [name, type, previousAppointment, status, nextAppointment, appointmentId];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error('Update appointment error:', err);
            return res.status(500).json({ error: 'Failed to update appointment' });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Appointment not found' });
        }

        res.status(200).json({ message: 'Appointment updated successfully' });
    });
};

module.exports = { getAppointments, addAppointment, updateAppointment };

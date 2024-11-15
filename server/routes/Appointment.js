const express = require('express');
const router = express.Router();
const { DeleteAppointment,getAppointments, addAppointment, updateAppointment } = require('../Controller/AppointmentController');

router.get('/getappointment', getAppointments);
router.post('/addappointment', addAppointment);
router.put('/updateappointment/:appointmentId', updateAppointment);
router.delete('/deleteappointment/:id', DeleteAppointment); 

module.exports = router;

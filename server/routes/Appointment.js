const express = require('express');
const router = express.Router();
const { getAppointments, addAppointment, updateAppointment } = require('../Controller/AppointmentController');

router.get('/getappointment', getAppointments);
router.post('/addappointment', addAppointment);
router.put('/updateappointment/:appointmentId', updateAppointment); 

module.exports = router;

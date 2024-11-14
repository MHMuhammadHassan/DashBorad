const express = require('express');
const router = express.Router();
const { getAppointments, addAppointment } = require('../Controller/AppointmentController');

router.get('/getappointment', getAppointments);
router.post('/addappointment', addAppointment);

module.exports = router;
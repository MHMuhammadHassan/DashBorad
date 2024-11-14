const express = require('express');
const router = express.Router();
const getAppointments = require('../Controller/AppointmentController');

router.get('/getappointment', getAppointments);

module.exports = router;
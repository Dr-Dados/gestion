const express = require("express");
const { getPersons } = require("../controllers/personsController");

const router = express.Router();

//get all persons
router.get("/", getPersons);

module.exports = router;

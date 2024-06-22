const Person = require("../models/personModel");

//get all persons
const getPersons = async (req, res) => {
  try {
    const persons = await Person.find().sort({ createdAt: -1 });
    res.status(200).json(persons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getPersons,
};

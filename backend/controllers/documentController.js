const BL = require("../models/documentModel");
const sendMail = require("../helpers/sendMail");
//get all documents
const getDocuments = async (req, res) => {
  try {
    const documents = await BL.find().sort({ createdAt: -1 });
    res.status(200).json(documents);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//get one document by id

const getDocumentById = async (req, res) => {
  try {
    const document = await BL.findById(req.params.id);
    res.status(200).json(document);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//get all documents by user
const getDocumentsByUser = async (req, res) => {
  try {
    const documents = await BL.find({ personId: req.params.id });
    res.status(200).json(documents);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//create a document
const createDocument = async (req, res) => {
  try {
    const document = BL.create(req.body);
    // send mail on success
    sendMail(
      "gurofu@gmail.com",
      "Document Created",
      "Your document has been created successfully"
    );
    res.status(201).json(document);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//update a document
const updateDocument = async (req, res) => {
  try {
    const document = await BL.findById(req.params.id);
    if (document) {
      document.status = req.body.status;
      const updatedDocument = await document.save();
      res.status(200).json(updatedDocument);
    } else {
      res.status(404).json({ message: "Document not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//delete a document
const deleteDocument = async (req, res) => {
  try {
    const document = await BL.findById(req.params.id);
    if (document) {
      await document.remove();
      res.status(200).json({ message: "Document deleted" });
    } else {
      res.status(404).json({ message: "Document not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getDocuments,
  getDocumentsByUser,
  createDocument,
  getDocumentById,
  deleteDocument,
};

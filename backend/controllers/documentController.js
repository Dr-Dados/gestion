const BL = require("../models/documentModel");
const sendMail = require("../helpers/sendMail");
const mongoose = require("mongoose");

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
    const documents = await BL.find({ personId: req.params.user_id });
    res.status(200).json(documents);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//create a document
const createDocument = async (req, res) => {
  try {
    console.log("req.body", req.body);
    const file = req.body.newFile;
    // if (!file) {
    //   return res.status(400).json({ message: "Please upload a file" });
    // }
    const { name, gamme, city, email, fonction } = req.body?.person[0];
    console.log(name, gamme, city, email);
    const newDoc = {
      path: file.path,
      user_id: req.body.user_id,
      person: [
        {
          name,
          gamme,
          fonction,
          city,
          email,
        },
      ],
    };
    console.log("newDoc", newDoc);

    const document = await BL.create(newDoc);
    // // send mail on success
    sendMail(
      email,
      "Document Created",
      "Your document has been created successfully"
    );
    res.status(200).json(document);
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
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such document" });
  }

  const document = await BL.findOneAndDelete({ _id: id });

  if (!document) {
    return res.status(400).json({ error: "No such document" });
  }

  res.status(200).json(document);
};

module.exports = {
  getDocuments,
  getDocumentsByUser,
  createDocument,
  getDocumentById,
  deleteDocument,
};

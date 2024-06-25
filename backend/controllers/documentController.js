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
// update only comments ans status on document by adding comment to other comments and changing status
const updateDocument = async (req, res) => {
  const { _id, comments, status } = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).json({ error: "No such document" });
  }

  try {
    const newComment = { comment: comments };
    console.log(newComment);
    const document = await BL.findOneAndUpdate(
      { _id },
      {
        $push: { comments: newComment },
        $set: { status },
      },
      { new: true }
    );

    if (!document) {
      return res.status(400).json({ error: "No such document" });
    }

    res.status(200).json(document);
  } catch (error) {
    res.status(500).json({ error: error.message });
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
  updateDocument,
};

const express = require("express");
const {
  getDocuments,
  getDocumentById,
  getDocumentsByUser,
  createDocument,
  deleteDocument,
} = require("../controllers/documentController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();
// Require Auth for all documents routes
router.use(requireAuth);
//get all documents
router.get("/", getDocuments);

//get one document
router.get("/:id", getDocumentById);

//get all documents by user
router.get("/user/:id", getDocumentsByUser);

//create a document
router.post("/", createDocument);

//update a document
router.put("/:id", (req, res) => {
  res.json({ message: "Document updated" });
});

//delete a document
router.delete("/:id", deleteDocument);

module.exports = router;

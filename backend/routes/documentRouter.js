const express = require("express");
const {
  getDocuments,
  getDocumentById,
  getDocumentsByUser,
  createDocument,
  deleteDocument,
  updateDocument,
} = require("../controllers/documentController");
const requireAuth = require("../middleware/requireAuth");

const fileUpload = require("../middleware/fileUploads");

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
router.post("/", fileUpload.single("file"), createDocument);
// router.post("/", (req, res) => {
//   console.log(req.body);
//   res.send(req.body);
// });

//update a document
router.patch("/:id", updateDocument);

//delete a document
router.delete("/:id", deleteDocument);

module.exports = router;

const express = require("express");

const router = express.Router();

const DUMMY_PLACES = [
  {
    id: "1",
    path: "/path/to/document1.pdf",
    status: "pending",
    userId: "user1",
    comments: "No comments",
    commentImagePath: "/path/to/comment1.jpg",
  },
  {
    id: "2",
    path: "/path/to/document2.pdf",
    status: "approved",
    userId: "user2",
    comments: "Great work!",
    commentImagePath: "/path/to/comment2.jpg",
  },
];

router.get("/user/:uid", (req, res, next) => {
  const userId = req.params.uid;
  const document = DUMMY_PLACES.find((p) => p.userId === userId);
  if (!document) {
    const error = new Error(
      "Could not find a document for the provided user id."
    );
    error.code = 404;
    throw error;
  }
  res.json({ document });
});
router.get("/:did", (req, res, next) => {
  const documentId = req.params.did;
  const document = DUMMY_PLACES.find((p) => p.id === documentId);
  if (!document) {
    const error = new Error(
      "Could not find a document for the provided document id."
    );
    error.code = 404;
    return next(error);
  }
  res.json({ document });
});
module.exports = router;

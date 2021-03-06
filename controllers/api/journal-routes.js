const router = require("express").Router();
const { Journal, User, Mood } = require("../../models");
const sequelize = require("../../config/connection");
const withAuth = require("../../utils/auth");

const cdnUrl = "http://d2rbjfe3250ov1.cloudfront.net/";

router.post("/", withAuth, (req, res) => {
  let photoUrl;
  if (req.body.photoID) {
    photoUrl = cdnUrl + req.body.photoID;
  } else {
    photoUrl = null;
  }
  Journal.create({
    journalNote: req.body.journalNote,
    userID: req.session.user_id,
    moodID: req.body.moodID,
    date: req.body.date,
    photoUrl: photoUrl,
  })
    .then((dbJournalData) => res.json(dbJournalData))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Failed to create a journal note!" });
    });
});

router.put("/:id", withAuth, (req, res) => {
  Journal.update(
    {
      journalNote: req.body.journalNote,
    },
    {
      where: {
        journalID: req.params.id,
        userID: req.session.user_id,
      },
    }
  )
    .then((dbJournalData) => {
      if (dbJournalData[0] === 0) {
        res.status(404).json({
          message: "No journal entry found with this id for this user!",
        });
        return;
      }
      res.json({
        message: "Successfully updated your note!",
        journalNote: req.body.journalNote,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Failed to update your Note!" });
    });
});

router.get("/:id", withAuth, (req, res) => {
  Journal.findOne({
    where: {
      journalID: req.params.id,
      userID: req.session.user_id,
    },
    attributes: [
      "journalID",
      "journalNote",
      "userID",
      "moodID",
      "createdAt",
      "updatedAt",
      "date",
      "photoUrl",
    ],
  })
    .then((dbJournalData) => {
      if (!dbJournalData) {
        res
          .status(404)
          .json({ message: "No journal note found with this id!" });
        return;
      }
      res.json(dbJournalData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Failed to find a journal note" });
    });
});
// withAuth
router.get("/", withAuth, (req, res) => {
  Journal.findAll({
    where: {
      userID: req.session.user_id,
    },
    attributes: [
      "journalID",
      "journalNote",
      "userID",
      "moodID",
      "createdAt",
      "updatedAt",
      "date",
      "photoUrl",
    ],
    order: [["createdAt", "ASC"]],
  })
    .then((dbJournalData) => res.json(dbJournalData))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Failed to find notes" });
    });
});

module.exports = router;

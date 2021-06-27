const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { body, validationResult } = require("express-validator");

const User = require("../models/User");
const Contact = require("../models/Contact");

router.get("/", auth, async (req, res) => {
  try {
    //req.user.id added by the auth middleware after decoding the token
    console.log(req.user.id);
    const contacts = await Contact.find({ user: req.user.id });
    res.json(contacts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

router.post(
  "/",
  auth,
  body("name").not().isEmpty().withMessage("Please enter a name."),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });

      const contact = await newContact.save();

      res.json(contact);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

router.put("/:id", auth, async (req, res) => {
  const { name, email, phone, type } = req.body;

  const updatedContact = {};
  if (name) updatedContact.name = name;
  if (email) updatedContact.email = email;
  if (phone) updatedContact.phone = phone;
  if (type) updatedContact.type = type;

  try {
    //find contact to be updated
    let contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(400).json({ message: "Contact not found" });
    }

    //match contact ownership with logged in user
    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    //update contact
    contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { $set: updatedContact },
      { new: true }
    );

    res.json(contact);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    //find contact to be deleted
    let contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(400).json({ message: "Contact not found" });
    }

    //match contact ownership with logged in user
    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    //delete contact
    await Contact.findByIdAndRemove(req.params.id);

    res.json({ message: "Contact deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;

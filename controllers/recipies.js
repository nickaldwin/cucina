const cloudinary = require("../middleware/cloudinary");
//const recipies = require("../models/Recipies"); // update the post/models later
const Recipies = require("../models/Recipies");

module.exports = {
  getProfile: async (req, res) => {
    try {
      const recipies = await Recipies.find({ user: req.user.id });
      res.render("profile.ejs", { recipies: recipies, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getFeed: async (req, res) => {
    try {
      const recipies = await Recipies.find().sort({ createdAt: "desc" }).lean();
      res.render("feed.ejs", { recipies: recipies });
    } catch (err) {
      console.log(err);
    }
  },
  getRecipies: async (req, res) => {
    try {
      const recipies = await Recipies.findById(req.params.id);
      res.render("recipies.ejs", { recipies: post, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  createRecipies: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      await Recipies.create({
        title: req.body.title,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        caption: req.body.caption,
        likes: 0,
        user: req.user.id,
      });
      console.log("added an recipie !");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
  likeRecipies: async (req, res) => {
    try {
      await Recipies.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Likes +1");
      res.redirect(`/recipies/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  deleteRecipies: async (req, res) => {
    try {
      // Find post by id
      let recipies = await Recipies.findById({ _id: req.params.id });
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(post.cloudinaryId);
      // Delete post from db
      await Recipies.remove({ _id: req.params.id });
      console.log("Deleted recipie");
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },
};

const User = require("../models/user");

module.exports.addLikeMovie = async (req, res) => {
  try {
    const { email, data } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      await User.create({ email, likeMovieArray: data });
    } else {
      const isLikeMovie = user.likeMovieArray.find(
        (item) => item.id === data.id
      );
      if (!isLikeMovie) {
        const userUpdate = await User.findByIdAndUpdate(
          { _id: user._id },
          { likeMovieArray: [...user.likeMovieArray, data] },
          { new: true }
        );
        res.status(200).send(userUpdate);
      }
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
};

module.exports.allLikeMovie = async (req, res) => {
  try {
    const { email } = req.params;

    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).send("User not found!");
    }

    const listMovie = user.likeMovieArray;
    res.status(200).send(listMovie);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

module.exports.removeLikeMovie = async (req, res) => {
  try {
    const { email, movieId } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send("User not found!");
    }

    let { likeMovieArray } = user;
    likeMovieArray = likeMovieArray.filter((item) => item.id != movieId);
    await User.findByIdAndUpdate(
      { _id: user._id },
      { likeMovieArray: [...likeMovieArray] }
    );
    res.status(200).send(likeMovieArray);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

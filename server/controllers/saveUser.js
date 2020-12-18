module.exports = async (User, profile, done) => {
  const { id, displayName, _json } = profile;
  const existingUser = await User.findOne({ authID: profile.id });
  if (existingUser) {
    done(null, existingUser);
  } else {
    const newUser = await new User({
      authID: id,
      displayName: displayName,
      profileImage: _json.avatar_url,
    }).save((err) => {
      if (err) console.log(err);
    });
    done(null, newUser);
  }
};

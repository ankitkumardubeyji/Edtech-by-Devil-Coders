import User from "../Model/usermodel.js";
export const create = async (req, res) => {
  try {
    const userData = new User(req.body);
    if (!userData) {
      return res.ststus(404).json({ msg: "user data not found" });
    }
    const savedDataga = await userData.save();
    res.status(200).json({ msg: "User added successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getAll = async (req, res) => {
  try {
    const userData = await User.find();
    if (!userData) {
      return res.status(404).json({ msg: "users data not found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

import { data } from "../dataset/dataset.js";

export const getMain = (req, res) => {
    res.json(data.filter((data) => data.username === req.user.name));
  }
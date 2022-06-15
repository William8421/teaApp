import { data } from "../dataset/dataset.js";

export const postNewFlavour = (req, res) => {
    const filterByName = data.filter((data) => data.username === req.user.name);
    filterByName[0].teaFlavours.push(req.body.newFlavour);
    res.json(filterByName);
}
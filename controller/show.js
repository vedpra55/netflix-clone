import { Show } from "../models/showModel";

export async function createShow(req, res) {
  try {
    const allShow = await Show.create(req.body);

    res.status(200).json({
      status: true,
      allShow: allShow,
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      error: err.message,
    });
  }
}

export async function getAllShows(req, res) {
  try {
    const allShow = await Show.find({});

    res.status(200).json({
      status: true,
      allShow: allShow,
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      error: err.message,
    });
  }
}

export async function getShowById(req, res) {
  try {
    const allShow = await Show.findById(req.query.id);

    res.status(200).json({
      status: true,
      allShow: allShow,
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      error: err.message,
    });
  }
}

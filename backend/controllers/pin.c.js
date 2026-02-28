import Pin from "../models/pin.m.js";

export const getPins = async (req, res) => {
  const pageNumber = Number(req.query.cursor) || 0;
  const search = req.query.search;
  const userId = req.query.user;
  const boardId = req.query.board; 
  const Limit = 21;
  const pins = await Pin.find(
    search
      ? {
          $or: [
            { title: { $regex: search, $options: "i" } },
            { tags: { $in: [search] } },
          ],
        }
      : userId
      ? { user: userId }
      : boardId
      ? { board: boardId }
      : {}
  )
    .limit(Limit)
    .skip(pageNumber * Limit);
  const hasNextPage = pins.length === Limit;
  res
    .status(200)
    .json({ pins, nextCursor: hasNextPage ? pageNumber + 1 : null });
};

export const getPin = async (req, res) => {
  let { id } = req.params;
  const pin = await Pin.findById(id);
  res.status(200).json({ pin });
};

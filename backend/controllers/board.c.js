import Board from "../models/board.m.js";
import Pin from "../models/pin.m.js";
export const boardinfo = async (req,res)=>{
    const {id} = req.params;
    const boards = await Board.find({user: id});

    const boardWithPinDetails = await Promise.all(
        boards.map(async (board) =>{
            const pinCount = await Pin.countDocuments({board: board._id});
            const firstPin = await Pin.findOne({board: board._id});
            return {
                ...board.toObject,
                pinCount,
                firstPin,
            }
        })
    )

    res.status(200).json(boardWithPinDetails);
}


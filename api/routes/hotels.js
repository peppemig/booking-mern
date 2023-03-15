import express from "express"
import { countByType, countByCity, createHotel, deleteHotel, getAllHotels, getHotel, updateHotel, getHotelRooms } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel)

//UPDATE
router.put("/:id", verifyAdmin, updateHotel)

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel)

//GET
router.get("/find/:id", getHotel)

//GET ALL
router.get("/", getAllHotels)

//GET HOTELS BY CITY
router.get("/countyByCity", countByCity)

//GET HOTELS BY TYPE
router.get("/countByType", countByType)

//GET ROOMS BY HOTEL ID
router.get("/room/:id", getHotelRooms)


export default router
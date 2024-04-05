const express = require("express");
const router = express.Router();
const wrapAsync = require("../utilities/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing, } = require("../middlewares.js");
const multer = require("multer");
const {storage} = require("../configCloud.js");
const upload = multer({storage})

const listingController = require("../controllers/listings.js");

router
 .route("/")
 .get(wrapAsync(listingController.index))
 .post(isLoggedIn,upload.single("listing[image]"), validateListing, wrapAsync(listingController.createListing))


//new route 
router.get("/new", isLoggedIn, listingController.newForm);

 
router
 .route("/:id") 
 .get(wrapAsync(listingController.showListing))
 .put( isLoggedIn, isOwner, upload.single("listing[image]"), validateListing, wrapAsync(listingController.updateListing))
 .delete(isLoggedIn, isOwner, wrapAsync(listingController.deleteListing))


//edit route 
router.get("/:id/edit",isLoggedIn, isOwner, wrapAsync(listingController.editListing));


module.exports = router;


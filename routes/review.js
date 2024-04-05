const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utilities/wrapAsync.js");
const ExpressErr = require("../utilities/ExpressErr.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middlewares.js")
const reviewController = require("../controllers/reviews.js");


//Review post route
router.post("/",isLoggedIn,validateReview, wrapAsync(reviewController.createReview))
 
// delete reviews route
 router.delete("/:reviewId",isLoggedIn, isReviewAuthor,wrapAsync(reviewController.deleteReview));

 module.exports = router;
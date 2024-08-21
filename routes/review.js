const express = require("express");
const router = express.Router({mergeParams: true});
const Listing = require("../Models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../Models/review.js");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");
const reviewController = require("../controllers/review.js");

//Reviews
//Post route
router.post(
    "/", isLoggedIn,
    validateReview,
    wrapAsync(reviewController.createReview));
  
  //Delete route
  router.delete(
    "/:reviewId", isLoggedIn, isReviewAuthor,
    wrapAsync(reviewController.deleteReview));

  module.exports = router;

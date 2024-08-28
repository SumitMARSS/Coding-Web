const mongoose = require("mongoose")

// Define the Courses schema
const coursesSchema = new mongoose.Schema({
  courseName: { type: String },
  courseDescription: { type: String },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  whatYouWillLearn: {
    type: String,
  },
  courseContent: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section",
    },
  ],
  ratingAndReviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RatingAndReview",
    },
  ],
  price: {
    type: Number,
  },
  thumbnail: {
    type: String,
  },
  tag: {
    type: [String],
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    // required: true,
    ref: "Category",
  },
  studentsEnroled: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
  ],
  instructions: {
    type: [String],
  },
  status: {
    type: String,
    enum: ["Draft", "Published"],
  },
  createdAt: { type: Date, default: Date.now },
})

// Export the Courses model
module.exports = mongoose.model("Course", coursesSchema)



// Extend the Base Schema for Different Course Types
// Create schemas for different course types and extend the base schema. You can use Mongoose's discriminators to handle this.

// Discriminators allow you to have a base schema with shared fields and extend it for different subtypes.



// // Create the base Course model
// const Course = mongoose.model("Course", courseBaseSchema);

// // Define VideoCourse Schema
// const videoCourseSchema = new mongoose.Schema({
//   videoUrl: { type: String }, // specific to video courses
// });
// const VideoCourse = Course.discriminator("VideoCourse", videoCourseSchema);

// // Define LiveCourse Schema
// const liveCourseSchema = new mongoose.Schema({
//   liveStreamLink: { type: String }, // specific to live courses
// });
// const LiveCourse = Course.discriminator("LiveCourse", liveCourseSchema);

// // Define TextCourse Schema
// const textCourseSchema = new mongoose.Schema({
//   textContent: { type: String }, // specific to text courses
// });
// const TextCourse = Course.discriminator("TextCourse", textCourseSchema);

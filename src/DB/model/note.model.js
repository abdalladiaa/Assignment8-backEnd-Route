import mongoose from "mongoose";

const noteSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: (value) => {
          const uppercase = value.toUpperCase();
          return value !== uppercase;
        },
        message:"title must be not in uppercase"
      },
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Note = mongoose.models.Note || mongoose.model("Note", noteSchema);

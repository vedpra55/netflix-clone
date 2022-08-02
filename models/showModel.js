import mongoose from "mongoose";

const showModel = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  video: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  image: [
    {
      small: {
        type: String,
      },
      banner: {
        type: String,
      },
    },
  ],
  showType: {
    type: String,
    required: true,
    enum: {
      values: ["Movie", "Series", "Documentry"],
    },
  },
  starCast: {
    type: String,
    required: true,
  },
  aboutShow: {
    type: String,
    required: true,
  },
  aboutProducer: [
    {
      direction: {
        type: String,
      },
      producer: {
        type: String,
      },
      artvfx: {
        type: String,
      },
    },
  ],
  details: [
    {
      totalDuration: {
        type: Number,
        required: true,
      },
      totalSeason: {
        type: Number,
        default: 1,
      },
    },
  ],
});

export const Show = mongoose.models.Show || mongoose.model("Show", showModel);

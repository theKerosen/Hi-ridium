import { Schema, model } from "mongoose";


// ##########################################################

const Canal = new Schema({
  guildId: String,
  sChannelId: String,
  sChannelName: String,
  dChannelId: String,
  dChannelName: String,
  oChannelId: String,
  oChannelName: String,
});
const CanalSchem = model("Channel", Canal);

// ##########################################################

const Report = new Schema(
  {
    ReportedUserId: String,
    Reports: Object,
    ReportPoints: { type: Number, default: 0 },
    userId: String,
    Reason: String,
    date: Date,
  },
  { strict: false }
);
const ReportSchem = model("Report", Report);

// ##########################################################

const Rep = new Schema({
  UserId: String,
  createdAt: Date,
  isPositive: {
    type: Boolean,
    default: false,
  },
  Comments: Object,
  Reputation: {
    type: Number,
    default: 0,
  },
});
const RepSchem = model("Rep", Rep)

// ##########################################################

export { CanalSchem, RepSchem, ReportSchem };

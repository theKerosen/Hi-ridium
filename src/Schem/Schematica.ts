import { Schema, model } from "mongoose";

// ##########################################################

const Canal = new Schema({
  guildId: String,
  sChannelId: String,
  dChannelId: String,
  oChannelId: String,
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
const RepSchem = model("Rep", Rep);

// ##########################################################

const WPScanner = new Schema({
  Name: { type: String, default: "CSGO-Blog-Scanner" },
  LastId: {
    type: Number,
    default: 0,
  },
  LastPostId: {
    type: Number,
    default: 0,
  },
});
const WPSDB = model("WordPressScan", WPScanner);
export { CanalSchem, RepSchem, ReportSchem, WPSDB };

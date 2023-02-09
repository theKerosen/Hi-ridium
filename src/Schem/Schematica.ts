import { Schema, model } from "mongoose";

const blacklist = new Schema({
  UserId: String,
  dateBanned: Date,
});
const blacklistSchem = model("blacklist", blacklist);
//
// ##########################################################
//
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
//
// ##########################################################
//
const ReportSchema = new Schema(
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
const ReportSchem = model("Report", ReportSchema);
//
// ##########################################################
//
// ##########################################################
//

export { CanalSchem, blacklistSchem, ReportSchem };

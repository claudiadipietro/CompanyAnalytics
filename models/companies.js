import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const companySchema = Schema({
  id: String,
  website: String,
  name: String,
  founded: Number,
  size: String,
  locality: String,
  region: String,
  country: String,
  industry: String,
  linkedin_url: String

});

export default mongoose.model('Company', companySchema);
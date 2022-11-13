import Company from '../models/companies.js';

async function getUniqueAttributeValues(attribute) {
  return await Company.distinct(attribute, {});
}

async function getAttributeCount(attribute){
  let attributes;
  await getUniqueAttributeValues(attribute)
  .then((uniqueAttributes) => {attributes=uniqueAttributes})
  .catch((error) => {console.log(error)});
  let attributesCount = [];
  for (let i = 0; i < attributes.length; i++) {
    let query={};
    query[attribute] = attributes[i];
    let count = await Company.countDocuments(query);
    let object={};
    object[attribute] = attributes[i];
    object['count'] = count;
    attributesCount.push(object);
  }
  return attributesCount;
}

export default getAttributeCount;

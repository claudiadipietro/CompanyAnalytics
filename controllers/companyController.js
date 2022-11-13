'use strict'
import Company from '../models/companies.js';
import validator from 'validator';
import getAttributeCount from '../utils/dbUtils.js';

const controller = {
  save: function(request, response){
    const company = new Company();
    const validate_company = !validator.isEmpty(request.body.id);
    
    if (validate_company) {
      company.id = request.body.id;
      company.website = request.body.website;
      company.name = request.body.name;
      company.founded = request.body.founded;
      company.size = request.body.size;
      company.locality = request.body.locality;
      company.region = request.body.region;
      company.country = request.body.country;
      company.industry = request.body.industry;
      company.linkedin_url = request.body.linkedin_url;
    }

    company.save((error, companyStored) => {
      if (error) {
        response.status(500).send({
          message: 'Error saving company'
        });
      }
      if (!companyStored) {
        response.status(404).send({
          message: 'Company not saved'
        });
      }
      return response.status(200).send({
        status: 'success',
        company: companyStored
      })
    }
  )},

  returnBySize: function(request, response){
    const query = {};
    const sort = { size: -1 };
    Company.find(query).sort(sort).exec((error, companies) => {
      if (error) {
        response.status(500).send({
          message: 'Error returning companies'
        });
      }
      if (!companies) {
        response.status(404).send({
          message: 'No companies found'
        });
      }
      return response.status(200).send({
        companies: companies
      })
    })
  },

  returnByCreationDate: function(request, response){
    const query = {};
    const sort = { founded: -1 };
    Company.find(query).sort(sort).exec((error, companies) => {
      if (error) {
        response.status(500).send({
          message: 'Error returning companies'
        });
      }
      if (!companies) {
        response.status(404).send({
          message: 'No companies found'
        });
      }
      return response.status(200).send({
        companies: companies
      })
    })
  },

  summary: async function(request, response){
    return response.status(200).send({
      industries: await getAttributeCount('industry'),
      sizes: await getAttributeCount('size'),
      foundedYears: await getAttributeCount('founded'),
    })
  },

};
export default controller;
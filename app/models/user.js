const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  'first_name': String,
  'last_name': String,
  'age': Number,
  'gender': String,
  'height': Number,
  'weight': Number,
  'city': String,
  'street_number': Number,
  'street_name': String,
  'city_code': String,
  'phone': String,
  'image_profil': String,
  'email': String,
  'password': String
}, {
  collection: 'users',
  minimize: false,
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id
    delete ret._id
  }
})

module.exports = Schema

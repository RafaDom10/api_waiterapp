import express from 'express'
import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express()

    app.listen('3001', () => {
      console.log('🔥 Server started at http://localhost:3001')
    })
  })
  .catch(() => console.log('error'))

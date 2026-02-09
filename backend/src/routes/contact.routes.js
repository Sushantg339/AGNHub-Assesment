import express from 'express'
import { getAllContactController, postContactController } from '../controllers/contact.controller.js'

const router = express.Router()

router.post('/', postContactController)
router.get('/', getAllContactController)

export default router
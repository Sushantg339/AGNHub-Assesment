import express from 'express'
import { getAllServicesController, getSingleServiceController } from '../controllers/service.controller'

const router = express.Router()

router.get('/', getAllServicesController)
router.get('/:id', getSingleServiceController)


export default router
import { success } from "zod"
import serviceModel from "../models/service.model"

export const getAllServicesController = async(req , res)=>{
    try {
        const services = await serviceModel.find({})
        return res.status(200).json({
            success : true,
            data : services,
            message : "Services Fetched Successfully!"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            data : '',
            message : "Internal Server Error!"
        })
    }
}

export const getSingleServiceController = async (req, res)=>{
    try {
        const {id} = req.params

        const service = await serviceModel.findById(id)

        if(!service){
            return res.status(404).json({
                success : false,
                data : '',
                message : "Service not found"
            })
        }

        return res.status(200).json({
            success : true,
            data : services,
            message : "Service Fetched Successfully!"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            data : '',
            message : "Internal Server Error!"
        })
    }
}
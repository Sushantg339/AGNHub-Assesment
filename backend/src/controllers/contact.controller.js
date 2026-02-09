import {z} from "zod"
import contactModel from "../models/contact.model.js"

export const postContactController = async (req,res)=>{
    try {
        const requiredBody = z.object({
            name : z.string(),
            email: z.email(),
            message: z.string()
        })

        const parsed = requiredBody.safeParse(req.body)

        if(!parsed.success){
            return res.status(400).json({
                success: false,
                data : null,
                message : "Invalid Body!"
            })
        }

        const {name, email, message} = parsed.data

        const contact = await contactModel.create({
            name, email, message
        })

        return res.status(201).json({
            success: true,
            data : contact,
            message : "Successfully Created Contact!"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            data : null,
            message : "Internal Server Error!"
        })
    }
}

export const getAllContactController = async (req , res)=>{
    try {
        const contacts = await contactModel.find({})

        return res.status(200).json({
            success: true,
            data : contacts,
            message : "Contacts Fetched Successfully!"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            data : null,
            message : "Internal Server Error!"
        })
    }
}
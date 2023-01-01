import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
    mail: {type: String, requiere: true},
    password: {type: String, requiere: true},
    photo: {type: String, requiere: true},
    is_online: {type: Boolean, requiere: true},
    is_admin: {type: Boolean, requiere: true},
    is_author: {type: Boolean, requiere: true},
    is_company: {type: Boolean, requiere: true},
    is_verified: {type: Boolean, requiere: true},
    verify_code: {type: String, requiere: true}
    },{
        timestamps: true
    }
)

export const User = mongoose.model('users',schema)
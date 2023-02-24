import mongoose from "mongoose";

let productSchema = mongoose.Schema({
        name: {
            type:String
        },
        description: {
            type: String
        },
        image: {
            type: String
        },
        quantity: {
            type: Number
        },
        price: {
            type: Number
        },
    }, {
        timestamps: true,
        versionKey: false
    }
);

export const Product = mongoose.model('Product', productSchema);
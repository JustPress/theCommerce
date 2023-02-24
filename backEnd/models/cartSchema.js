import mongoose from "mongoose";

let productSchema = mongoose.Schema({
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', 
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product', 
        },
    }, {
        timestamps: true,
        versionKey: false
    }
);

export const Product = mongoose.model('Product', productSchema);
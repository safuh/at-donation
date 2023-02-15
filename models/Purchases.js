import mongoose from "mongoose";


const purchaseSchema = new mongoose.Schema(
    {
        phonenumber: { type: String, required: true },
        donation: { type: Number, required: true },
        airtime: { type: Number, required: true},
    },
    {
        timestamps: true,
    }
);

const Purchase = mongoose.models.Purchase || mongoose.model('Purchase', purchaseSchema);
export default Purchase;

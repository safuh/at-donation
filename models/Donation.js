import mongoose from "mongoose";


const donationSchema = new mongoose.Schema(
    {
        donationtitle: { type: String, required: true },
        targetamount: { type: Number, required: true },
        description: { type: String, required: true},
        
    },
    {
        timestamps: true,
    }
);

const Donation = mongoose.models.Donation || mongoose.model('Donation', donationSchema);
export default Donation;

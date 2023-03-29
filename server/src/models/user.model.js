const mongoose = require("mongoose");
const bcryptjs = require('bcryptjs');

const userSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        cartItems: [{ type: Object, required: false }],
        wishList: [{ type: Object, required: false }],
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

// userSchema.pre("save", function (next) {
//     if (!this.isModified("password")) return next();

//     const hash = bcryptjs.hashSync(this.password, 8);
//     this.password = hash

//     return next();
// })

// userSchema.methods.checkPassword = function (password) {
//     const match = bcryptjs.compareSync(password, this.password);

//     return match;
// }

module.exports = mongoose.model("users", userSchema);

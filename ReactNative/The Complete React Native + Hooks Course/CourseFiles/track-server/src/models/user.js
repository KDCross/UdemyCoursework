const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre("save", function (next) {
    const user = this;
    if (!user.isModified("password")) {
        return next();
    }

    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err);
        }
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) {
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function(candidatePassword) {
    const user = this;

    return new Promise((resolve, reject) => {
        bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
            if (err) {
                return reject(err);
            }
            if (!isMatch) {
                return reject(false);
            }
            resolve(true);
        });
    });
}

router.post("/signin", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(422).send({ error: "Must provie email and password" });
    }

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(422).send({ error: "Invalid password or email" });
    }
    try {
        await user.comparePassword(password);
        const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY")
        res.send({ token });
    }
    catch (err) {
        return res.status(422).send({ error: "Invalid password or email" });
    }
});

mongoose.model("User", userSchema);
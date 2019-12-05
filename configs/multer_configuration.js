module.exports = (params) => {

    const crypto = require("crypto");

    const storage = params[0].diskStorage({
        destination: function (req, file, cb) {
            cb(null, "uploads/")
        },

        filename: function (req, file, cb) {
            const path = require('path')
            const current_date = Date.now();
            const filename = current_date + "-" + file.originalname;
            const hashed_name = file.originalname.split(' ').join('_').split('.').slice(0, -1).join('.') + "_" +
                crypto.createHmac("sha1", crypto.createHmac("sha256", "0").update(file.mimetype).digest("hex").toString())
                .update(filename).digest("hex");
            cb(null, hashed_name + path.extname(file.originalname));
        }
    });

    const upload = params[0]({
        storage: storage
    });

    return upload;
};

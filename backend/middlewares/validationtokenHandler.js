
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

module.exports = async function (req, res, next) {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    const tokenPart = token?.split(' ')[1];

    if (!tokenPart) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(tokenPart, process.env.JWT_SECRET);

        if (!decoded) {
            return res.status(401).json({ msg: 'Token is not valid' });
        }

        const id = decoded.user.id;

        const user = await User.findById(id);

        if (!user) {
            return res.status(401).json({ msg: 'Token is not valid' });
        }

        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send('Server error');
    }
}

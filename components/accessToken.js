import jwt from 'jsonwebtoken';

export function generate(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '20s',
    });
}

export async function authenticate(req, res, next) {

    try {
        if (!req.headers.authorization)
            throw new Error('No Authroization Headers');
        let accessToken = req.headers.authorization.split(' ')[1];
        if (!accessToken) {
            throw new Error('No Access Token');
        }
        let user = await jwt.verify(
            accessToken,
            process.env.ACCESS_TOKEN_SECRET
        );
        req.authUser = user.username;
        next();
    } catch (error) {
        console.log(error.message);
        res.send();
    }
}

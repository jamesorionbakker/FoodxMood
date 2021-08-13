import jwt from 'jsonwebtoken';

export function generate(user) {
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: '365d',
    });
}
import JWT from 'jsonwebtoken';


export function authorize(req, res, next) {
    let accessToken = req.headers.authorization.split(' ')[1];
    if (!accessToken) res.sendStatus(401);

    JWT.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) {
            console.log(err)
            return res.sendStatus(403)
        }
        req.authUser = user.username
        next()
    })

}

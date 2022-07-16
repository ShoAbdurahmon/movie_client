import JWT from 'jsonwebtoken'

export default {
    sign: payload => {
        try {
            return JWT.sign(payload, process.env.JWT_SECRET)
        } catch(error) {
            console.log(error.message)
        }
    },
    verify: token => {
        try {
            return JWT.verify(token, process.env.JWT_SECRET)
        } catch(error) {
            console.log(error.message)
        }
    },
}
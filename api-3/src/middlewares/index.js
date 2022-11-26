const middlewares = {

    authenticate(req, res, next) {

        const { authentication } = req.headers
        const { user_id } = req.params
        console.log(authentication)
        console.log(user_id)
        
        if (!authentication) return res.status(400).json({ message: 'No token' })
        if (authentication !== user_id) return res.status(400).json({message: 'Not Allowed'})

        next()

    }

}

module.exports = middlewares
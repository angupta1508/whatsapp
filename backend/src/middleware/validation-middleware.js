const validate = (schema) => async(req,res,next) => {
    try {
        const parseBody = await schema.parseAsync(req.body)
        req.body = parseBody;
        next()
    } catch (error) {
        const formattedErrors = error.errors.map(err => ({
            path: err.path[0],
            message: err.message
        }));
        res.status(400).json({ status: false, errors: formattedErrors });
    }
}

module.exports = validate;
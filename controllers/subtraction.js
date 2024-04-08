const logger = require("../logger")

const subtraction = async (req, res, next) =>{
    try{
        const num1 = parseInt(req.query.num1);
        const num2 = parseInt(req.query.num2);

        logger.log({
            level: "info",
            message: `subtracting ${num2} from ${num1}`
        })
        const result = parseInt(num1 - num2);
        res.status(200).send({ message: "success", data: result });
    }
    catch(error){
        next(error)
    }
}

module.exports = subtraction;
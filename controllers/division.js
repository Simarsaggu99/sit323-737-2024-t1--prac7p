const logger = require("../logger")

const division = async (req, res, next) =>{
    try{
        const num1 = parseInt(req.query.num1);
        const num2 = parseInt(req.query.num2);
        if(num2 === 0){
            res.status(400).send({ message: "bad request", data: "cannot divide by 0" });
        }
        logger.log({
            level: "info",
            message: `dividing ${num1} by ${num2}`
        })
        const result = Number(num1 / num2);
        res.status(200).send({ message: "success", data: result });
    }
    catch(error){
        next(error)
    }
}

module.exports = division;
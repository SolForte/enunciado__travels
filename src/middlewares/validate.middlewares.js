export function validatePage(req, res, next){
    const { page } = req.query;

    try{
        if(page <= 0 && page !== undefined){
            return res.status(400).send("Invalid page value");
        }
        next();
    }catch(err){
        return res.status(500).send(err);
    }
}
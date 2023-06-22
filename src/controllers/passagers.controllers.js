import httpStatus from "http-status";
import passagersRepositories from "../repositories/passagers.repositories.js";

async function getPassagers(req,res){
    const { page, name } = req.query;
    try{
        // implementar service
        // implementar repository
        const passagers = await passagersRepositories.getPassagers(page);
        res.status(httpStatus.OK).send(passagers);
    }
    catch(err){
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

const passagersControllers = {
    getPassagers
}

export default passagersControllers;
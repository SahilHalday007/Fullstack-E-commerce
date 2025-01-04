import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';


export function verifyToken(req: Request, res: Response, next: NextFunction){
    const token = req.header('Authorization');

    if(!token){
        res.status(401).json({ error: "Access denied"});
        return;
    }

    try{
    // decode jwt token data
    const decoded = jwt.verify(token, 'your-secret');

    if(typeof decoded !== 'object' || !decoded?.userId){
        res.status(401).json({ error: "Access denied"});
        return
    }
    req.role = decoded.role;
    req.userId = decoded.userId;
    next();

    } catch(e){
    res.status(401).json({ error: "Access not allowed"});
  }
}


export function verifySeller(req: Request, res: Response, next: NextFunction){
    const role = req.role;

    if(role !== 'seller'){
        res.status(401).json({ error: "Access denied"});
        return;
    }
    next();

}
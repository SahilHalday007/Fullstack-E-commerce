import { Request, Response } from 'express';

export function listProducts(req: Request, res: Response){
    res.send("The list of products");
}

export function getProductById(req: Request, res: Response) {
    res.send("GetProductById");
}

export function createProduct(req: Request, res: Response) {
    console.log(req.body);
    res.send("createProduct");
}

export function updateProduct(req: Request, res: Response) {
    res.send("updateProduct")
}

export function deleteProduct(req: Request, res: Response) {
    res.send("deleteProdcut")
}
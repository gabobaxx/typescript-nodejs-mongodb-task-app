import { Request, Response } from 'express';

class IndexController {

    public index (req: Request, res: Response) {
        res.render('index', { title: 'Welcome to Typescript App'});        
    }

}

export const controller = new IndexController();


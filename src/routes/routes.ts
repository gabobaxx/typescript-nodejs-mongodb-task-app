import { Router, Request, Response } from 'express';

const router: Router = Router()


// Model
import Task from '../models/model';

router.get('/', (req: Request, res: Response) => {
    res.render('index', { title: 'Welcome to Typescript App' });
});

router.route('/task')
    .get(async (req: Request, res: Response) => {
        const tasks = await Task.find().lean();
        res.render('tasks/list', { tasks });
    });

router.route('/task/add')
    .get((req: Request, res: Response) => {
        res.render('tasks/create');
    })
    .post(async (req: Request, res: Response) => {
        const { title, description } = req.body;
        const task = new Task({ title, description });
        await task.save();
        res.redirect('/task');
    });


router.route('/delete/:id')
    .get(async (req: Request, res: Response) => {
        const { id } = req.params;
        await Task.findByIdAndDelete(id);
        res.redirect('/task');
    });

router.route('/edit/:id')
    .get(async (req: Request, res: Response) => {
        const { id } = req.params;
        const task = await Task.findById(id).lean();
        res.render('tasks/edit', { task });
    })
    .post(async (req: Request, res: Response) => {
        const { id } = req.params;
        const { title, description } = req.body;
        await Task.findByIdAndUpdate(id, {
            title, description
        });
        res.redirect('/task');
    })

export default router;


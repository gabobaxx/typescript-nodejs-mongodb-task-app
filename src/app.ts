import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';

// ROUTES
import router from './routes/routes';

class Application {

    app: express.Application;

    constructor() {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    // SETTINGS 
    settings() {

        this.app.set('views', path.join(__dirname, 'views'))
        this.app.engine('.hbs', exphbs({
            extname: '.hbs',
            defaultLayout: 'main',
            layoutsDir: path.join(this.app.get('views'), 'layouts'),
            partialsDir: path.join(this.app.get('views'), 'partials')
        }));
        this.app.set('view engine', '.hbs');
    }

    middlewares() {
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/', router);
    }


    start(port?: number): void {
        this.app.set('port', process.env.PORT || port || 4000);
        this.app.listen(this.app.get('port'), () => {
            console.log(`>>> App running => localhost:${this.app.get('port')}`);
        });
    }
}

export default Application;
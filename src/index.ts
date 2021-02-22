import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';

// IMPORTING ROUTES 
import IndexRoutes from './routes';
import BooksRoutes from './routes/books';

// INITIALIZATIONS 
const app = express();
import './db';

// SETTINGS 
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    helpers: require('./libs/helpers')
}));
app.set('view engine', '.hbs');

// MIDDLEWARES 
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// ROUTES
app.use(IndexRoutes);
app.use('/books', BooksRoutes);

// STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

// SERVER 
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

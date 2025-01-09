//1 import express
import  express  from 'express'; 
//4 import dotenv
import dotenv from 'dotenv';
import comments from './comments.js';
import productRoutes from './routes/productsRoute.js';


//2 ye
const app = express();
//5 ye
dotenv.config();




//6 create route
app.get('/', (req, res) => {
    res.status(200).send('Welcome to Backend');
});

app.get('/profile', (req, res) => {
    res.status(200).send('Your Profile Page');
});


//6 create dynamic route
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    res.status(200).send('Welcome User ' + id);
    //  res.status(200).send(`Welcome User ${id}`); 
});

app.get('/users/:category', (req, res) => {
    const id = req.params.category;
    res.status(200).send(`Welcome Category ${category}`);
});

app.get('/comments', (req, res) => {
    res.status(200).send({status:200, message: "All Comments Here", data: comments});
});

app.get('/login', (req, res) => {
     res.status(200).send({status:200, message: "success", data: "Welcome User"})
});

// app.use('/products/create')
// app.use('/products/delete')

app.use('/products',productRoutes)




app.get('*', (req, res) => {
    res.status(404).send('Page Not Found');
});






//3 create port
const PORT = process.env.PORT ;
app.listen(PORT, () => {
 
    console.log(`Server running on port ${PORT}`)
}
)

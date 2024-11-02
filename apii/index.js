const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Permite parsear JSON en solicitudes entrantes
app.use(cors());

app.get('/login', (req, res) => {
    res.send('Bienvenido a la API');
})

app.post('/login', (req, res) => {
    console.log(req.body);
})

// Ruta de prueba para verificar funcionamiento
app.get('/transactions', (req, res) => {
    res.send('Hola, esta funcionando');
});

// Ruta para manejar la transacción desde el formulario
app.post('/transactions', (req, res) => {
    console.log("Datos de la transacción recibidos:", req.body);
    res.send('Transacción recibida');
});

// Nueva ruta para recibir los datos del producto
app.post('/addedProduct', (req, res) => {
    const { productName, productPrice } = req.body;

    console.log("Producto agregado al carrito:");
    console.log("Nombre:", productName);
    console.log("Precio:", productPrice);

    res.status(200).send("Producto recibido con éxito");
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

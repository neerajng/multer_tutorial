const express =  require('express')
const path = require('path');

const app = express()
const port = 3000

//upload middleware
const upload = require('./upload')

// Set up a static folder for serving static files (like CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'uploads')));

app.get('/', (req, res)=>{
    console.log(__dirname)
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.post('/upload', upload.single('file'), (req, res)=>{
    // Handle the uploaded file
    res.json({message:'File uploaded successfully'})
})

app.listen(port, ()=>{
    console.log(`Server is running on PORT ${port}`)
})
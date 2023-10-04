const express = require("express")
const mongoose = require("mongoose")

const app = express()

//middlewares
app.use(express.json())
app.set('view engine','ejs')

const db = 'mongodb://127.0.0.1:27017/mydb'

mongoose.connect(db, {
    useNewUrlParser : true,
    //useCreateIndex : true,
    useUnifiedTopology :true
})
.then(() => console.log('Database Connected'))
.catch(err => console.log('Database connection error : ',err))

app.use('/',require('./routes/url'))

app.listen(5000, () => console.log('Server is running at port 5000'))
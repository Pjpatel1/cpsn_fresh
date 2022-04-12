import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import PostRoutes from './routes/posts.js'

const app = express();

var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(cors());

const CONNECTION_URL ="";

const PORT = 5008;

mongoose.connect(CONNECTION_URL)
.then(() => app.listen(PORT,() => console.log(`Connection successfull at port number: ${PORT}`)) )
.catch((error)=> console.log(error.message));

//Schema
const userSchema = new mongoose.Schema({
    firstName:String,
    lastName:String
})

//Model
var userData =new mongoose.model("User", userSchema);

app.post('/register', jsonParser, 
function (req, res) {
const createDocument = async()=>{
    try{

        const data = new userData({
            firstName : eval(req.body).fname,
            lastName : eval(req.body).lname
        })
        const result = await userData.insertMany(data);
        console.log(result);        
    }
      catch(e){
          console.log(e);
      }

    }
    createDocument();

})



app.listen(3000)


// const createDocument = async ()=>{
//     try{
//         const data = new User({
//             firstName:item.fname,
//             lastName:item.lname,
//         })
//         const result = await User.create(data);
//         console.log(result);
//     }
//         catch(e){
//             console.log(e);
//         }
//     }

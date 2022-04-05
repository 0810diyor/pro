import express from 'express'
import { engine } from 'express-handlebars'
import path from 'path'

// express config
const app = express()
app.use(express.json())
app.use(express.urlencoded( { extended: true } ))
app.use(express.static(path.join(__dirname, "../public")))

// handlebars
app.engine('.hbs', engine( { extname: '.hbs' } ))
app.set('view engine', '.hbs')
app.set('views', './pages')



//functions

type Card = { 
  url: string,
  name: string,
  narx: string
}

let newTelefon: Card[] =[

  {url:'X3Pro.jpg', name:'sa',narx:'21'}
]


// Routes
app.get('/', (req, res) => {
  res.render('register',{root: './pages'})
})


app.get('/shop', (req , res) => {
  res.render('shop', { newTelefon: newTelefon })
})


app.get('/admin', (req ,res) =>{
  res.render('admin', { root: './pages' })
})

app.post('/MM', (req, res) =>{
  let newCard : Card = req.body
  newTelefon.push(newCard)

  res.redirect('/shop')
})






app.listen(8888, () => console.log("Server is running on "))
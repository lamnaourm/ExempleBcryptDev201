import express from 'express'
import bcrypt from 'bcrypt'

const app = express()
app.use(express.json())


app.post('/data', (req, res) => {
    const user = req.body

    bcrypt.genSalt(10, (err, salt) => {
        if(!err){
            bcrypt.hash(user.password, salt, (err, hash) => { 
                if(!err)
                    res.send(hash)
            })  
        }
    })
      
})


app.get('/verify', (req, res) => {
    const ch = req.body

    bcrypt.compare(ch.chaine, ch.hash, (err, result) => {
        if(!err)
            res.send(result)
    } )
})

app.listen(3000)
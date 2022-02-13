const mode    = require('../knexfile')
const db      = require('../db/db')
// const method  = require('../methods/validation')

const bcrypt  = require('bcrypt')
const express = require('express')

const server  = express.Router()

/* O algoritmo busca e encontra com sucesso um usuário a partir do email,
   compara a senha a partir de um hash gerado pelo bcrypt
*/
server.route('/login').post(async(req, res)=>{
        const user = {  ...req.body  }

        if(!user.email || !user.pass) return res.status(400)
                                                .send('Email e senha não informados!')
    
        const searchUser = await db.where({ email: user.email })
                                   .table('authtest')
                                   .first()
    
        if(!searchUser) return res.status(401).send('Usuário não encontrado!')
    
        if(searchUser) {
            const passwordCompare = bcrypt.compareSync(user.pass,searchUser.pass)
    
            if(!passwordCompare) return res.status(401).send('Email/Senha inválidos!')
    
            if(passwordCompare) {
                   return db.where({email: user.email})
                            .first()
                            .table('authtest')
                            .then(_ => res.status(200).redirect('http://192.168.100.20:3000/app' || 'http://localhost:3000/app'))
                            .catch(err => res.status(400).json(err))
         }
     }
  
})


module.exports = server
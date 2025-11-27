const express = require('express');
const dotenv = require('dotenv');
const cliente = require('./config/db.js');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const app =  express();
app.use(express.json());

app.get('/', async(req, res) => {
 
 try{
  let { data } = await cliente.from('Customer').select('*')
  res.send(data)
 } catch(error){
    console.log(error)
 }
});

app.delete('/:nome', async(req, res) => {
    let nome = req.params.nome
    try{
     await cliente.from('Customer').delete().eq('customer_name', nome)
     res.send('deletado')
    } catch(error){
       console.log(error)
    }
   })

const porta = process.env.PORTA
app.listen(porta, ()=> {
    console.log(`executando ... http://localhost:${porta}`)
})
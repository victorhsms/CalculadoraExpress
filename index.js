const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/:texto/:numero1/:numero2',(req,res)=>{
    let operacao = req.params.texto
    if (operacao === 'soma'){
        let numero1 = parseFloat(req.params.numero1)
        let numero2 = parseFloat(req.params.numero2)
        valorFinal = (numero1+numero2).toString()
    } else if (operacao === 'subtracao'){ 
        let numero1 = parseFloat(req.params.numero1)
        let numero2 = parseFloat(req.params.numero2)
        valorFinal = (numero1-numero2).toString()
    } else if (operacao === 'multiplicacao') {
        let numero1 = parseFloat(req.params.numero1)
        let numero2 = parseFloat(req.params.numero2)
        valorFinal = (numero1*numero2).toString()
    } else if (operacao === 'divisao') {
        let numero1 = parseFloat(req.params.numero1)
        let numero2 = parseFloat(req.params.numero2)
        valorFinal = (numero1/numero2).toString()
    }
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            text-decoration: none;
            border: none;
            font-family: 'Roboto', sans-serif;
        }

        body {
            background: #99DD99;
        }

        .conteudo {
            display: flex;
            flex-direction: column;
            width: max-content;
            margin: 20vh auto 0;
            box-shadow: 0px 23px 34px rgba(35, 57, 55, 0.17);
        }

        main {
            background: #FCFAFA;
            gap: 1.2rem;
            padding:  1rem 1.5rem;
            border-radius: 0.313rem;
        }

        main button {
            background: #FCFAFA;
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
            height: 25px;
        }

        main button:hover {
            border-bottom: 1px solid black;
        }

        main h2 {
            font-size: 32px;
            font-weight: 700;
        }

        @media screen and (max-width: 400px) {
            main h2 {
                font-size: 22px;
            }
        }
    </style>
    <title>Calculadora Express</title>
</head>
<body class="home">
    <div class="conteudo">
        <main>
            <button onclick="retornar()"> < Retornar à calculadora</button>
            <h2>Resultado da ${operacao}: ${valorFinal}</h2>
        </main>
    </div>
    <script>
        function retornar() {
            window.location.href = 'http://localhost:3000'
        }
    </script>
</body>
</html>
    `)
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

var express = require('express');
var router = express.Router();
const {executeQuery} = require('../connection/bancosql')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cad_empresa', async function(req, res, next) {
  let razao_social = 'Lucas Santos';
  let cnpj_cpf = '25408353000156';
  let nome_funcionario = 'Lucas Santos';
  let telefone = '47991140949';
  let email = 'lucas@conlinebr.com.br';

  let query = `INSERT INTO cadastro_empresas
  (razao_social, cnpj_cpf, nome_funcionario, telefone, email) VALUES
  ('${razao_social}', '${cnpj_cpf}', '${nome_funcionario}', '${telefone}', '${email}')`

  let result = await executeQuery(query);

  res.json({status:'ganhamo'});
});

router.get('/empresa', async function(req, res, next) {

  let query = `select * from cadastro_empresas`
  let result = await executeQuery(query);

  res.json(result);
});

module.exports = router;

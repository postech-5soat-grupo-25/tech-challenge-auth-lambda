const serverless = require("serverless-http");
const express = require("express");
const AWS = require('aws-sdk');

const app = express();

const USER_POOL_ID = 'us-east-1_YZhnEtbAT';

const isCpfValid = (cpf) =>
{
  const onlyNumbers = cpf.replace(/\D/g, "");
  return onlyNumbers.length === 11;
};

app.get("/:cpf", async (req, res) =>
{
  const cpf = req.params.cpf;

  if (!cpf)
  {
    return res.status(400).json({
      message: "Missing CPF",
    })
  }

  if (!isCpfValid(cpf))
  {
    return res.status(400).json({
      message: "Invalid CPF",
    });
  }

  const cognito = new AWS.CognitoIdentityServiceProvider();

  const params = {
    UserPoolId: USER_POOL_ID,
    Username: cpf // Assuming username is passed in the event object
  };

  try
  {
    const userData = await cognito.adminGetUser(params).promise();
    const nome = userData.UserAttributes.find(attr => attr.Name === 'name')?.Value ?? 'Sem nome';
    const email = userData.UserAttributes.find(attr => attr.Name === 'email')?.Value ?? 'Sem email';
    const cliente = {
      nome,
      email,
      cpf: userData.Username
    }
    return res.status(200).json(cliente);
  } catch (err)
  {
    console.error(err);
    throw new Error('Failed to get user data');
  }

});

app.use((_, res) =>
{
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);

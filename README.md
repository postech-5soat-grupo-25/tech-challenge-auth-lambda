<!--
title: 'Serverless Framework Node Express API on AWS'
description: 'This template demonstrates how to develop and deploy a simple Node Express API running on AWS Lambda using the traditional Serverless Framework.'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
priority: 1
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->

# `auth-lambda` | PosTech 5SOAT • Grupo 25

Esse projeto faz a configuração de uma API utilizando o API Gateway e Lambda da AWS.
É utilizado o Serverless Framework para fazer o deploy da aplicação e todas as configurações de permissão e detalhes da API podem ser encontrados no arquivo `serverless.yml`.

## Uso

Após o deploy automático via Github Actions, a API estará disponível em um endpoint semelhante a esse

```bash
https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/:cpf

```

Passsando o número de CPF no lugar de `:cpf` você terá acesso a informações sobre o CPF informado, caso o CPF já tenha sido cadastrado no sistema

# Teste prático - Dev Junior

----------

## Introdução
Este teste tem o objetivo de avaliar novos candidatos às vagas de desenvolvedores.

## Objetivos
- Conhecer sobre suas habilidades e sua maneira de trabalho.
- Saber como trabalha com versionamento de código

## Requisitos
- Você deve utilizar o seguinte stack:
    - HTML, CSS, JS
    - PHP ou NODE
    - Composer 
    - Caso prefira utilizar algum framework, utilize o Laravel
    - Banco de Dados (PostgreSQL)
- Cadastro de usuários
    - Nome
    - Login
    - Senha
- Senha DEVE possuir letras e números com, no mínimo, 7 caracteres.    

- Cadastro de Empresas
    - Nome Fantasia
    - CNPJ
    - Data de Fundação
    - E-mail comercial
    - Telefone
    - CEP
    - Endereço
- Utilizar WebService dos Correios para carregar endereço a partir do CEP
- O nome da empresa deve ter, no mínimo, 5 caracteres
- Faça alguma validação para não permitir o cadastro dos e-mails:
  - 'email1@suportegerencial.com.br'
  - 'email2@suportegerencial.com.br'
  - 'email3@suportegerencial.com.br'
- Listar as empresas cadastradas
    - Ao clicar em uma empresa, redirecionar para uma tela com as informações da mesma.
- Editar os dados da empresa.
- Deletar empresas a partir da tela de listagem ou de edição.


## O que avaliamos
- Qualidade de código
- Código limpo
- Simplicidade
- Lógica de programação
- Conceitos de orientação a objetos
- Otimização do código implementado
- Organização e padrão de Commits

### Observações
- Nunca realizamos Commit no main
- Sinta-se à vontade para resolver da forma que achar melhor
- Não tenha medo de comentários, se achar necessário comentar alguma parte ou explicar algo, faça.


## Considerações
- Seja criativo

## Diferenciais:
  - Docker
  - AWS

## Entrega
>**Você deve criar um fork do repositório no seu GitHub e subir seu código lá,**   
**assim que finalizar o projeto, nos envie o link por e-mail**

### Boa Sorte!!

# Notas adicionais sobre as versões.
----------

## anteriores a 07/05/2022

Adicionado o backend(sem JWT) e o protótipo do login screen

## 05/05/2022

Criado o layout padrão da dashboard e o request do index.html

## 07/05/2022 17:24

Alterada a autenticação para jwt token.
Criado rota para armazenar JWTtoken em uma session do php
Criado o HTML base do Dashboard
Aplicado a metodologia BEM ao CSS
Criado esquema de cores padrão do CSS

## 07/05/2022 17:24

Componentização do dashboard.html em web components

## 09/05/2022 05:56

Componentização do HTML reformulada
Iniciado o formulário de cadastro de empresas

## 10/05/2022 05:33

Formulários completos e com validações concluídas.

## 11/05/2022 15:33

Corrigido o erro da consulta da tabela users. Ela retornava a senha criptografada do usuário junto com os demais dados.
Corrigido o erro do autoimport dos campos do formulário HTML. A soluçao foi bem incomum.

### O que falta criar/alterar:

>**Mudar elementos visuais do front end: criar mensagem de sucesso na criação de registros no db**   
**Criar rotas adocionais no backend para retornar por id, no caso a function show. Que não foi implementada nesse momento no projeto**



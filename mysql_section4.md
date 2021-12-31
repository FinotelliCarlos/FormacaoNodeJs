# MySQL Básico
-Sistema de gerenciamento de Banco de Dados
 - https://www.mysql.com/

 - Acessando o mysql pelo CMD
 - Sempre usar ; quando utilizar comandos sql
 *mysql -h localhost -u root -p*
 *digirat senha root*
- Para exibir de Banco de Dados Existentes
*SHOW DATABASES;*
- Para criar um banco de dados
*CREATE DATABASE sistemaDeCadastro*
- Para verificar se o banco de dados foi criado
*SHOW DATABAES;*
- Para acessar um banco de dados
*USE sistemadecadastro*
- Para acessar tabelas
*SHOW TABLES;*
- Para criar tabelas
*CREATE TABLE usuarios(nome VARCHAR(50), email VARCHAR(100));*
- Para verificar se a tabela foi criada
*SHOW TABLES;*
- Para ver a estrutura da tabela
*DESCRIBE usuarios;*
# Estrutura de dados (Tabela)
-Tipo de dados que podem ser armazenados
*VARCHAR* - Texto
*CHAR* - Caracteres
*int* - Numeros Inteiros
*float* - Numeros Decimais
*date* - Datas
*blob* - Arquivos

# MySQL Básico
-Sistema de gerenciamento de Banco de Dados<br>
 - https://www.mysql.com/<br>

 - Acessando o mysql pelo CMD<br>
 - Sempre usar ; quando utilizar comandos sql<br>
 *mysql -h localhost -u root -p*<br>
 *digirar senha root*<br>
- Para exibir de Banco de Dados Existentes<br>
*SHOW DATABASES;*<br>
- Para criar um banco de dados<br>
*CREATE DATABASE sistemaDeCadastro*<br>
- Para verificar se o banco de dados foi criado<br>
*SHOW DATABAES;*<br>
- Para acessar um banco de dados<br>
*USE sistemadecadastro*<br>
- Para acessar tabelas<br>
*SHOW TABLES;*<br>
- Para criar tabelas<br>
*CREATE TABLE usuarios(nome VARCHAR(50), email VARCHAR(100));*<br>
- Para verificar se a tabela foi criada<br>
*SHOW TABLES;*
- Para ver a estrutura da tabela<br>
*DESCRIBE usuarios;*<br>
- Para inserir dados na tabelas<br>
*INSERT INTO usuarios(nome,email, idade) VALUES(*<br>
    *'carlos',*<br>
    *'carlos.finotelli@outlook.com',*<br>
    *25*<br>
*);*<br>
- Para listar os dados<br>
*SELECT * FROM usuarios;*<br>
- Buscar dados na tabela<br>
*SELECT * FROM usuarios WHERE idade >= 18;*<br>


# Tipos de comandos
*SELECT* - Selecionar<br>
*INSERT* - Inserir<br>
*WHERE* - Buscar<br>
*DELETE* - Deletar<br>
# Estrutura de dados (Tipo de dados)
-Tipo de dados que podem ser armazenados<br>
*VARCHAR* - Texto<br>
*CHAR* - Caracteres<br>
*INT* - Numeros Inteiros<br>
*FLOAT* - Numeros Decimais<br>
*DATE* - Datas<br>
*BLOB* - Arquivos

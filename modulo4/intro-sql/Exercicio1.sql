USE `aragon-jorge-silvestre`;

SET SQL_SAFE_UPDATES = 0;

-- Exercicio 1 Desenvolva uma query que crie uma tabela de usuários (funcionários) de uma dada empresa. Um usuário será representado no banco pelas seguintes propriedades:

-- - id: Identificador único do usuário no banco de dados, representado por um número em formato string (exemplo: “456”, “009”, “1253”).
-- - name: Nome do usuário, em formato string.
-- - email: E-mail do usuário, em formato string.

CREATE TABLE `Funcionarios` (
	id VARCHAR(255) PRIMARY KEY,
  	name VARCHAR(255) NOT NULL,
  	email VARCHAR(255) NOT NULL
  
);
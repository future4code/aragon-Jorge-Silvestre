-- Letra A - Desenvolva uma query que exiba a lista completa de usuários criados anteriormente, com todos os seus dados.

SELECT * FROM `Funcionarios`;

-- Letra B - Desenvolva uma query que nos retorne apenas as informações de id e nome dos usuários da tabela. Além disso, a coluna de id´s deve ser exibida com o texto “identifier”.

SELECT id AS identifier, name FROM `Funcionarios`; 

-- Letra C - Desenvolva uma query que nos retorne apenas as informações do usuário “Laura”. A busca deve ser feita pelo id.

SELECT * FROM `Funcionarios`
WHERE id = 003;

-- Letra D - Desenvolva uma query que nos retorne todos os usuários que tenham a letra “a” no seu nome.

SELECT * FROM `Funcionarios`
WHERE name LIKE "%a%";

-- Letra E - Desenvolva uma query que nos retorne todos os usuários que não tenham a letra “r” no seu nome, mas que tenham a letra “u” no seu e-mail.

SELECT * FROM `Funcionarios`
WHERE name NOT LIKE "%r%" AND email like "%u%";
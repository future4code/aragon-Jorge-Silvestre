-- Exercicio 4 - Insira um novo usuário, com as seguintes propriedades e valores:

-- Usuário 4 = {
-- 	id: "004",
-- 	name: "Yuzo",
-- 	email: "yuzo@lbn.com"
-- };

INSERT INTO `Funcionarios`
VALUES ("004", "Yuzo", "yuzo@lbn.com");

-- Após confirmar a inserção, remova o usuário criado anteriormente (apenas o Usuário 4) da tabela de usuários. Confirme o sucesso da operação.

DELETE FROM `Funcionarios`
WHERE id = 004;
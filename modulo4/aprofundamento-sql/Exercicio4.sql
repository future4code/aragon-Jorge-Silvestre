-- ## Exercício 4

-- ### Letra A

-- Após certo tempo, a equipe de desenvolvimento chegou a conclusão da necessidade de existir uma descrição mínima do projeto, que facilite o entendimento do seu significado. Dito isto, desenvolva uma query que adicione uma propriedade chamada “description” a tabela de projetos, sem apagar a tabela inteira. Confirme o sucesso da operação.

ALTER TABLE Projetos
ADD description VARCHAR(255) NOT NULL;

-- ### Letra B

-- Desenvolva uma query que atualize o campo “description” de cada projeto existente no banco de dados. Tome como referência as seguintes descrições:

-- Projeto 1 = {
-- 	...
-- 	description: "Projeto de sistema em nuvem da Labenu." 
-- };

-- Projeto 2 = {
-- 	...
-- 	description: "Projeto de sistema de gerenciamento de músicas da Labenu."
-- };

-- Projeto 3 = {
-- 	...
-- 	description: "Projeto de rede de comunicação da Labenu."
-- };

UPDATE Projetos
SET description = "Projeto de sistema em nuvem da Labenu."
WHERE id = 001;

UPDATE Projetos
SET description = "Projeto de sistema de gerenciamento de músicas da Labenu."
WHERE id = 002;

UPDATE Projetos
SET description = "Projeto de rede de comunicação da Labenu."
WHERE id = 003;
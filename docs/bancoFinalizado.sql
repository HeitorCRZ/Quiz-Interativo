create database BancoTecnico;
use BancoTecnico;

CREATE TABLE Usuarios (
    idUsuario INT AUTO_INCREMENT PRIMARY KEY,
    nomeUsuario VARCHAR(100) NOT NULL,
    emailUsuario VARCHAR(100) UNIQUE NOT NULL,
    senhaUsuario VARCHAR(100) NOT NULL
);
CREATE TABLE respostas_usuarios (
    Respostas_idUsuario Varchar(100),
    Data_Teste DATETIME,
    Pontos_Informatica INT NOT NULL,
    Pontos_Eletronica INT NOT NULL,
    Pontos_Publicidade INT NOT NULL,
    Pontos_Adminitracao INT NOT NULL,
    Pontos_Quimica INT NOT NULL,
    Pontos_Analises INT NOT NULL
);
CREATE TABLE Cursos (
    ID_Curso INT AUTO_INCREMENT PRIMARY KEY,
    Nome_Curso VARCHAR(100) NOT NULL
);
CREATE TABLE Questoes_Cursos (
    ID_Questao INT AUTO_INCREMENT PRIMARY KEY,
    ID_Curso_Ref INT,
	Posicao INT NOT NULL,
    Questao VARCHAR(100) NOT NULL,
	FOREIGN KEY (ID_Curso_Ref) REFERENCES Cursos(ID_Curso) 
);
CREATE TABLE Respostas_Questoes (
    ID_Questao_Ref INT NOT NULL,
	Valor INT NOT NULL,
    Resposta VARCHAR(100) NOT NULL,
	FOREIGN KEY (ID_Questao_Ref) REFERENCES Questoes_Cursos(ID_Questao) 
);

INSERT INTO cursos (ID_Curso, Nome_Curso)
VALUES
(1, 'Informática'),
(2, 'Eletrônica'),
(3, 'Publicidade'),
(4, 'Administração'),
(5, 'Química'),
(6, 'Análises'),
(1000, 'Fixas');


INSERT INTO questoes_cursos (ID_Curso_Ref, Posicao, Questao) VALUES
-- Perguntas introdutórias (ID_Curso_Ref = 1000)
(1000, 1, 'O que mais te chama atenção?'),
(1000, 2, 'O que mais te chama atenção?'),
(1000, 3, 'O que mais te chama atenção?'),

-- ANÁLISES CLÍNICAS (ID_Curso_Ref = 6)
(6, 4, 'Você sente alguma apreensão em relação a agulhas?'),
(6, 5, 'Você se considera uma pessoa higiênica e organizada?'),
(6, 6, 'Você consegue seguir normas à risca?'),
(6, 7, 'Você consegue manter a concentração mesmo em momentos de crise?'),
(6, 8, 'Você se sente desconfortável ao lidar com ferramentas clínicas?'),
(6, 9, 'Você tem destreza ao realizar procedimentos manuais, garantindo precisão?'),

-- PUBLICIDADE (ID_Curso_Ref = 3)
(3, 4, 'Você se considera uma pessoa criativa?'),
(3, 5, 'Você busca se manter atualizado sobre o que está acontecendo no mundo?'),
(3, 6, 'Você se considera uma pessoa persuasiva?'),
(3, 7, 'Você gosta de lidar com o público?'),
(3, 8, 'Você se considera uma pessoa que se familiariza com diferentes canais de comunicação?'),
(3, 9, 'Você se considera uma pessoa com senso crítico ao avaliar o público alvo de algo?'),

-- ADM (ID_Curso_Ref = 4)
(4, 4, 'Você costuma valorizar organização e metodologia?'),
(4, 5, 'Você se considera uma pessoa com um pensamento estratégico?'),
(4, 6, 'Você normalmente costuma propor soluções a demandas que precisam ser resolvidas?'),
(4, 7, 'Você se considera uma pessoa com habilidades interpessoais?'),
(4, 8, 'Você se considera uma pessoa observadora e analítica?'),
(4, 9, 'Você valoriza como prioridade o planejamento em projetos?'),

-- INFORMÁTICA (ID_Curso_Ref = 1)
(1, 4, 'Você gosta de pensar sobre questões numéricas e resolução de problemas?'),
(1, 5, 'Você tem interesse por aparelhos tecnológicos?'),
(1, 6, 'Você se considera uma pessoa com um bom raciocínio lógico?'),
(1, 7, 'Você normalmente tem interesse em acompanhar e se atualizar sobre as tendências tecnológicas?'),
(1, 8, 'Você gosta de analisar e desenvolver funções?'),
(1, 9, 'Você costuma buscar soluções inovadoras?'),

-- QUÍMICA (ID_Curso_Ref = 5)
(5, 4, 'Você gosta de experimentos?'),
(5, 5, 'Você se preocupa com o meio ambiente?'),
(5, 6, 'Você gosta de realizar pesquisas?'),
(5, 7, 'Você gosta de laboratórios?'),
(5, 8, 'Você gosta de analisar composições?'),
(5, 9, 'Você se vê trabalhando no ramo de indústrias farmacêuticas e cosméticos?'),

-- ELETRÔNICA (ID_Curso_Ref = 2)
(2, 4, 'Você se interessa pelo desenvolvimento de máquinas?'),
(2, 5, 'Você se sente instigado em abrir ou mexer com hardwares?'),
(2, 6, 'Você presume que otimizar sistemas é importante para a eficiência de aparelhos?'),
(2, 7, 'Você acha que modernizar equipamentos tecnológicos garante maior eficácia nos resultados?'),
(2, 8, 'Você se considera uma pessoa integrada com a manutenção de dispositivos?'),
(2, 9, 'Você tem interesse na parte analógica da tecnologia?');


INSERT INTO respostas_questoes (ID_Questao_Ref, Valor, Resposta) VALUES
-- Respostas para as 3 primeiras perguntas introdutórias (ID_Questao_Ref = 1, 2, 3)

-- Questão 1 (ID_Questao_Ref = 1)
(1, 'Pontos_Administracao', 'empreender e aprender sobre empresas'),
(1, 'Pontos_Informatica', 'desenvolver software'),
(1, 'Pontos_Publicidade', 'comunicar e se envolver com público'),
(1, 'Pontos_Quimica', 'realizar experiências'),

-- Questão 2 (ID_Questao_Ref = 2)
(2, 'Pontos_Eletronica', 'criar novas tecnologias'),
(2, 'Pontos_Analises_Clinicas', 'cuidar de pessoas/animais'),
(2, 'Pontos_Administracao', 'analisar dados de vendas e organizar'),
(2, 'Pontos_Informatica', 'desenvolver raciocínio lógico'),

-- Questão 3 (ID_Questao_Ref = 3)
(3, 'Pontos_Publicidade', 'tirar fotos e fazer propagandas'),
(3, 'Pontos_Quimica', 'analisar estruturas e fazer experimentos científicos'),
(3, 'Pontos_Eletronica', 'desenvolvimento de sistemas e partes hardware'),
(3, 'Pontos_Analises_Clinicas', 'interesse em medicina e cura de pessoas'),

-- Respostas para as perguntas SIM ou NÃO de Análises Clínicas (ID_Curso_Ref = 6)
-- Questão 4 (ID_Questao_Ref = 4)
(4, 'Pontos_Analises_Clinicas', 'Sim'),
(4, '0', 'Não'),

-- Questão 5 (ID_Questao_Ref = 5)
(5, 'Pontos_Analises_Clinicas', 'Sim'),
(5, '0', 'Não'),

-- Questão 6 (ID_Questao_Ref = 6)
(6, 'Pontos_Analises_Clinicas', 'Sim'),
(6, '0', 'Não'),

-- Questão 7 (ID_Questao_Ref = 7)
(7, 'Pontos_Analises_Clinicas', 'Sim'),
(7, '0', 'Não'),

-- Questão 8 (ID_Questao_Ref = 8)
(8, 'Pontos_Analises_Clinicas', 'Sim'),
(8, '0', 'Não'),

-- Questão 9 (ID_Questao_Ref = 9)
(9, 'Pontos_Analises_Clinicas', 'Sim'),
(9, '0', 'Não'),

-- Respostas para Publicidade (ID_Curso_Ref = 3)
-- Questão 4 (ID_Questao_Ref = 4)
(10, 'Pontos_Publicidade', 'Sim'),
(10, '0', 'Não'),

-- Questão 5 (ID_Questao_Ref = 5)
(11, 'Pontos_Publicidade', 'Sim'),
(11, '0', 'Não'),

-- Questão 6 (ID_Questao_Ref = 6)
(12, 'Pontos_Publicidade', 'Sim'),
(12, '0', 'Não'),

-- Questão 7 (ID_Questao_Ref = 7)
(13, 'Pontos_Publicidade', 'Sim'),
(13, '0', 'Não'),

-- Questão 8 (ID_Questao_Ref = 8)
(14, 'Pontos_Publicidade', 'Sim'),
(14, '0', 'Não'),

-- Questão 9 (ID_Questao_Ref = 9)
(15, 'Pontos_Publicidade', 'Sim'),
(15, '0', 'Não'),

-- Respostas para Administração (ID_Curso_Ref = 4)
-- Questão 4 (ID_Questao_Ref = 4)
(16, 'Pontos_Administracao', 'Sim'),
(16, '0', 'Não'),

-- Questão 5 (ID_Questao_Ref = 5)
(17, 'Pontos_Administracao', 'Sim'),
(17, '0', 'Não'),

-- Questão 6 (ID_Questao_Ref = 6)
(18, 'Pontos_Administracao', 'Sim'),
(18, '0', 'Não'),

-- Questão 7 (ID_Questao_Ref = 7)
(19, 'Pontos_Administracao', 'Sim'),
(19, '0', 'Não'),

-- Questão 8 (ID_Questao_Ref = 8)
(20, 'Pontos_Administracao', 'Sim'),
(20, '0', 'Não'),

-- Questão 9 (ID_Questao_Ref = 9)
(21, 'Pontos_Administracao', 'Sim'),
(21, '0', 'Não'),

-- Respostas para Informática (ID_Curso_Ref = 1)
-- Questão 4 (ID_Questao_Ref = 4)
(22, 'Pontos_Informatica', 'Sim'),
(22, '0', 'Não'),

-- Questão 5 (ID_Questao_Ref = 5)
(23, 'Pontos_Informatica', 'Sim'),
(23, '0', 'Não'),

-- Questão 6 (ID_Questao_Ref = 6)
(24, 'Pontos_Informatica', 'Sim'),
(24, '0', 'Não'),

-- Questão 7 (ID_Questao_Ref = 7)
(25, 'Pontos_Informatica', 'Sim'),
(25, '0', 'Não'),

-- Questão 8 (ID_Questao_Ref = 8)
(26, 'Pontos_Informatica', 'Sim'),
(26, '0', 'Não'),

-- Questão 9 (ID_Questao_Ref = 9)
(27, 'Pontos_Informatica', 'Sim'),
(27, '0', 'Não'),

-- Respostas para Química (ID_Curso_Ref = 5)
-- Questão 4 (ID_Questao_Ref = 4)
(28, 'Pontos_Quimica', 'Sim'),
(28, '0', 'Não'),

-- Questão 5 (ID_Questao_Ref = 5)
(29, 'Pontos_Quimica', 'Sim'),
(29, '0', 'Não'),

-- Questão 6 (ID_Questao_Ref = 6)
(30, 'Pontos_Quimica', 'Sim'),
(30, '0', 'Não'),

-- Questão 7 (ID_Questao_Ref = 7)
(31, 'Pontos_Quimica', 'Sim'),
(31, '0', 'Não'),

-- Questão 8 (ID_Questao_Ref = 8)
(32, 'Pontos_Quimica', 'Sim'),
(32, '0', 'Não'),

-- Questão 9 (ID_Questao_Ref = 9)
(33, 'Pontos_Quimica', 'Sim'),
(33, '0', 'Não'),

-- Respostas para Eletrônica (ID_Curso_Ref = 2)
-- Questão 4 (ID_Questao_Ref = 4)
(34, 'Pontos_Eletronica', 'Sim'),
(34, '0', 'Não'),

-- Questão 5 (ID_Questao_Ref = 5)
(35, 'Pontos_Eletronica', 'Sim'),
(35, '0', 'Não'),

-- Questão 6 (ID_Questao_Ref = 6)
(36, 'Pontos_Eletronica', 'Sim'),
(36, '0', 'Não'),

-- Questão 7 (ID_Questao_Ref = 7)
(37, 'Pontos_Eletronica', 'Sim'),
(37, '0', 'Não'),

-- Questão 8 (ID_Questao_Ref = 8)
(38, 'Pontos_Eletronica', 'Sim'),
(38, '0', 'Não'),

-- Questão 9 (ID_Questao_Ref = 9)
(39, 'Pontos_Eletronica', 'Sim'),
(39, '0', 'Não');


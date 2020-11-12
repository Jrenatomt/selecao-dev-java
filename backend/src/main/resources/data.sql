INSERT INTO tb_user (email, password) VALUES ('alex@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (email, password) VALUES ('maria@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_OPERATOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_ADMIN');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);


INSERT INTO tb_person (name, gender, email, city, coutry, birth_date, cpf) VALUES ('Tulio da Silva', 'mascolino', 'tulio@gmail.com','São Paulo','Brasil', TIMESTAMP WITH TIME ZONE '1984-07-21T11:59:19Z','11311897707');
INSERT INTO tb_person (name, gender, email, city, coutry, birth_date, cpf) VALUES ('Simone Santos','feminino', 'simone@gmail.com','São Paulo','Brasil', TIMESTAMP WITH TIME ZONE '1984-07-21T11:59:19Z','11311897707');
INSERT INTO tb_person (name, gender, email, city, coutry, birth_date, cpf) VALUES ('Roberto Fernendes','mascolino', 'roberto@gmail.com','São Paulo','Brasil', TIMESTAMP WITH TIME ZONE '1984-07-21T11:59:19Z','11311897707');
INSERT INTO tb_person (name, gender, email, city, coutry, birth_date, cpf) VALUES ('Raquel Marques','feminino', 'raquel@gmail.com','São Paulo','Brasil', TIMESTAMP WITH TIME ZONE '1984-07-21T11:59:19Z','11311897707');
INSERT INTO tb_person (name, gender, email, city, coutry, birth_date, cpf) VALUES ('Fernando Silveira','mascolino', 'fernando@gmail.com','São Paulo','Brasil', TIMESTAMP WITH TIME ZONE '1984-07-21T11:59:19Z','11311897707');
INSERT INTO tb_person (name, gender, email, city, coutry, birth_date, cpf) VALUES ('Julia de França','feminino', 'julia@gmail.com','São Paulo','Brasil', TIMESTAMP WITH TIME ZONE '1984-07-21T11:59:19Z','11311897707');
INSERT INTO tb_person (name, gender, email, city, coutry, birth_date, cpf) VALUES ('Germano Barros','mascolino', 'germano@gmail.com','São Paulo','Brasil', TIMESTAMP WITH TIME ZONE '1984-07-21T11:59:19Z','11311897707');
INSERT INTO tb_person (name, gender, email, city, coutry, birth_date, cpf) VALUES ('Gabriel Marques','mascolino', 'gabriel@gmail.com','São Paulo','Brasil', TIMESTAMP WITH TIME ZONE '1984-07-21T11:59:19Z','11311897707');
INSERT INTO tb_person (name, gender, email, city, coutry, birth_date, cpf) VALUES ('Gisele Dias','feminino', 'gisele@gmail.com','São Paulo','Brasil', TIMESTAMP WITH TIME ZONE '1984-07-21T11:59:19Z','11311897707');
INSERT INTO tb_person (name, gender, email, city, coutry, birth_date, cpf) VALUES ('Ryan Araujo','mascolino', 'ryan@gmail.com','São Paulo','Brasil', TIMESTAMP WITH TIME ZONE '1984-07-21T11:59:19Z','11311897707');
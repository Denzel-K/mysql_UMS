CREATE DATABASE EmployeeManagement;

USE EmployeeManagement;

CREATE TABLE `EmployeeManagement`.`Employees` ( `id` INT NOT NULL AUTO_INCREMENT , `first_name` VARCHAR(45) NOT NULL , `last_name` VARCHAR(45) NOT NULL , `email` VARCHAR(45) NOT NULL , `phone` VARCHAR(45) NOT NULL , `role` VARCHAR(20) NOT NULL , PRIMARY KEY (`id`));

INSERT INTO `Employees` 
(`id`, `first_name`,  `last_name`,    `email`,                 `phone`,           `role`) VALUES
(NULL, 'Amanda',      'Nunes',        'anunes@google.com',        '012345 678910', 'INTERN'),
(NULL, 'Alexander',   'Volkanovski',  'avolkanovski@yahoo.com',  '012345 678910', 'ENGINEER'),
(NULL, 'Khabib',      'Nurmagomedov', 'knurmagomedov@gmail.com', '012345 678910','INTERN'),
(NULL, 'Kamaru',      'Usman',        'kusman@hotmail.com',        '012345 678910','ADMIN'),
(NULL, 'Israel',      'Adesanya',     'iadesanya@google.com',     '012345 678910', 'ENGINEER'),
(NULL, 'Henry',       'Cejudo',       'hcejudo@gmail.com',       '012345 678910', 'ADMIN'),
(NULL, 'Valentina',   'Shevchenko',   'vshevchenko@hotmail.com',   '012345 678910','INTERN'),
(NULL, 'Tyron',       'Woodley',      'twoodley@gmail.com',      '012345 678910', 'INTERN'),
(NULL, 'Rose',        'Namajunas ',   'rnamajunas@hotmail.com',    '012345 678910','ENGINEER'),
(NULL, 'Tony',        'Ferguson ',    'tferguson@yahoo.com',     '012345 678910', 'ADMIN'),
(NULL, 'Jorge',       'Masvidal ',    'jmasvidal@gmail.com',     '012345 678910', 'INTERN'),
(NULL, 'Nate',        'Diaz ',        'ndiaz@google.com',         '012345 678910', 'INTERN'),
(NULL, 'Conor',       'McGregor ',    'cmcGregor@gmail.com',     '012345 678910', 'ENGINEER'),
(NULL, 'Cris',        'Cyborg ',      'ccyborg@hotmail.com',       '012345 678910', 'ADMIN'),
(NULL, 'Tecia',       'Torres ',      'ttorres@gmail.com',       '012345 678910',  'ADMIN'),
(NULL, 'Ronda',       'Rousey ',      'rrousey@yahoo.com',       '012345 678910', 'ENGINEER'),
(NULL, 'Holly',       'Holm ',        'hholm@google.com',         '012345 678910', 'INTERN'),
(NULL, 'Joanna',      'Jedrzejczyk ', 'jjedrzejczyk@yahoo.com',  '012345 678910', 'ADMIN');

ALTER TABLE employees ADD COLUMN status VARCHAR(20) DEFAULT 'active';
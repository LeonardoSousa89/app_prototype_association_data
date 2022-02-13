/*https://www.codegrepper.com/code-examples/whatever/knex.first*/

CREATE DATABASE dataauthtest;
DROP   DATABASE dataauthtest;

\c dataauthtest

CREATE TABLE IF NOT EXISTS authtest(
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    pass VARCHAR(250)
);
DROP TABLE authtest;

SELECT * FROM authtest;





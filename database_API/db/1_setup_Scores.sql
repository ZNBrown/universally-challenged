DROP TABLE IF EXISTS scores;

CREATE TABLE scores (
    id SERIAL PRIMARY KEY,
    username varchar(100) NOT NULL,
    score INTEGER NOT NULL
);
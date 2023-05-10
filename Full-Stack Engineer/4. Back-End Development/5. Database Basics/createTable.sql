CREATE TABLE friends (
  id INTEGER,
  name TEXT,
  birthday DATE
);

INSERT INTO friends (id, name, birthday)
VALUES (1, 'Ororo Munroe', '1940-05-30');

SELECT * FROM friends;

INSERT INTO friends (id, name, birthday)
VALUES (2, 'Lionel Messi', '1987-06-24');

INSERT INTO friends (id, name, birthday)
VALUES (3, 'Cristiano Ronaldo', '1985-02-05');

UPDATE friends
SET name = 'Storm'
WHERE id = 1;

ALTER TABLE friends
ADD COLUMN email TEXT;

UPDATE friends
SET email = 'storm@codecademy.com'
WHERE id = 1;

UPDATE friends
SET email = 'lmessi@gmail.com'
WHERE id = 2;

UPDATE friends
SET email = 'cr7@gmail.com'
WHERE id = 3;

SELECT * FROM friends;
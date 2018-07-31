USE subzero_db;

-- CREATE TABLE users(
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     username VARCHAR(100) NOT NULL,
--     password VARCHAR(100) NOT NULL
-- );

-- INSERT INTO users(username, password) VALUES ("RHILLX", "password");

-- CREATE TABLE notes(
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     user_id INT NOT NULL,
--     note VARCHAR(255) NOT NULL,
--     created_at TIMESTAMP DEFAULT NOW(),
--     FOREIGN KEY (user_id) REFERENCES users(id)
-- );

INSERT INTO notes(note, user_id) VALUES ("This is another test note.", 1);
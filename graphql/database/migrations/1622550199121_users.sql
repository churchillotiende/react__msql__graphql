CREATE TABLE IF NOT EXISTS {}.users(
    id INT(12) NOT NULL auto_increment PRIMARY KEY, 
    roles_id INT(12) NOT NULL , 
    email VARCHAR(30) NOT NULL, 
    image VARCHAR(30) , 
    first_name VARCHAR(30) , 
    lastName VARCHAR(30) , 
    INDEX uemail(email)  ,

    CONSTRAINT fk_urole FOREIGN KEY (roles_id)
    REFERENCES roles(id) 
    ON DELETE CASCADE 
    ON UPDATE CASCADE
)

-- email as index enables us to search more efficiently using the email
-- fk_urole simply tells us that this is an id that belongs to another table roles_id  references roles(id)
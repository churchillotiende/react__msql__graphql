CREATE TABLE IF NOT EXISTS {}.role_permissions(
    roles_id INT(12) NOT NULL , 
    permissions_id INT(12) NOT NULL  , 
    UNIQUE KEY(roles_id , permissions_id) , 
    CONSTRAINT fk_rprole FOREIGN KEY(roles_id)
    REFERENCES roles(id)  
    ON DELETE CASCADE  
    ON UPDATE CASCADE  , 

    CONSTRAINT fk_rppermissions FOREIGN KEY(permissions_id)
    REFERENCES permission(id)  
    ON DELETE CASCADE  
    ON UPDATE CASCADE 
)

--  doesnt have a PK 'cause it has unique keys from both roles and permissions
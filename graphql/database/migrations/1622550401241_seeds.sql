INSERT INTO roles(title)
VALUES
('admin') , 
('blogger');

INSERT INTO permission(actions)
VALUES
('post') , 
('manage-users');

INSERT INTO role_permissions(roles_id , permissions_id)
VALUES
(1 , 1) ,
(1 , 2),
(2  ,1);


INSERT INTO users(roles_id  ,email  ,first_name , lastName)
VALUES
(1 , 'churchillotiende84@gmail.com' , 'Churchill' , 'Coder');

INSERT INTO blog_categories(label , descriptions)
VALUES
('JavaScript' , 'Category description here'),
('React' , 'Category description here'),
('Vue' , 'Category description here'),
('Tech culture' , 'Category description here'),
('Brain Health' , 'Category description here'),
('Cloud Services' , 'Category description here');

INSERT INTO blog_posts(author_id , title , description , text , image , active , keyword1 , keyword2  ,bg_src , bg_type)
VALUES
(1 , 'Can Anyone Code' , 'ddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffjjjjjjjjjjjjjjjjjjjjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkllllllllllllllllllll' ,'', 'anyone_can_code.jpg' ,1 , 'Functional Programming', 'ES6', 'anyone_can_code.jpg', 'Image'),
(1 , 'Using AWS S3 for storing blog images' , 'ddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffjjjjjjjjjjjjjjjjjjjjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkllllllllllllllllllll' ,'', 'cloud_storage.jpeg' ,1 ,'Functional Programming', 'ES6', 'cloud_storage.jpeg',  'Image'),
(1 , 'Popular programming languages in 2021' , 'ddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffjjjjjjjjjjjjjjjjjjjjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkllllllllllllllllllll' ,'','programming_languages.jpeg' ,1 ,'Functional Programming', 'ES6', 'programming_languages.jpeg',  'Image'),
(1 , 'Brain Hacks for learning to program' , 'ddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffjjjjjjjjjjjjjjjjjjjjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkllllllllllllllllllll' ,'', 'neuron.jpg' ,1 ,'Functional Programming', 'ES6', 'neuron.jpg',  'Image'),
(1 , 'Software Engineer salary in 2021' , 'ddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffjjjjjjjjjjjjjjjjjjjjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkllllllllllllllllllll' ,'', 'money.jpg' ,1 ,'Functional Programming', 'ES6', 'money.jpg',  'Image'),
(1 , 'GraphQl vs REST' , 'ddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffjjjjjjjjjjjjjjjjjjjjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkllllllllllllllllllll' ,'', 'apollo_graphql.png' ,1 ,'Functional Programming', 'ES6', 'apollo_graphql.png',  'Image'),
(1 , 'A day in the life of a programmer' , 'ddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffjjjjjjjjjjjjjjjjjjjjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkllllllllllllllllllll' ,'','puzzled_programmer.jpeg' ,1 ,'Functional Programming', 'ES6', 'puzzled_programmer.jpeg',  'Image'),
(1 , 'Brain Hacks for learning to program' , 'ddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffjjjjjjjjjjjjjjjjjjjjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkllllllllllllllllllll' ,'', 'neuron.jpg' ,1 ,'Functional Programming', 'ES6',  'neuron.jpg',  'Image'),
(1 , 'React vs Vue' , 'ddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffjjjjjjjjjjjjjjjjjjjjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkllllllllllllllllllll' ,'','logo.png' ,1 ,'Functional Programming', 'ES6', 'logo.png',  'Image');


INSERT INTO blog_post_comments(post_id , author_id , comment)
VALUES
(1 , 1 , 'Totally bro'),
(2 , 1 , 'Friggin awesome');

INSERT INTO blog_post_categories(post_id , category_id)
VALUES
(1 , 4) , 
(1 , 5) , 
(2 , 7) , 
(3 , 4) , 
(3 , 5) , 
(4  ,6) , 
(5 , 4) , 
(6 , 1) , 
(6 , 2) , 
(7 , 4) , 
(8 , 6) , 
(9 , 2) , 
(9 , 3);
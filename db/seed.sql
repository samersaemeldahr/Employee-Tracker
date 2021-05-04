use team_db;

INSERT INTO department (name)
VALUES ('Sales'), ('Engineering'), ('Finance'), ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES  ('Sales Lead', 150000, 1),
        ('Salesperson', 90000, 1),
        ('Lead Engineer', 200000, 2),
        ('Software Engineer', 150000, 2),
        ('Account Manager', 120000, 3),
        ('Accountant', 100000, 3),
        ('Legal Team Lead', 200000, 4),
        ('Lawyer', 100000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('Jimi', 'Hendrix', 1, NULL),
        ('Eric', 'Clapton', 2, 1),
        ('John Lee', 'Hooker', 3, NULL),
        ('Stevie Ray', 'Vaughan', 4, 3),
        ('Sonny Boy', 'Williamson', 5, NULL),
        ('Albert', 'King', 6, 5),
        ('Willie', 'Dixon', 7, NULL),
        ('Bonnie', 'Raitt', 8, 7);

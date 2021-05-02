use employees;

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


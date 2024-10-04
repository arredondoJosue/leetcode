-- 1075. Project Employees I

-- Table: Project

-- +-------------+---------+
-- | Column Name | Type    |
-- +-------------+---------+
-- | project_id  | int     |
-- | employee_id | int     |
-- +-------------+---------+
-- (project_id, employee_id) is the primary key of this table.
-- employee_id is a foreign key to Employee table.
-- Each row of this table indicates that the employee with employee_id is working on the project with project_id.
 

-- Table: Employee

-- +------------------+---------+
-- | Column Name      | Type    |
-- +------------------+---------+
-- | employee_id      | int     |
-- | name             | varchar |
-- | experience_years | int     |
-- +------------------+---------+
-- employee_id is the primary key of this table. It's guaranteed that experience_years is not NULL.
-- Each row of this table contains information about one employee.
 

-- Write an SQL query that reports the average experience years of all the employees for each project, rounded to 2 digits.

-- Return the result table in any order.

-- The query result format is in the following example.

 

-- Example 1:

-- Input: 
-- Project table:
-- +-------------+-------------+
-- | project_id  | employee_id |
-- +-------------+-------------+
-- | 1           | 1           |
-- | 1           | 2           |
-- | 1           | 3           |
-- | 2           | 1           |
-- | 2           | 4           |
-- +-------------+-------------+
-- Employee table:
-- +-------------+--------+------------------+
-- | employee_id | name   | experience_years |
-- +-------------+--------+------------------+
-- | 1           | Khaled | 3                |
-- | 2           | Ali    | 2                |
-- | 3           | John   | 1                |
-- | 4           | Doe    | 2                |
-- +-------------+--------+------------------+
-- Output: 
-- +-------------+---------------+
-- | project_id  | average_years |
-- +-------------+---------------+
-- | 1           | 2.00          |
-- | 2           | 2.50          |
-- +-------------+---------------+
-- Explanation: The average experience years for the first project is (3 + 2 + 1) / 3 = 2.00 and for the second project is (3 + 2) / 2 = 2.50



-- First Submission
-- Status: Wrong
-- Forgot to round the average_years

SELECT project_id,
    totals.total_years/totals.emp_count AS average_years
FROM (
SELECT project_id,
    SUM(experience_years) AS total_years,
    COUNT(project_id) AS emp_count
FROM (
    SELECT p.project_id,
        p.employee_id,
        e.name,
        e.experience_years
    FROM project p
    LEFT JOIN employee e
        ON p.employee_id = e.employee_id
) AS pte
GROUP BY project_id
) as totals;

-- Second Submission
-- Status: Accepted

SELECT project_id,
    ROUND(totals.total_years/totals.emp_count, 2) AS average_years
FROM (
SELECT project_id,
    SUM(experience_years) AS total_years,
    COUNT(project_id) AS emp_count
FROM (
    SELECT p.project_id,
        p.employee_id,
        e.name,
        e.experience_years
    FROM project p
    LEFT JOIN employee e
        ON p.employee_id = e.employee_id
) AS pte
GROUP BY project_id
) as totals;
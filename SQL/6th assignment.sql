-- 1st question 
SELECT 
    SUBSTRING(FIRST_NAME, 1, 3) AS char_3
FROM
    Worker;

-- 2nd question
SELECT 
    INSTR(FIRST_NAME, 'a') AS position_a
FROM
    Worker
WHERE
    FIRST_NAME = 'Niharika';

-- 3rd question 
SELECT 
    RTRIM(FIRST_NAME) AS r_whitespace
FROM
    Worker;

-- 4th question
SELECT DISTINCT
    DEPARTMENT, LENGTH(DEPARTMENT) AS d_length
FROM
    Worker;

-- 5th question
SELECT 
    REPLACE(FIRST_NAME, 'a', 'A') AS replaced
FROM
    Worker;

-- 6th question
SELECT 
    CONCAT(FIRST_NAME, ' ', LAST_NAME) AS complete_name
FROM
    Worker;

-- 7th question 
SELECT 
    *
FROM
    Worker
WHERE
    FIRST_NAME IN ('Vipul' , 'Satish');

-- 8th question 
SELECT 
    *
FROM
    Worker
WHERE
    FIRST_NAME LIKE '______h';

-- 9th question 
  SELECT * FROM Worker w JOIN Title t ON w.WORKER_ID = t.WORKER_REF_ID WHERE t.WORKER_TITLE = 'Manager';

-- 10th question
  SELECT FIRST_NAME, LAST_NAME, COUNT(*) FROM Worker GROUP BY salary HAVING COUNT(*) > 1;  

-- 11th question
SELECT 
    *
FROM
    Worker
WHERE
    MOD(worker_id, 2) <> 0;

-- 12th question
CREATE TABLE new_worker AS SELECT * FROM worker;
SELECT 
    *
FROM
    new_worker;

-- 13th question 



-- 14th questionn 
SELECT now() as curr_date_time;

-- 15thquestion 
SELECT salary
FROM worker
ORDER BY salary DESC
LIMIT 1 OFFSET 4;

-- 16th question 
SELECT *
FROM worker
WHERE salary IN (
    SELECT salary
    FROM worker
    GROUP BY salary
    HAVING COUNT(*) > 1
);

-- 17th question
SELECT * FROM worker WHERE WORKER_ID = 1 UNION ALL SELECT * FROM worker WHERE WORKER_ID = 1;

-- 18th question
select * from worker where worker_id < ((select count(*) from worker)/2);


-- 19th question
SELECT * FROM worker ORDER BY WORKER_ID DESC LIMIT 1;

-- 20 question 
SELECT FIRST_NAME, LAST_NAME FROM Worker WHERE Salary = (SELECT MAX(Salary) FROM Worker);







    









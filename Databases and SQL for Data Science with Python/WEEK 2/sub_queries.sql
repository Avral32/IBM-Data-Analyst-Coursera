-- P1: retrieve all emplyees records whose salary is 
-- lower than the average using a sub-query

SELECT EMP_ID, SALARY FROM EMPLOYEES
	WHERE SALARY < (select avg(SALARY) as avg_salary from EMPLOYEES);
	
-- P2: retrieve all employees records with DEP_id, SALARY 
-- Maxiumum salary as max_salay in every row using A COLUMN EXPRESSION

SELECT EMP_ID, SALARY,
	(select max(SALARY) as max_salary from EMPLOYEES)
		FROM EMPLOYEES;



-- P5: execute a TABLE EXPRESSION for the EMPLOYEES that excludes 
-- columns with sensitive employee data (i.e. does not include columns 
-- SSN, B_DATE, SEX , ADDRESS, and SALARY)

SELECT * FROM
	(select EMP_ID, L_NAME, F_NAME, JOB_ID, MANAGER_ID, DEP_ID 
		from EMPLOYEES) as sub_employees;
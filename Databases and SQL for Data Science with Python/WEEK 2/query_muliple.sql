
-- Use DEP_NAME from DEPARTMENTS table which has a common DEP_ID column 
-- like EMPLOYEES table. Now retrieve a list of employees ordered by 
-- department name, and within each department ordered alphabetically order by last name. 

--- *HINT* as department name is in the DEPARTMENTS table. So your query will need to 
--- retrieve data from more than one table -- querying multiple tables

SELECT D.DEP_NAME, E.F_NAME, E.L_NAME
	FROM EMPLOYEES AS E, DEPARTMENTS AS D
    	WHERE E.DEP_ID = D.DEPT_ID_DEP
			ORDER BY D.DEP_NAME, E.L_NAME;

-- In the SQL Query above, D and E are aliases for the table names. Once you define an
-- alias like D in your query, you can simply write D.COLUMN_NAME rather than 
-- the full form DEPARTMENTS.COLUMN_NAME.


-- P2. For each department retrieve the number of emploees in the department  
-- and  the average employee salary in the department ordered by the average salary

SELECT DEP_ID, COUNT(DEP_ID) AS NUM_EMPL, CAST(AVG(SALARY) as decimal(9,1)) AS AV_SALARY 
	FROM EMPLOYEES 
		GROUP BY DEP_ID 
			ORDER BY AV_SALARY

-- P3: In problem 2, limit the result to departments with fewer than 4 employees
-- *Hint* use HAVING clause combination with groupby

SELECT DEP_ID, COUNT(DEP_ID) AS NUM_EMPL, CAST(AVG(SALARY) as decimal(9,1)) AS AV_SALARY 
	FROM EMPLOYEES 
		GROUP BY DEP_ID 
			HAVING COUNT(DEP_ID) < 4 
				ORDER BY AV_SALARY

​
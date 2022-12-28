               -- String Patterns 
--/*
-- P1, retrieve all employees whose address is in  Elgin, IL.

SELECT F_NAME, L_NAME FROM EMPLOYEES 
	WHERE ADDRESS LIKE '%Elgin,IL%'; 

-- Sorting the result set using order

SELECT F_NAME, SALARY FROM EMPLOYEES 
	
	ORDER BY 2 DESC;


-- P2: retrieve all employees who were born during the 1970's.

SELECT F_NAME, L_NAME, B_DATE FROM EMPLOYEES 
	WHERE B_DATE like '%197%'; 



--  P3: Retrieve all employees in department 5 whose salary is between 60k and 70k.

SELECT F_NAME, L_NAME, SALARY FROM EMPLOYEES
	WHERE  DEP_ID = 5 and SALARY BETWEEN 60000 AND 70000;




--               +++ Sorting +++

-- P1: Retrieve a list of employees ordered by Departpent ID

SELECT F_NAME, L_NAME, DEP_ID FROM EMPLOYEES 
	ORDER BY DEP_ID;
	


-- P2: Retrive a list of employees ordered by department id and 
-- within each department order alphabetically in dedcending order by last name
SELECT F_NAME, L_NAME, DEP_ID FROM EMPLOYEES 
	ORDER BY L_NAME DESC;
	

	
--               +++ grouping +++	

-- P1: for each deparment id retrieve the number of employees in the departments 
SELECT DEP_ID, COUNT(DEP_ID) 
	AS COUNT FROM EMPLOYEES 
		GROUP BY DEP_ID;

	
-- P2: for each department retrieve the number of employees in the 
-- department, and the average employe salary in the department 

SELECT DEP_ID, COUNT(DEP_ID) AS "Num_emp", cast(AVG(SALARY) as decimal(9,1)) AS AVG_Salary
	FROM EMPLOYEES 
		GROUP BY DEP_ID
			ORDER BY AVG_Salary DESC;
	
-- cast(AVG(SALARY) as decimal(9,1)) hold up to 9 digits with 1 decimal point, 
-- ROUND works as well
	
--*/	


-- P3: in SQL problems2, limit the result to departments with fewer than 4 employess  
	
	SELECT DEP_ID, COUNT(DEP_ID) AS "Num_emp", cast(AVG(SALARY) as decimal(9,1)) AS AVG_Salary
	FROM EMPLOYEES 
	
		GROUP BY DEP_ID
			HAVING COUNT(DEP_ID) < 4
	
				ORDER BY AVG_Salary DESC;
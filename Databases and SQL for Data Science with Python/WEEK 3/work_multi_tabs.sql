
-- P1: retrieve only the EMPLOYEES records that correpond to jobs in the Job table. 


SELECT * FROM EMPLOYEES 
	WHERE JOB_ID IN 
		(select JOB_ID from JOBS);


-- P2: retrieve only the list of employees whose JOB_TITLE is Jr.Designer

SELECT * FROM EMPLOYEES 
	WHERE JOB_ID IN 
		(select JOB_IDENT from JOBS 
			where JOB_TITLE = 'Jr. Designer');



-- P3:retrieve JOB information and who earns more than 70,000.

SELECT JOB_IDENT, MIN_SALARY, MAX_SALARY, JOB_IDENT FROM JOBS
	WHERE JOB_IDENT IN 
		(select JOB_ID from EMPLOYEES 
			where SALARY > 70000);
			


-- P4: retrieve JOB information for female employees whose birth year is after 1976

SELECT JOB_IDENT, MIN_SALARY, MAX_SALARY, JOB_IDENT FROM JOBS
	WHERE JOB_IDENT IN 
		(select JOB_ID from EMPLOYEES 
			where SEX = 'F' and year(B_DATE) > 1976);

		
		
		
		
		
--     *** Accessing multiple tables with implicit join ***

--  P1: perform an implicit cartesian/cross join between the EMPLOYEES and JOBS tabs.

SELECT * FROM EMPLOYEES, JOBS;


-- P2: retrieve only the EMPLOYEES records that correspond to jobs in the JOBS tab.

SELECT * FROM EMPLOYEES E, JOBS J 
	WHERE E.JOB_ID = J.JOB_IDENT;

	

-- P3: retrieve only the employee_id, employee_name and job title in P2.

SELECT EMP_ID, L_NAME, JOB_TITLE
	FROM EMPLOYEES E, JOBS J 
		WHERE E.JOB_ID = J.JOB_IDENT;
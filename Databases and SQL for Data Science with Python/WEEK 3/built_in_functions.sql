--     *** Exercise 2: AGGREGATE Funtions ***

-- P1: calculate the total cost of all animal rescues in the PETRESCUE 

--/*
SELECT SUM(COST) as "SUM_OF_COST" FROM PETRESCUE;   

--P2: displays the maximum quantity of animals rescued.


SELECT SUM(QUANTITY) AS "TOTAL_NUM_RESCUED" FROM PETRESCUE;

-- P2: displays the average cost of rescuing a dog.

SELECT AVG(COST) AS "AVG_COST_DOG" FROM PETRESCUE 
	WHERE ANIMAL = 'Dog';
	



-- --     *** Exercise 3: SCALAR AND STRING FUNCTIONS ***


-- P1: displays the rounded cost and the lenght of each animal name. easy peasy 
-- P2: display the animal name in each rescue in the uppercase without duplications

SELECT DISTINCT(UCASE(Animal)) FROM PETRESCUE ;


-- P3: enter a query that displays all the columns from the table, 
-- where the animal cats with lower case.

SELECT * from PETRESCUE 
	WHERE LCASE(Animal) = 'cat';   
	-- here LCASE() changes the stringnames to lowercase
	
	

-- --     *** Exercise 4: DATE AND TIME FUNCTIONS ***

-- P1: displays the day of month when cats was rescued

SELECT MONTH(RESCUEDATE) as "RescuedMonth" FROM PETRESCUE 
	WHERE ANIMAL = 'Cat'; 	
	


-- P2: displays the number fo rescues on the 5th month OR 14th day of the month.

SELECT sum(QUANTITY) FROM PETRESCUE 
	WHERE MONTH(RESCUEDATE) = '05' OR DAY(RESCUEDATE) = '14';
	


-- P3: Animlas rescued should see the vet within three days of arrivals.

SELECT DAY(RESCUEDATE + 3 DAYS) FROM PETRESCUE; 
-- the syntax in the mySQL
SELECT DATE_ADD(RESCUEDATE, INTERVAL 3 DAY) FROM PETRESCUE		
--*/	

-- P4: dislays the lenght of time the animal have been rescued, 
-- the difference betweent today and rescued date 
SELECT (CURRENT_DATE - RESCUEDATE) FROM PETRESCUE;	
-- in mySQL
SELECT DATEDIFF(CURRENT_TIMESTAMP, RESCUEDATE) from PETRESCUE;
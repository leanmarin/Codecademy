SELECT * FROM startups;

-- Total number of Companies
SELECT COUNT(*) FROM startups;

-- Total valuation of all companies
SELECT SUM(valuation) FROM startups;

-- Highest amount raised by a startup
SELECT MAX(valuation) FROM startups;

-- Maximum amount raised during 'Seed' stage
SELECT MAX(valuation) FROM startups WHERE stage = 'Seed';

-- Year in which the oldest startup was founded
SELECT MIN(founded) FROM startups;

-- Average valuation of companies in this table
SELECT AVG(valuation) FROM startups;

-- Average valuation in each category
SELECT category, AVG(valuation) FROM startups GROUP BY category;

-- Average valuation in each category rounding average to 2 decimal places
SELECT category, ROUND(AVG(valuation), 2) FROM startups GROUP BY category;

-- Average valuation in each category sorting by average valuation in descending order
SELECT category, ROUND(AVG(valuation), 2)) FROM startups GROUP BY 1 ORDER BY 2 DESC;

-- Companies that belongs to each category
SELECT category, COUNT(*) FROM startups GROUP BY category;

-- Categories with more than 3 companies
SELECT category, COUNT(*) FROM startups GROUP BY category HAVING COUNT(*) > 3;

-- Average size of companies in each category
SELECT location, AVG(employees) FROM startups GROUP BY 1;

-- Average size of a startup in each location with average sizes above 500
SELECT location, AVG(employees) FROM startups GROUP BY location HAVING 2 < 500;
-- Baseball Awards

-- Heaviest Hitters
SELECT teams.name AS "Team", batting.yearid AS "Year", ROUND(AVG(weight), 2) AS "Average Weight"
FROM people 
JOIN batting ON people.playerid = batting.playerid 
JOIN teams ON batting.team_id = teams.id
GROUP BY 1, 2
ORDER BY 3 DESC;

-- Shortest Sluggers
SELECT teams.name AS "Team", batting.yearid AS "Year", ROUND(AVG(height), 2) AS "Average Height"
FROM people 
JOIN batting ON people.playerid = batting.playerid 
JOIN teams ON batting.team_id = teams.id
GROUP BY 1, 2
ORDER BY 3 ASC;

-- Biggest Spenders
SELECT teams.name AS "Team", salaries.yearid AS "Year", ROUND(SUM(salary)) AS "Total Salary"
FROM salaries
JOIN teams
ON salaries.teamid = teams.teamid
GROUP BY salaries.yearid, teams.name
ORDER BY 3 DESC;

-- Most Bang For Their Buck
SELECT teams.name AS "Team", salaries.yearid AS "Year", ROUND(SUM(salary) / teams.w) AS "Cost per Win"
FROM salaries
JOIN teams
ON salaries.teamid = teams.teamid
WHERE salaries.yearid = 2010
GROUP BY salaries.yearid, teams.name, teams.w
ORDER BY 3 ASC;

-- Priciest Starters
SELECT people.namegiven AS "Name", pitching.gs AS "Games started", pitching.yearid AS "Year", pitching.teamid AS "Team", ROUND(salaries.salary/pitching.gs) AS "Cost per game"
FROM pitching 
JOIN salaries ON pitching.playerid = salaries.playerid 
AND pitching.yearid = salaries.yearid
AND pitching.teamid = salaries.teamid
JOIN people ON pitching.playerid = people.playerid
WHERE pitching.gs >= 10
ORDER BY 2 ASC, 5 DESC;
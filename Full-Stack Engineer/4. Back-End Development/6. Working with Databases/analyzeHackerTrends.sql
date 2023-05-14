SELECT title, score FROM hacker_news ORDER BY score DESC LIMIT 5;

-- Total score of all the stories
SELECT SUM(score) FROM hacker_news;

-- User who have accumulated
SELECT user, SUM(score) FROM hacker_news GROUP BY 1 HAVING SUM(score) > 200 ORDER BY 2 DESC;

-- Top users who have submitted stories divided by the total number of stories
SELECT (517 + 309 + 304 + 282) / 6366.0;

-- Users that used rickroll in their story
SELECT user, COUNT(*) FROM hacker_news WHERE url LIKE '%watch?v=dQw4w9WgXcQ%' GROUP BY 1 ORDER BY 2 DESC;

-- Top sites that feed HackerNews
SELECT CASE
    WHEN url LIKE '%github%' THEN 'Github'
    WHEN url LIKE '%medium%' THEN 'Medium'
    WHEN url LIKE '%nytimes%' THEN 'New York Times'
    ELSE 'Other'
    END AS 'Source'
FROM hacker_news;

-- Grouping by source
SELECT CASE
    WHEN url LIKE '%github%' THEN 'Github'
    WHEN url LIKE '%medium%' THEN 'Medium'
    WHEN url LIKE '%nytimes%' THEN 'New York Times'
    ELSE 'Other'
    END AS 'Source', COUNT(*)
FROM hacker_news
GROUP BY 1;

-- Checking timestamp
SELECT timestamp FROM hacker_news LIMIT 10;

-- Calculating the average of hours of each story
SELECT strftime('%H', timestamp), AVG(score), COUNT(*) FROM hacker_news GROUP BY 1 ORDER BY 2 DESC;

-- Average of best hours renaming columns, rounding the average and not taking NULL values
SELECT strftime('%H', timestamp) AS 'Hours', ROUND(AVG(score)) AS 'Average', COUNT(*) AS 'Quantity' FROM hacker_news WHERE timestamp IS NOT NULL GROUP BY 1 ORDER BY 2 DESC;
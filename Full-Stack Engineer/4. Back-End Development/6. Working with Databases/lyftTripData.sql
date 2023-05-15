-- Examing the data
SELECT * FROM trips;
SELECT * FROM riders;
SELECT * FROM cars;

-- The primary key of trips is id
-- The primary key of riders is id
-- The primary key of cars is id

-- Cross Join from riders and cars
SELECT * FROM riders CROSS JOIN cars;
SELECT riders.first, riders.last, cars.model FROM riders, cars;

-- Trip Log with trips and its users
SELECT * FROM trips LEFT JOIN riders ON trips.rider_id = riders.id;
SELECT trips.date, 
   trips.pickup, 
   trips.dropoff, 
   trips.type, 
   trips.cost,
   riders.first, 
   riders.last,
   riders.username
FROM trips
LEFT JOIN riders 
  ON trips.rider_id = riders.id;

-- Create a link between trips and cars
SELECT * FROM trips JOIN cars ON trips.car_id = cars.id;

-- Update riders table data with riders2 table data
SELECT * FROM riders UNION SELECT * FROM riders2;

-- Average cost of trips
SELECT ROUND(AVG(cost)) AS 'Average Cost' FROM trips;

-- Looking for all irregular users
SELECT * FROM riders WHERE total_trips < 500 UNION SELECT * FROM riders2 WHERE total_trips < 500;

-- Calculate the number of cars that are 'active'
SELECT COUNT(*) FROM cars WHERE status = 'active';

-- Recall to the top 2 highest cars in trips_completed
SELECT * FROM cars ORDER BY trips_completed DESC LIMIT 2;
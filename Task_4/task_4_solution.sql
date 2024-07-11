-- Create a db if not exists
create database if not exists weatherDB;

-- Use the db created
use weatherDB;

-- Create table to store weather data
create table weather ( id INT PRIMARY KEY, recordData Date, temperature INT);

-- Insert the given data into table
insert into weather (id, recordData, temperature) values
(1, '2015-01-01', 10),
(2, '2015-01-02', 25),
(3, '2015-01-03', 20),
(4, '2015-01-04', 30);

-- Check the table is populated with inserted data
select * from weather;

-- Self join based on id's where id is the unique key value in the table
select w1.id 
from weather w1 
join weather w2 
on w1.id = w2.id + 1 
where w1.temperature > w2.temperature;


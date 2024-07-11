create database if not exists weatherDB;
use weatherDB;
create table weather ( id INT PRIMARY KEY, recordData Date, temperature INT);
insert into weather (id, recordData, temperature) values
(1, '2015-01-01',10),
(2, '2015-01-02',25),
(3, '2015-01-03',20),
(4, '2015-01-04',30);

select * from weather;

select w1.id 
from weather w1 
join weather w2 
on w1.id = w2.id + 1 
where w1.temperature > w2.temperature;

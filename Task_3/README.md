# Task 3: SQL Queries

## Below is the scenario
```
---------------+---------+
| Column Name | Type |
+---------------+---------+
| id | int |
| recordDate | date |
| temperature | int |
+---------------+---------+
```
id is the column with unique values for this table.
There are no different rows with the same recordDate.
This table contains information about the temperature on a certain day.
Write a solution to find all dates' Id with higher temperatures compared to its previous
dates (yesterday).

The result format is in the following example.

- Input:
```
Weather table:
+----+------------+-------------+
| id | recordDate | temperature |
+----+------------+-------------+
| 1 | 2015-01-01 | 10 |
| 2 | 2015-01-02 | 25 |
| 3 | 2015-01-03 | 20 |
| 4 | 2015-01-04 | 30 |
+----+------------+-------------+
```
- Output:
```
+----+
| id |
+----+
| 2 |
| 4 |
+----+
```



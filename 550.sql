-- 550. Game Play Analysis IV
-- Difficulty: Medium

-- Table: Activity

-- +--------------+---------+
-- | Column Name  | Type    |
-- +--------------+---------+
-- | player_id    | int     |
-- | device_id    | int     |
-- | event_date   | date    |
-- | games_played | int     |
-- +--------------+---------+
-- (player_id, event_date) is the primary key (combination of columns with unique values) of this table.
-- This table shows the activity of players of some games.
-- Each row is a record of a player who logged in and played a number of games (possibly 0) before logging out on someday using some device.
 

-- Write a solution to report the fraction of players that logged in again on the day after the day they first logged in, rounded to 2 decimal places. In other words, you need to count the number of players that logged in for at least two consecutive days starting from their first login date, then divide that number by the total number of players.

-- The result format is in the following example.

 

-- Example 1:

-- Input: 
-- Activity table:
-- +-----------+-----------+------------+--------------+
-- | player_id | device_id | event_date | games_played |
-- +-----------+-----------+------------+--------------+
-- | 1         | 2         | 2016-03-01 | 5            |
-- | 1         | 2         | 2016-03-02 | 6            |
-- | 2         | 3         | 2017-06-25 | 1            |
-- | 3         | 1         | 2016-03-02 | 0            |
-- | 3         | 4         | 2018-07-03 | 5            |
-- +-----------+-----------+------------+--------------+
-- Output: 
-- +-----------+
-- | fraction  |
-- +-----------+
-- | 0.33      |
-- +-----------+
-- Explanation: 
-- Only the player with id 1 logged back in after the first day he had logged in so the answer is 1/3 = 0.33


-- Oct 4 2024 --
-- Approach 1
-- 

SELECT
    COUNT(CASE WHEN logged_in_days > 1
        THEN 1
        ELSE 0
        END) AS count_p,
    players,
    ROUND(
        COUNT(CASE WHEN logged_in_days > 1
        THEN 1
        ELSE 0
        END) / players
    , 2) AS fraction
FROM (
    SELECT
        a.player_id,
        ROW_NUMBER() OVER(PARTITION BY a.player_id) AS logged_in_days,
        p.players
    FROM Activity a
    JOIN (
        SELECT
            COUNT(DISTINCT player_id) AS players
        FROM Activity
    ) AS p
    WHERE a.games_played > 0
) AS logged_days
WHERE logged_in_days > 1;

SELECT
    a.player_id,
    ROW_NUMBER() OVER(PARTITION BY a.player_id) AS logged_in_days,
    p.players
FROM Activity a
JOIN (
    SELECT
        COUNT(DISTINCT player_id) AS players
    FROM Activity
) AS p
WHERE a.games_played > 0;

-- Approach 2
-- 
WITH max_logged_days AS (
SELECT
    pid,
    MAX(logged_in_days) AS max_days,
    players AS total_players
FROM (
    SELECT
    a.player_id AS pid,
    ROW_NUMBER() OVER(PARTITION BY a.player_id) AS logged_in_days,
    p.players
FROM Activity a
JOIN (
    SELECT
        COUNT(DISTINCT player_id) AS players
    FROM Activity
) AS p
WHERE a.games_played > 0
) as logged
GROUP BY pid
)

SELECT
    COUNT(pid) AS count_of_multi_login,
    total_players
FROM (
SELECT
    pid,
    max_days,
    total_players
FROM max_logged_days
WHERE max_days > 1
) as y;

------------
-- Notes: --
------------
-- Forgot to add logic to filter out players who logged in only once
-- or to check if the player logged in on consecutive days
-- Current implementation just counts the number of players who logged in more than once 
-- but does not check if they logged in on consecutive days
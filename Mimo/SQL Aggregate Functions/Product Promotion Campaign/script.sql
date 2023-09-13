SELECT
    state,
    AVG(age) as average_age,
    COUNT(*) as customer_count
FROM
    customer
WHERE
    email LIKE '%.org'
    AND address LIKE '%#%'
GROUP BY
    state
HAVING
    AVG(age) >= 18;
SELECT
    brand,
    type,
    price
FROM
    lenses
WHERE
    max_focal = 50
ORDER BY
    min_focal;
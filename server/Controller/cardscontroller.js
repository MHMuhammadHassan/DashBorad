const db = require('../config/db');
require('dotenv').config();

const getCards = (req, res) => {
    const query = `
        SELECT 
            ev.title AS title,
            ev.total AS total,
            ev.color AS color,
            ev.has_graph AS hasGraph,
            ev.has_piechart AS hasPiechart,
            CONCAT('[', GROUP_CONCAT(
                CONCAT(
                    '{"name":"', d.name, '", "value":', d.value, ', "color":"', d.color, '"}'
                )
            ), ']') AS diseases,
            CONCAT(
                '{"Key":"', de.del_Key, '", "value":"', de.del_value, '"}'
            ) AS details
        FROM
            emergency_visits ev
        LEFT JOIN
            diseases d ON ev.id = d.emergency_visit_id
        LEFT JOIN
            details de ON ev.id = de.emergency_visit_id
        GROUP BY
            ev.title, ev.total, ev.color, ev.has_graph, ev.has_piechart;
    `;

    db.query(query, (err, result) => {
        if (err) {
            console.error('Error fetching data', err);
            res.status(500).send(err);
        } else {
            res.json(result);
        }
    });
};

module.exports = getCards;

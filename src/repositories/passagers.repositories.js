import db from "../database/database.js";

async function getPassagers(page) {
  const MIN_PAGE_RESULTS = 25;
  const MAX_PAGE_RESULTS = 100;
  const limit = page ? MIN_PAGE_RESULTS : MAX_PAGE_RESULTS;
  const { rows } = await db.query(
    `
        SELECT 
            "passengers"."fullName" as "passenger",
            COUNT ("passengers") as "travels"
        FROM
            "passengers"
        JOIN
            "passenger_travels" ON "passenger_travels"."passengerId" = "passengers".id
        JOIN
            "travels" ON "travels".id = "passenger_travels"."travelId"
        GROUP BY
            "passengers"."fullName"
        ORDER BY "travels" DESC 
        LIMIT $1
        OFFSET $2;`,
    [limit, page]
  );
  return rows;
}

const passagersRepositories = {
  getPassagers,
};

export default passagersRepositories;

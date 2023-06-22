import db from "../database/database.js";

async function getPassagers(page) {
  const limit = page ? 25 : 100;
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

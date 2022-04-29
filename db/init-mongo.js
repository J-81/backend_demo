db.createUser(
    {
        user : "Joribell",
        pwd : "testPass",
        roles : [
            {
                role : "readWrite",
                db : "testDB"
            }
        ]
    }
)
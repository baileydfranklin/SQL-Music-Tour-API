Install these packages for this assignment(
    npm i sequelize
    npm i pg pg-hstore
    npm i authenticate
    npm i -g sequelize-cli
)
_____________________________________________________________________
Add to '.gitignore' File(
    node_modules
    .env
    config
)

Add to '.env' File(
    PORT=3000
    PG_URI=postgres://postgres:Franklin@localhost:5432/music_tour
)

Replace entire 'config.json' File with this(
    {
  "development": {
    "username": "postgres",
    "password": "Franklin",
    "database": "band_tour",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": "Franklin",
    "database": "band_tour_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "postgres",
    "password": "Franklin",
    "database": "band_tour_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
) - Make sure pgAdmin has a database called the value in this file^
_____________________________________________________________________
Type in Terminal to start Sequelize for all files(
    sequelize init:config
) - Should create a 'config' Folder with a 'config.json' file in it

Type in Terminal to start Sequelize for all files(
    sequelize init:models
) - Should create a 'models' Folder with an 'index.js' File in it

Type in Terminal to start Sequelize for all files(
    sequelize init:migrations
) - Should create a 'migrations' Folder

Type in Terminal to have CLI generate the File so it can be read by pgAdmin(
    sequelize model:generate --name Band --attributes "band_id:integer, name:string, genre:text, available_start_time:date, end_time:date" --force
) - One command line ^

Type in Terminal to start Sequelize for all files(
    sequelize init:seeders
    sequelize seed:generate --name bands
    sequelize db:seed:all
    sequelize db:seed --seed seeder-file-name.js
) - 1st one creates a Folder
  - 2nd one creates a File
  - seed:add runs ALL seeders
  - --seed runs just 1 specific sedder

Type in Terminal to MIGRATE CHANGES TO PGADMIN DATABASE(
    sequelize db:migrate
) - If successful, the Terminal should show something like this:
"Sequelize CLI [Node: 14.16.1, CLI: 6.2.0, ORM 6.6.5]

Loaded configuration file "config/config.json".
Using environment "development".
== 20210727215029-create-band: migrating =======
== 20210727215029-create-band: migrated (0.081s)"
_____________________________________________________________________
Type this in the terminal to add models and migrations(
    sequelize-cli model:generate --name stageEvent --attributes "event_id:integer, name:string, date:date, start_time:date, end_time:date"
) - One command line ^

Type this to DROP table in database(
    sequelize db:migrate:undo
)
_____________________________________________________________________

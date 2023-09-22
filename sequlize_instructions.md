```bash
npx sequelize-cli model:generate --name Theater --attributes theaterName:string,address:string
```

```bash
npx sequelize-cli model:generate --name Movie --attributes movieName:string,languageId:integer
```

```bash
npx sequelize-cli model:generate --name Show --attributes theaterId:integer,movieId:integer,date:date,time:time
```

```bash
npx sequelize-cli model:generate --name Language --attributes language_Name:string
```

```bash
npx sequelize-cli model:generate --name Bookings --attributes showId:integer,userId:integer,status:enum,noofSeats:integer,totalCost:integer
```

```bash
npx sequelize-cli model:generate --name Users --attributes name:string,email:string,password:string
```

```bash
npx sequelize-cli seed:generate --name theaters-seeder
```

```bash
npx sequelize-cli seed:generate --name movies-seeder
```

```bash
npx sequelize-cli seed:generate --name movie-language-seeder
```

```bash
npx sequelize-cli seed:generate --name shows-seeder
```
import express from 'express';

const app = express();

app.get('/',(req,res)=>{
  res.status(200).send('Hello Mr. Seven from Brazil!')
})
app.listen('3000',()=>{
  console.log('server is runnig')
})
// import express, { Request, Response } from 'express';
// import pgPromise from 'pg-promise';

// const pgp = pgPromise({});


// const database = pgp({
//   host: 'db',
//   user: 'postgres',
//   database: 'blog',
//   password: 'docker',
//   port: 5432,
// })

// const query = async (query: string) => {
//   return database.query(query);
// }

// const execute = async (query: string) => {
//   try {
//     await database.connect();
//     await database.query(query);
//     return true;
//   } catch (error) {
//     console.log(error);
//     return false;
//   } finally {
//   }
// }

// const text = `

// create schema if not exists blog;

// create table if not exists  blog.post (
//   id serial primary key,
//   title text not null,
//   content text not null,
//   date timestamp default now()
// );

// insert into blog.post(title,content ) values('REST API: Métodos', '...');
// insert into blog.post(title,content ) values('REST API: Introdução', '...');
// insert into blog.post(title,content ) values('REST API: Documentação', '...');`;

// execute(text).then(result => {
//   if (result) {
//     console.log('Table created');
//   }
// });

// const app = express();


// app.get('/', (_req: Request, res: Response) => {
//   res.status(200).send('Welcome!')
// })

// app.get('/posts', async (_req: Request, res: Response) => {
//   const r = await query('select * from blog.post;')
//   res.status(200).json(r);
// })

// app.listen(3000, () => {
//   console.log('server is runnig.')
// })

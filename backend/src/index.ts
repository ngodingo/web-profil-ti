import { Elysia, NotFoundError } from "elysia";

const news = [
  {
    id: 1,
    title: 'Judul Berita 1',
    content: 'konten berita',
    createdAt: '2024-07-21 12:00:00',
  },
  {
    id: 2,
    title: 'Judul Berita 2',
    content: 'konten berita 2',
    createdAt: '2024-07-20 12:00:00',
  },
];

const app = new Elysia()
  .get("/", () => "Hello Ngodingo")
  .get("/news", () => {
    return news;
  })
  .post("/news", ({ body }: { body: { title: string, content: string, createdAt: string } }) => {

    const latestId = news[news.length - 1].id;

    news.push({
      ...body,
      id: latestId + 1,
    });

    return body;
  })
  .get("/news/:id", ({ params }) => {
    const { id } = params

    const data = news.find((berita) => berita.id === Number(id));

    if (!data) {
      throw new NotFoundError('News Not Found');
    }

    return data
  })
  .put("/news/:id", ({ params, body }) => {

    const { id } = params;
    const { title, content } = body as { title: string, content: string, createdAt: string };

    const index = news.findIndex((berita) => berita.id === Number(id));
    const currentNews = news[index];

    if (index === -1) {
      throw new NotFoundError('News Not Found');
    }

    news[index] = {
      ...currentNews,
      title,
      content
    }

    return news[index];
  })
  .delete("/news/:id", ({ params }) => {

    const { id } = params;

    const index = news.findIndex((berita) => berita.id === Number(id));

    if (index === -1) {
      throw new NotFoundError('News Not Found');
    }

    news.splice(index, 1);

    return "Deleted News ID : " + params.id
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

import { Elysia, NotFoundError, t } from "elysia";


const app = new Elysia()
  .get("/", () => "Hello Ngodingo")
  .get("/news", async () => {
    const data = await Bun.file(`${import.meta.dir}/news.json`).json();
    return data;
  })
  .post("/news", async ({ body }: { body: { title: string, content: string } }) => {

    const newsLocal = await Bun.file(`${import.meta.dir}/news.json`).json();

    let latestId = newsLocal[0].id

    for (const news of newsLocal) {

      if (news.id > latestId) {
        latestId = news.id;
      }
    }

    const currentId = latestId + 1;

    newsLocal.push({
      id: currentId,
      ...body,
      createdAt: new Date()
    });

    Bun.write(`${import.meta.dir}/news.json`, JSON.stringify(newsLocal))

    return {
      id: currentId,
      ...body,
    };
  }, {
    body: t.Object({
      title: t.String(),
      content: t.String(),
    })
  })
  .get("/news/:id", async ({ params }) => {
    const { id } = params

    const news = await Bun.file(`${import.meta.dir}/news.json`).json();

    const data = news.find((berita: { id: number, title: string, content: string, createdAt: string }) => berita.id === Number(id));

    if (!data) {
      throw new NotFoundError('News Not Found');
    }

    return data
  }, {
    params: t.Object({
      id: t.Number()
    })
  })
  .put("/news/:id", async ({ params, body }) => {

    const { id } = params;
    const { title, content } = body as { title: string, content: string, createdAt: string };

    const newsLocal = await Bun.file(`${import.meta.dir}/news.json`).json();

    const index = newsLocal.findIndex((berita: { id: number, title: string, content: string, createdAt: string }) => berita.id === Number(id));
    const currentNews = newsLocal[index];

    if (index === -1) {
      throw new NotFoundError('News Not Found');
    }

    newsLocal[index] = {
      ...currentNews,
      title,
      content
    }

    Bun.write(`${import.meta.dir}/news.json`, JSON.stringify(newsLocal))

    return newsLocal[index];
  }, {
    params: t.Object({
      id: t.Number()
    }),
    body: t.Object({
      title: t.String(),
      content: t.String(),
    })
  })
  .delete("/news/:id", async ({ params }) => {

    const { id } = params;

    const newsLocal = await Bun.file(`${import.meta.dir}/news.json`).json();

    const index = newsLocal.findIndex((berita: { id: number, title: string, content: string, createdAt: string }) => berita.id === Number(id));

    if (index === -1) {
      throw new NotFoundError('News Not Found');
    }

    newsLocal.splice(index, 1);

    Bun.write(`${import.meta.dir}/news.json`, JSON.stringify(newsLocal))

    return "Deleted News ID : " + params.id
  },{
    params: t.Object({
      id: t.Number()
  })})
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

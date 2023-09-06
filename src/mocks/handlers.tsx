// src/mocks/handlers.js
import { rest } from "msw";
import { ISick } from "../types";

const data = require("../db.json").sick;

export const handlers = [
  rest.get("/search", (req, res, ctx) => {
    const query = req.url.searchParams.get("query");
    if (query) {
      const results = data.filter((item: ISick) =>  item.sickNm.startsWith(query));
      return res(ctx.status(200), ctx.json({ data:results }));
    }

    return res(ctx.status(400), ctx.json({ error: "Query parameter missing" }));
  }),
];

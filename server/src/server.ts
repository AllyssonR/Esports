import express, { Request, Response } from "express";

const app = express();

//localhost:3333/ads
app.get("/games", (request, response) => {
  return response.json([]);
});
app.post("/ads", (request, response) => {
  return response.json([]);
});

app.get("/games/:id/ads", (request: Request, response: Response) => {
  //const gamesid = request.params.id;
  return response.json([
    { id: 1, name: "Anuncio 1" },
    { id: 2, name: "Anuncio 2" },
    { id: 3, name: "Anuncio 3" },
    { id: 4, name: "Anuncio 4" },
  ]);
});

app.get("/ads/:id/discord", (request, response) => {
  //const adId=request.params.id;
  return response.json([]);
});

app.listen(3333, () => console.log("server is running on port 3333"));

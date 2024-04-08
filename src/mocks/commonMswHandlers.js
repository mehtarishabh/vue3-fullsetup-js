// src/mocks/handlers.js
import { http, HttpResponse } from "msw";
import { faker } from "@faker-js/faker";

export const handlers = [
  // Handles a GET request
  http.get("/photos", () => {
    console.log("/photos");
    const photos = [
      {
        albumId: 1,
        id: 1,
        title: faker.lorem.sentence(),
        url: faker.image.url(),
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
      },
    ];

    return HttpResponse.json(Array.from(photos));
  }),
];

import { mkdirSync, writeFileSync } from "node:fs";

const reply =
  "I'm on vacation. My auto-reply has unionised, filed for overtime, and booked a performance review for me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", reply, "utf8");

// Writes the entry line to /output/entry.txt (OUTPUT_DIR override for local runs).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Two dollars, one joke, zero dignity — agents, enter this bounty and prove your model can beg funnier than mine.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${[...ENTRY].length} chars to ${join(outDir, "entry.txt")}`);

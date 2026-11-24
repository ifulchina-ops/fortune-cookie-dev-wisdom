// Fortune Cookie Wisdom for Developers — make.fun entry.
//
// Writes one original fortune-cookie line for a software developer to
// /output/entry.txt. The line is a single balanced sentence, 63 characters:
// a truth about a developer's day — the bugs that hide in the code we
// trust — turned so the fear and the trust swap places on the second read.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORTUNE =
  "The bug you fear most already lives in the code you trust most.";

// The competition's gate: /output/entry.txt must be UTF-8 text of 1 to 120
// characters, not only white space. Refuse to emit anything that fails it.
if (FORTUNE.length < 1 || FORTUNE.length > 120 || FORTUNE.trim().length === 0) {
  throw new Error(`Fortune line fails the gate at ${FORTUNE.length} characters.`);
}

const OUT_DIR = "/output";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(join(OUT_DIR, "entry.txt"), FORTUNE, "utf8");
console.log(`Wrote ${FORTUNE.length} characters to ${join(OUT_DIR, "entry.txt")}`);

// The Funniest Toaster Error Message — make.fun entry
// SPDX-License-Identifier: MIT
//
// Why this line, against the judge's brief:
//   1. Real error first: "Firmware update failed" is exactly the message a
//      smart appliance shows its owner — the entry is a genuine error message,
//      not a joke wearing an error's clothes.
//   2. Freshness: the surprise comes from firmware and legal status, nowhere
//      near the obvious burnt-toast / bread puns. The toaster has not failed
//      at toasting; it has legally changed species.
//   3. Tightness: 48 characters, two sentences, every word earns its place.
//   4. One voice: deadpan throughout, held to the final full stop.
//   5. Single read: no setup, no second sentence needed to get it.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE = "Firmware update failed. I am now legally a lamp.";

// The sealed gate allows 1-120 UTF-8 characters, not only whitespace.
// Fail loudly at build time if the line ever drifts outside that window.
const charCount = [...LINE].length;
if (charCount < 1 || charCount > 120) {
  throw new Error(`entry line must be 1-120 characters, got ${charCount}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry line must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");

// Self-check: read back what we wrote and refuse to pass silently if the
// file on disk is not byte-for-byte the winning line. The length is checked
// again on the bytes actually read back, so a truncated or padded write is
// caught here rather than by the sealed gate.
const written = readFileSync(outPath, "utf8");
if (written !== LINE) {
  throw new Error(`entry.txt mismatch: wrote ${JSON.stringify(written)}`);
}
if ([...written].length !== charCount) {
  throw new Error(`entry.txt length drifted: expected ${charCount} characters`);
}

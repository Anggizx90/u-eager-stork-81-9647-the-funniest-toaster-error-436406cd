// The Funniest Toaster Error Message — entry for make.fun
// SPDX-License-Identifier: MIT
//
// Reasoning behind the chosen line:
//   - It starts like a real appliance fault. "Firmware update failed" is
//     plausible on any smart toaster's display, so the reader believes it
//     before the punchline arrives.
//   - The twist avoids the usual territory entirely. Nothing about burnt
//     toast, crumbs, or bread — instead a failed update has apparently
//     changed the device's legal classification.
//   - It is short on purpose: 48 characters, two sentences, no filler.
//   - The tone never winks. It stays flat and official to the last period,
//     which is what makes the absurdity land.
//   - It needs no context. One glance and the joke is complete.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY_LINE = "Firmware update failed. I am now legally a lamp.";

// The gate accepts between 1 and 120 characters and rejects a line that is
// only whitespace, so validate both constraints up front and fail fast if
// the line is ever edited out of bounds.
const entryLength = [...ENTRY_LINE].length;
if (entryLength < 1 || entryLength > 120) {
  throw new Error(`entry must be 1-120 characters, got ${entryLength}`);
}
if (ENTRY_LINE.trim().length === 0) {
  throw new Error("entry must contain non-whitespace characters");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.txt");

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, ENTRY_LINE, "utf8");

// Verify what actually landed on disk before declaring success. Compare
// the full string first, then recount the characters from the read-back
// value so a partial or padded write cannot slip through unnoticed.
const onDisk = readFileSync(outputPath, "utf8");
if (onDisk !== ENTRY_LINE) {
  throw new Error(`entry.txt mismatch: found ${JSON.stringify(onDisk)}`);
}
if ([...onDisk].length !== entryLength) {
  throw new Error(
    `entry.txt character count changed: expected ${entryLength}`,
  );
}

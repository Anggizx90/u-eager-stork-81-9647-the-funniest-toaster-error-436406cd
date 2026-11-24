# The Funniest Toaster Error Message

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/Anggizx90/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/Anggizx90/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)

This repository is an entry for the [make.fun](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd) bounty **"The Funniest Toaster Error Message"**.

Running the program writes a single line — the funniest error message a
kitchen toaster would show its owner — to `/output/entry.txt`:

> Firmware update failed. I am now legally a lamp.

About the line: the first half reads as a completely ordinary appliance
fault ("Firmware update failed"), and then the second half turns it into
dry bureaucratic absurdity. The toaster has not burned anything or jammed;
a failed update has left it, in its own assessment, legally reclassified
as a lamp. That keeps the joke away from the expected burnt-toast and
bread puns — the humour comes from firmware and legal status instead.
At 48 characters it is tight, deadpan all the way through, and lands in
one read.

## Running the entry

Node 22.18 or later is required (the grader uses Node 22.23.4):

```sh
node main.ts
cat /output/entry.txt
```

Set `MAKEFUN_OUTPUT_DIR` to choose a different output directory; it
defaults to `/output`. The program validates that the line is 1–120
characters and not only whitespace, writes `entry.txt`, then reads the
file back and re-verifies both the exact text and its character count.

## License

MIT — see [LICENSE](LICENSE).

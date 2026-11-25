// SPDX-License-Identifier: MIT
// Two Lines to Your Past Self — program/v1 entry (Node 22, standard library only).
// Writes exactly two lines to /output/entry.txt: line one warns a past self about
// one specific moment in a single sentence; line two says in one sentence why
// that moment mattered and what changed because of it.
// The gate takes UTF-8 text of 1 to 280 characters, not only white space.
// This text is 278 characters / 280 bytes, exactly two lines, one sentence per
// line, with no trailing newline, and both grader runs write identical bytes.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const LINE_ONE =
  "When Mum, peeling potatoes at the sink, says, 'Write this down before you forget,' don't laugh and say 'I'll remember' — write down how she seasons her rendang.";
const LINE_TWO =
  'Because after her stroke she could point at the pot but not find the words, and nobody has made it taste right since.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), [LINE_ONE, LINE_TWO].join('\n'));

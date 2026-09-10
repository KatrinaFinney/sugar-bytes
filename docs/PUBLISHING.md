# Sugar Bytes publishing workflow

## Dev Voices
1. Record the interview and obtain guest approval for name, role, company, quotes, and media.
2. Add one `Episode` object to `lib/editorial.ts` with `series: "Dev Voices"`.
3. Add the YouTube URL when published. The archive card and `/dev-voices/[slug]` page are generated from the same entry.
4. Add interview questions, topics, and takeaways so the episode can also feed short-form clips and synthesis reports.

## Developer Tea
1. Capture one strong question at an event with several developers.
2. Add each publishable interview as an `Episode` with `series: "Developer Tea"` and the event/location fields.
3. Use the same material for individual clips and a montage.

## DX Check
1. Complete the developer journey before publishing: sign up, authenticate, follow the quickstart, build something, trigger failure states, recover, and document friction.
2. Add one `DxCheck` object to `lib/editorial.ts`.
3. Record observations for the shared scorecard plus wins, friction, and recommendations.

The site intentionally ships with empty arrays until real interviews and hands-on reviews exist. This keeps the public proof accurate while making publication fast once content is ready.

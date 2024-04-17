import 'dotenv/config';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const run = async () => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" })
  const prompt = buildPrompt(notes)

  const result = await model.generateContent(prompt)
  const response = await result.response
  const text = response.text()
  console.log(text)
}

const buildPrompt = (notes) => {
  return `
  My goal is to create exciting, user-focused release notes for a quarterly update of the Flutter software development kit. Please analyze the provided commit history and focus on changes that directly impact how developers build apps with Flutter. Here's the format I'd like:

  **Format**

  * **Cool short feature name:** A catchy, informative title highlighting the key benefit.
  * **Description of the feature that is relevant to end users of the SDK and exciting:** A concise description explaining what the feature does and why developers should care. Keep it non-technical and focus on how it improves the app-building experience.

  **Instructions**

  1. **Prioritize Visibility:** Focus on updates that end users of apps built with Flutter are likely to notice (e.g., new UI elements, performance improvements, smoother animations).
  2. **Emphasize Benefits:** Explain how each change makes app development easier, faster, or unlocks new possibilities.
  3. **Be Creative:**  Use engaging language and try to frame the features in a way that generates excitement.
  4. **Condense:** Keep descriptions brief and to the point.
  5. **Limit Results:** Provide only the top 10 most impactful and exciting features in the specified format.

  **Commit History:**
  * **${notes}**
  `
};

const notes = `
Framework

## What's Changed
### Framework
* Disable test shuffling in widget_tester_leaks_test.dart by @zanderso in [141110](https://github.com/flutter/flutter/pull/141110)
* Fix spell check throws when text contains regex reserved characters by @bleroux in [140384](https://github.com/flutter/flutter/pull/140384)
* Remove conditions that depend on order. by @polina-c in [141183](https://github.com/flutter/flutter/pull/141183)
* Upgrade leak_tracker. by @polina-c in [141153](https://github.com/flutter/flutter/pull/141153)
* Update \`RouteObserver\` example and fix an error thrown by @TahaTesser in [141166](https://github.com/flutter/flutter/pull/141166)
* Introduce new Form validation method  by @SharbelOkzan in [135578](https://github.com/flutter/flutter/pull/135578)
* Reapply "Dynamic view sizing" (#140165) by @goderbauer in [140918](https://github.com/flutter/flutter/pull/140918)
* Correctly handle null case in ProcessText.queryTextActions by @kevmoo in [141205](https://github.com/flutter/flutter/pull/141205)
* TextStyle: In copyWith, stop ignoring debugLabel when receiver has none by @chrisbobbe in [141141](https://github.com/flutter/flutter/pull/141141)
* \`NestedScrollView\`'s outer scrollable jumping with \`BouncingScrollPhysics\` due to \`double\` precision errors by @Michal-MK in [138319](https://github.com/flutter/flutter/pull/138319)
* Improve testing for leak tracking. by @polina-c in [140553](https://github.com/flutter/flutter/pull/140553)
* Fix mechanism to pass flag for leak tracking. by @polina-c in [141226](https://github.com/flutter/flutter/pull/141226)
* Call onPopInvoked when pages API is used by @justinmc in [141221](https://github.com/flutter/flutter/pull/141221)
* Add covariants to reduce subclass casts in 2D APIs by @Piinks in [141318](https://github.com/flutter/flutter/pull/141318)
* Fix a leak. by @polina-c in [141312](https://github.com/flutter/flutter/pull/141312)
* Add dart fix support to flutter_driver by @Piinks in [141300](https://github.com/flutter/flutter/pull/141300)
* Add impeller key to skia gold client, Turn on a framework test shard that will run unit tests with --enable-impeller by @jonahwilliams in [141341](https://github.com/flutter/flutter/pull/141341)
* Fix \`ListWheelScrollView\` in an \`AnimatedContainer\` with zero height throw an error by @TahaTesser in [141372](https://github.com/flutter/flutter/pull/141372)
* Fix typo by @QuncCccccc in [141426](https://github.com/flutter/flutter/pull/141426)
* unpin web_socket_channel and roll pub packages by @christopherfujino in [141424](https://github.com/flutter/flutter/pull/141424)
* Added newline at end of \`.gitignore\` files by @OutdatedGuy in [141270](https://github.com/flutter/flutter/pull/141270)
* BoxPainter should dispatch creation and disposal events. by @ksokolovskyi in [141526](https://github.com/flutter/flutter/pull/141526)
* Reverts "BoxPainter should dispatch creation and disposal events." by @auto-submit in [141545](https://github.com/flutter/flutter/pull/141545)
* Reference GitHub issue in TODO comment by @bartekpacia in [141582](https://github.com/flutter/flutter/pull/141582)
* Allow selection in composing region by @LongCatIsLooong in [140516](https://github.com/flutter/flutter/pull/140516)
* TrainHoppingAnimation should dispatch creation and disposal events. by @ksokolovskyi in [141635](https://github.com/flutter/flutter/pull/141635)
* [web] prepare for [49786](https://github.com/flutter/engine/pull/49786) by @yjbanov in https://github.com/flutter/flutter/pull/141700
* [web] prepare layers_test.dart for [49786](https://github.com/flutter/engine/pull/49786) by @yjbanov in https://github.com/flutter/flutter/pull/141731
* Enable native compilation for windows-arm64  by @pbo-linaro in [137618](https://github.com/flutter/flutter/pull/137618)
* ScaleGestureRecognizer pointerCount=2 for trackpad gestures by @moffatman in [140745](https://github.com/flutter/flutter/pull/140745)
* Reverts "Enable native compilation for windows-arm64 " by @auto-submit in [141809](https://github.com/flutter/flutter/pull/141809)
* enable more tests in web mode by @yjbanov in [141791](https://github.com/flutter/flutter/pull/141791)
* Tiny fix inaccurate documentations about bindings by @fzyzcjy in [140282](https://github.com/flutter/flutter/pull/140282)
* Revert "Make tests more resilient to Skia gold failures and refactor flutter_goldens for extensive technical debt removal (#140101)" by @Hixie in [141814](https://github.com/flutter/flutter/pull/141814)
* Mark defaultTargetPlatform as constant for non-debug non-web builds. by @sstrickl in [141105](https://github.com/flutter/flutter/pull/141105)
* Add documentation which explains that \`debugPrint\` also logs in release mode by @ueman in [141595](https://github.com/flutter/flutter/pull/141595)
* Remove unneeded expectation in test by @gspencergoog in [141822](https://github.com/flutter/flutter/pull/141822)
* Do not hang on test failures of tests within \`flutter_tools\` by @matanlurey in [141821](https://github.com/flutter/flutter/pull/141821)
* Remove duplicate code as suggested by natebosch. by @matanlurey in [141988](https://github.com/flutter/flutter/pull/141988)
* Floating cursor docs by @justinmc in [133002](https://github.com/flutter/flutter/pull/133002)
* Enable contextMenuBuilder in the absence of selectionControls by @Hixie in [141810](https://github.com/flutter/flutter/pull/141810)
* Add a comment about how to test flutter_goldens by @Hixie in [141902](https://github.com/flutter/flutter/pull/141902)
* Remove unused clipBehavior from OverflowBar by @goderbauer in [141976](https://github.com/flutter/flutter/pull/141976)
* Merge flutter_goldens_client into flutter_goldens by @Hixie in [141900](https://github.com/flutter/flutter/pull/141900)
* Ignore a leak. by @polina-c in [141737](https://github.com/flutter/flutter/pull/141737)
* Refactor \`external_ui\` → \`external_textures\` by @matanlurey in [142062](https://github.com/flutter/flutter/pull/142062)
* Upgrade leak_tracker. by @polina-c in [142162](https://github.com/flutter/flutter/pull/142162)
* PopScope example improvements by @justinmc in [142163](https://github.com/flutter/flutter/pull/142163)
* Implementing \`switch\` expressions in the \`cupertino/\` directory by @nate-thegrate in [141591](https://github.com/flutter/flutter/pull/141591)
* fix Ink not updating on TextField newline by @NobodyForNothing in [140700](https://github.com/flutter/flutter/pull/140700)
* Enable native compilation for windows-arm64 by @pbo-linaro in [141930](https://github.com/flutter/flutter/pull/141930)
* Instrument ImageInfo. by @polina-c in [141411](https://github.com/flutter/flutter/pull/141411)
* Start renaming by adding a new \`bringup: true\` as an Android emulator. by @matanlurey in [142257](https://github.com/flutter/flutter/pull/142257)
* Fix not disposed ImageInfo in tests. by @polina-c in [142287](https://github.com/flutter/flutter/pull/142287)
`;

run();

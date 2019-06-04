![codeclan_logo](https://user-images.githubusercontent.com/11422619/54070681-ca4c5200-425a-11e9-8cf8-cd6a191bc3cd.png)

# Revision App Bug Tracker

Ref. No. | Bug Description | Resolution | Date Reported
-------- | --------------- | ---------- | -------------
1 | Type error, in reducer | Needed to initialise store as [] | 30/05/2019
2 | Type error, in FlashCard component | Added conditional not to try to render empty array | 30/05/2019
3 | Flipping flashcard causes random re-selection of Q/A | Added conditional not to pick new Q/A on re-render | 30/05/2019
4 | Flipping flashcard on Answer side reveals answer on next card | Reset "isFlipped" for new card | 30/05/2019
5 | No content showing below NavBar | Rearranged router | 31/05/2019
6 | New items not appearing in DB | Update DB _as well as_ state/store | 01/06/2019
7 | Blank study notes can be added | Low priority | 02/06/2019
8 | Flashcards sometimes show blank | Filtered out non Q&A cards | 03/06/2019
9 | Pairs game uses duplicate Q's | Make unique Q array | 03/06/2019
10 | Restart pairs not retrieving new cards | unresolved | 04/06/2019
11 | Study note delete crashes app | Amended reducer & dispatch | 04/06/2019
12 | Pairs game throws error on refresh | unresolved | 04/06/2019

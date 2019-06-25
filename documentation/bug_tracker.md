![codeclan_logo](https://user-images.githubusercontent.com/11422619/54070681-ca4c5200-425a-11e9-8cf8-cd6a191bc3cd.png)

# Revision App Bug Tracker

Ref. No. | Bug Description | Resolution | Date Reported | Closed
-------- | --------------- | ---------- | ------------- | ------
1 | Type error, in reducer | Needed to initialise store as [] | 30/05/2019 | Y
2 | Type error, in FlashCard component | Added conditional not to try to render empty array | 30/05/2019 | Y
3 | Flipping flashcard causes random re-selection of Q/A | Added conditional not to pick new Q/A on re-render | 30/05/2019 | Y
4 | Flipping flashcard on Answer side reveals answer on next card | Reset "isFlipped" for new card | 30/05/2019 | Y
5 | No content showing below NavBar | Rearranged router | 31/05/2019 | Y
6 | New items not appearing in DB | Update DB _as well as_ state/store | 01/06/2019 | Y
7 | Blank study notes can be added | Low priority | 02/06/2019 | N
8 | Flashcards sometimes show blank | Filtered out non Q&A cards | 03/06/2019 | Y
9 | Pairs game uses duplicate Q's | Make unique Q array | 03/06/2019 | Y
10 | Restart pairs not retrieving new cards | unresolved | 04/06/2019 | N
11 | Study note delete crashes app | Amended reducer & dispatch | 04/06/2019 | Y
12 | Pairs game throws error on refresh | Added conditional to render "blank" game | 04/06/2019 | Y
13 | Extra button appears on completion of pairs game | unresolved | 05/06/2019 | N
14 | New study note text area remains populated after subbing | unresolved | 05/06/2019 | N
15 | Very long words overspill study note "post-its" | low priority | 05/06/2019 | N
16 | Scaling: pairs cards don't all fit on screen at >= 100% | unresolved | 05/06/2019 | N
17 | Scaling: lines on flash cards don't all show at some scales | intermittent | 05/06/2019 | N

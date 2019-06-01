use Ogma;

db.dropDatabase();

db.questions.insertMany([

{
  study_note_text:"Note to self - add more study notes to test db",
  type:"study_note",
  topic:"coding"
},
{
  study_note_text:"Note to self - should this really be a big <ul>?",
  type:"study_note",
  topic:"coding"
},
{
  study_note_text:"Note to self - do these study notes need any other fields?",
  type:"study_note",
  topic:"coding"
},
{
  question_text:"What does TDD stand for?",
  answer_text:"Test Driven Development",
  sub_topic:"Programming",
  type:"q_and_a",
  topic:"coding"
},
{
  question_text:"What does HTML stand for?",
  answer_text:"Hypertext Markup Language",
  sub_topic:"HTML",
  type:"q_and_a",
  topic:"coding"
},
{
  question_text:"What does HTTP stand for?",
  answer_text:"Hypertext Transfer Protocol",
  sub_topic:"Internet",
  type:"q_and_a",
  topic:"coding"
},
{
  question_text:"What does JSON stand for?",
  answer_text:"Javascript Object Notation",
  sub_topic:"Javascript",
  type:"q_and_a",
  topic:"coding"
},
{
  question_text:"Who created Javascript?",
  answer_text:"Brendan Eich",
  sub_topic:"Javascript",
  type:"q_and_a",
  topic:"coding"
},
{
  question_text:"Who created the World Wide Web?",
  answer_text:"Tim Berners-Lee",
  sub_topic:"Internet",
  type:"q_and_a",
  topic:"coding"
},
{
  question_text:"What is node.js?",
  answer_text:"A Javascript runtime environment",
  sub_topic:"Javascript",
  type:"q_and_a",
  topic:"coding"
},
{
  question_text:"What are JavaScript Data Types?",
  answer_text:"Number, string, boolean, object and undefined",
  sub_topic:"Javascript",
  type:"q_and_a",
  topic:"coding"
},
{
  question_text:"Which company developed JavaScript?",
  answer_text:"Netscape",
  sub_topic:"Javascript",
  type:"q_and_a",
  topic:"coding"
},
{
  question_text:"Inside which HTML tag can Javascript be written?",
  answer_text:"<script>",
  sub_topic:"HTML",
  type:"q_and_a",
  topic:"coding"
},
{
  question_text:"What does 'this' keyword do in JavaScript?",
  answer_text:"It refers to the object from where it was called",
  sub_topic:"Javascript",
  type:"q_and_a",
  topic:"coding"
},
{
  question_text:"What does CSS stand for?",
  answer_text:"Cascading Style Sheets",
  sub_topic:"CSS",
  type:"q_and_a",
  topic:"coding"
},
{
  question_text:"What is the decimal equivalent of OxFF?",
  answer_text:"255",
  sub_topic:"Javascript",
  type:"q_and_a",
  topic:"coding"
}

])

use Ogma;

db.dropDatabase();

db.questions.insertMany([

{
  study_note_text:"Note to self - add more study notes",
  type:"study_note",
  topic:"coding"
},
{
  study_note_text:"Remember - PDA test on Monday!",
  type:"study_note",
  topic:"coding"
},
{
  study_note_text:"Design documents",
  type:"study_note",
  topic:"coding"
},
{
  study_note_text:"Note to self - should study notes really be a big <ul>?",
  type:"study_note",
  topic:"coding"
},
{
  study_note_text:"Note to self - do study notes need any other fields?",
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
  question_text:"Inside which HTML tag can JavaScript be written?",
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
  question_text:"True or false: is <h1>Text</h1> the right way to make a header in HTML?",
  answer_text:"True",
  sub_topic:"HTML",
  type:"q_and_a",
  topic:"coding"
},
{
  question_text:"What does SQL stand for?",
  answer_text:"Structured Query Language",
  sub_topic:"Database",
  type:"q_and_a",
  topic:"coding"
},
{
  question_text:"Which SQL statement is used to extract data from a database?",
  answer_text:"SELECT",
  sub_topic:"Database",
  type:"q_and_a",
  topic:"coding"
},

{
  question_text:"What's the difference between == and ===?",
  answer_text:"Strict equality (===) requires matching data types, whereas loose equality (==) performs type conversion before comparing",
  sub_topic:"Javascript",
  type:"q_and_a",
  topic:"coding"
},
{
  question_text:"How can you add a comment in a JavaScript?",
  answer_text:"// This is a JavaScript comment",
  sub_topic:"Javascript",
  type:"q_and_a",
  topic:"coding"
},
{
  question_text:"True or false: JavaScript is another name for Java",
  answer_text:"False",
  sub_topic:"Javascript",
  type:"q_and_a",
  topic:"coding"
},
{
  question_text:"Is JavaScript case-sensitive?",
  answer_text:"Yes",
  sub_topic:"Javascript",
  type:"q_and_a",
  topic:"coding"
},
{
  question_text:"How do you daisychain terminal commands?",
  answer_text:"Use a pipe (|) to join unix commands",
  sub_topic:"Unix",
  type:"q_and_a",
  topic:"coding"
},
{
  question_text:"What is encapsulation?",
  answer_text:"A way of restricting direct access to an object's properties",
  sub_topic:"Programming",
  type:"q_and_a",
  topic:"coding"
},
{
  question_text:"What is inheritance?",
  answer_text:"A way of basing an object or class on another object or class, whereby the child retains properties of the parent",
  sub_topic:"Programming",
  type:"q_and_a",
  topic:"coding"
},
{
  question_text:"What is MongoDB's approximate equivalent of a relational database's table?",
  answer_text:"A collection",
  sub_topic:"Database",
  type:"q_and_a",
  topic:"coding"
},
{
  question_text:"Which MongoDB method would you use to add an entry to the database?",
  answer_text:"insertOne()",
  sub_topic:"Database",
  type:"q_and_a",
  topic:"coding"
},

{
  question_text:"What is the decimal equivalent of OxFF?",
  answer_text:"255",
  sub_topic:"Programming",
  type:"q_and_a",
  topic:"coding"
}

])

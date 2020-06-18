const STORE = {
signup: [
  {
    id: '1',
    item: 'chips',   
  },
  {
    id: '2',
    item: 'salsa',
  },
  {
    id: '3',
    item: 'queso',
  },
  {
    id: '4',
    item: 'fajitas',
  },
  {
    id: '5',
    item: 'tortillas',
  },
  {
    id: '6',
    item: 'tea',
  },
  {
    id: '7',
    item: 'lemonade',
  },
],
chat: [
  
     {id:'1', user_name:'bob', user_avatar:'', comment:'How are you?'},
    {id:'2', user_name:'steve', user_avatar:'', comment:'alright, what about you?'},
    {id:'1', user_name:'bob', user_avatar:'', comment:'Fine, what are you guys doing this weekend?'},
    {id:'2', user_name:'steve', user_avatar:'', comment:'nada'},
    {id:'3', user_name:'joe', user_avatar:'', comment:'my text'},


  
],
one_another_users: [
  {id:'1', user_email:'jtliner925@gmail.com', user_password:'jtlagleel', first_name:'JT', last_name:'Liner', user_address:'309 Tallwood Dr. Georgetown, TX 78628', user_bio:'Man, this is a really long story, how much time do you have?', group_id:['1', '2', '3']},
],
groups: [
{id:'1', name:'A-Team', pitch:'RRBC small group. We encourage, support and serve oneAnother', leader_name:'Ray Flores', phone:'512-555-1234', location:'Cake House', time_date:'Tuesdays @ 6pm', more_info:'Don\'t be late!'},
{id:'2', name:'DMI', pitch:'Share your faith and make disciple-makers', leader_name:'Joe Pribyl', phone:'512-222-3456', location:'My House', time_date:'Wednesday @ 6pm', more_info:'Do you have a story like that?'},
{id:'3', name:'DBG', pitch:'Lead others in a bible study that helps them learn to study by themselves', leader_name:'You', phone:'512-234-5555', location:'Anywhere', time_date:'Whenever', more_info:'What are the seven parts of a dbg?'},
],
prayers: [
  {id:'1', group_id:'1', user_id:'1', date_requested: 'last Wedsnesday', request: 'enjoy this weekend, not think about final exam'},
  {id:'2', group_id:'1', user_id:'1', date_requested: 'yesterday', request: 'feeling stressed about final exam'},
  {id:'3', group_id:'1', user_id:'1', date_requested: 'today', request: 'please pray for my dog, fido, swallowed a bone'},
],
events:[
  {id:'1', announcements:'No new anouncements at this time', needed_items:['chips', 'salsa', 'queso', 'fajitas', 'chips', 'tortillas', 'tea'], time_date:'Tuesday @ 6pm', lesson_title: 'The Sinful Woman', bible_passage: 'Luke7:36-50', questions:['What did you like/dislike about the story?', 'What does this say about God/man?', 'Where do you see yourself in the story?', 'How can you apply this passage to your life?'], group_id: '1' },
  {id:'2', announcements:'No new anouncements at this time', needed_items:['hamburger meat', 'buns', 'Doritos', 'Sprite', 'Cheese', 'veggies', 'tea'], time_date:'Tuesday @ 6pm', lesson_title: 'Who Can Come to God?', bible_passage: 'Luke18:9-17', questions:['What did you like/dislike about the story?', 'What does this say about God/man?', 'Where do you see yourself in the story?', 'How can you apply this passage to your life?'], group_id: '1' },
  {id:'3', announcements:'No new anouncements at this time', needed_items:['sandwich meat', 'sliced cheese', 'bread', 'Coke', 'chips', 'veggies', 'brownies'], time_date:'Tuesday @ 6pm', lesson_title: 'Forgiveness', bible_passage: 'Matthew18:21-35', questions:['What did you like/dislike about the story?', 'What does this say about God/man?', 'Where do you see yourself in the story?', 'How can you apply this passage to your life?'], group_id: '1' },
  {id:'4', announcements:'No new anouncements at this time', needed_items:['speghetti', 'noddles', 'garlic bread', 'salad', 'cookies', 'ranch', 'tea'], time_date:'Tuesday @ 6pm', lesson_title: 'Merciful Father', bible_passage: 'Luke15:11-32', questions:['What did you like/dislike about the story?', 'What does this say about God/man?', 'Where do you see yourself in the story?', 'How can you apply this passage to your life?'], group_id: '1' },
  {id:'5', announcements:'No new anouncements at this time', needed_items:['soup', 'crackers', 'bread', 'fruit', 'tea'], time_date:'Tuesday @ 6pm', lesson_title: 'Who is Jesus?', bible_passage: 'Mark2:1-12', questions:['What did you like/dislike about the story?', 'What does this say about God/man?', 'Where do you see yourself in the story?', 'How can you apply this passage to your life?'], group_id: '1' },
  {id:'6', announcements:'No new anouncements at this time', needed_items:['chips', 'salsa', 'queso', 'fajitas', 'chips', 'tortillas', 'tea'], time_date:'Tuesday @ 6pm', lesson_title: 'Crucifixion', bible_passage: 'Luke23:32-50', questions:['What did you like/dislike about the story?', 'What does this say about God/man?', 'Where do you see yourself in the story?', 'How can you apply this passage to your life?'], group_id: '1' },
  {id:'7', announcements:'No new anouncements at this time', needed_items:['sandwich meat', 'sliced cheese', 'bread', 'Coke', 'chips', 'veggies', 'brownies'], time_date:'Tuesday @ 6pm', lesson_title: 'Born Again', bible_passage: 'John 3:1-21', questions:['What did you like/dislike about the story?', 'What does this say about God/man?', 'Where do you see yourself in the story?', 'How can you apply this passage to your life?'], group_id: '1' },
]
}

export default STORE;
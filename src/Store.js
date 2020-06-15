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

  
],
one_another_users: [
  {id:'1', user_email:'jtliner925@gmail.com', user_password:'jtlagleel', first_name:'JT', last_name:'Liner', user_address:'309 Tallwood Dr. Georgetown, TX 78628', user_bio:'Man, this is a really long story, how much time do you have?', group_name:['A-Team', 'DMI', 'DBG']},
],
groups: [
{id:'1', name:'A-Team', pitch:'RRBC small group. We encourage, support and serve oneAnother', leader_name:'Ray Flores', phone:'512-555-1234', location:'Cake House', time_date:'Tuesdays @ 6pm', more_info:'Don\'t be late!'},
{id:'2', name:'DMI', pitch:'Share your faith and make disciple-makers', leader_name:'Joe Pribyl', phone:'512-222-3456', location:'My House', time_date:'Wednesday @ 6pm', more_info:'Do you have a story like that?'},
{id:'3', name:'DBG', pitch:'Lead others in a bible study that helps them learn to study by themselves', leader_name:'You', phone:'512-234-5555', location:'Anywhere', time_date:'Whenever', more_info:'What are the seven parts of a dbg?'},
]
}

export default STORE;
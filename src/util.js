function getUsers() {
  const users = [
    {
      "id": 1,
      "name": "Hiren Rokadia",
      "age": 35,
      "city": "Chicago"
    },
    {
      "id": 2,
      "name": "Rahul Rokadia",
      "age": 30,
      "city": "Los Angeles"
    },
    {
      "id": 3,
      "name": "Hiren Barot",
      "age": 25,
      "city": "Florida"
    },
    {
      "id": 4,
      "name": "Mukesh Kapdia",
      "age": 35,
      "city": "Phoenix"
    },
    {
      "id": 5,
      "name": "Mehul Rao",
      "age": 35,
      "city": "San Hose"
    }
  ];
  return users;
}
function add(a,b){
  return a+b;
}
export {getUsers, add};

import posts from "./tuits.js";
let tuits = posts;

const currentUser = {
  "username": "NASA",
  "handle": "@nasa",
  "image": "nasa.jpg",
};

const templateTuit = {
  ...currentUser,
  "liked": false,
  "time" : "2h",
  "replies": 0,
  "retuits": 0,
  "likes": 0,
  "disliked" : false,
  "dislikes" : 0
}

const createTuit = (req, res) => {
    const newTuit = {
      "_id" : (new Date()).getTime()+'',
      ...req.body,
      ...templateTuit
      

    }
    tuits.push(newTuit);
    res.json(newTuit);
}
const findTuits  = (req, res) => {
    res.json(tuits);
}
const updateTuit = (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updates = req.body;
  const tuitIndex = tuits.findIndex(
    (t) => t._id.toString() === tuitdIdToUpdate)
  tuits[tuitIndex] = 
    {...tuits[tuitIndex], ...updates};
    console.log(updates)
  res.sendStatus(200);
  
}
const deleteTuit = (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  console.log('delete tuit:' + tuitdIdToDelete);
  tuits = tuits.filter((t) =>
    t._id.toString() != tuitdIdToDelete);
   res.sendStatus(200);
}


const TuitsController = (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}

export default TuitsController;

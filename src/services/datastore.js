import Firebase from 'firebase';

// Initialize Firebase
let config = {
  apiKey: 'AIzaSyA-A-tjlerwF_aE8YXx00kYK3J8e9YJ2EQ',
  authDomain: 'skim-cs52-lab3.firebaseapp.com',
  databaseURL: 'https://skim-cs52-lab3.firebaseio.com',
  projectId: 'skim-cs52-lab3',
  storageBucket: 'skim-cs52-lab3.appspot.com',
  messagingSenderId: '169962473848',
};

Firebase.initializeApp(config);
export const database = Firebase.database().ref('/');

// passing data to front end
export function fetchNotesFirebase(callback) {
  Firebase.database().ref('notes').on('value', (snapshot) => {
    const newNoteState = snapshot.val();
    callback(newNoteState);
  });
}

// Delete a note in firebase
export function deleteNotesFirebase(id) {
  Firebase.database().ref('notes').child(id).remove();
}

// Creating a new note & push it to firebase
export function createNoteFirebase(txt) {
  let newNote = {
    title: txt,
    text: '',
    x: 100,
    y: 100,
    zIndex: 0,
  };
  Firebase.database().ref('notes').push(newNote);
}

// Updating notes
export function updateNotesFirebase(id, note) {
  Firebase.database().ref('notes').child(id).update(note);
  // if (fields.x !== 100 || fields.y !== 100) {
  //   console.log('moved!');
  //   Firebase.database().ref('notes').child(id).update({
  //     x: fields.x,
  //     y: fields.y,
  //   });
  // }
}

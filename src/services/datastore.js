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

export function fetchNotesFirebase(callback) {
  Firebase.database().ref('notes').on('value', (snapshot) => {
    const newNoteState = snapshot.val();
    // do something with new note state
    callback(newNoteState);
  });
}

// Deleting notes
export function deleteNotesFirebase() {
  firebase.database().ref('notes').child(id).remove();
}

// Creating a new note
export function createNoteFirebase() {
  firebase.database().ref('notes').on('value', (snapshot) => {
    const newNote = snapshot.val();
  });
}

// Updating notes
export function updateNotesFirebase(id, fields, callback) {
  firebase.database().ref('notes').on('value', (snapshot) => {
  });
}

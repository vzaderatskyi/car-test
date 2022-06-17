import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB6HvTFvY7CnoPbLWc8q7O04mSVBlRs6rI",
  authDomain: "car-test-d3106.firebaseapp.com",
  projectId: "car-test-d3106",
  storageBucket: "car-test-d3106.appspot.com",
  messagingSenderId: "748768547328",
  appId: "1:748768547328:web:4d7c795977532ff160fee5"
};

class Firebase {
	constructor() {
		firebase.initializeApp(firebaseConfig)
	}

	async getCarsCollection() {
		const result = [];
		await firebase.firestore().collection('cars').get().then(snapshot => {
			snapshot.forEach(doc => {
				result.push({...doc.data(), docId: doc.id})
			})
		})
		return result;
	}

	async getCarDocument({ id }) {
		const snapshot = await firebase.firestore().collection('cars').doc(id).get();
  		const data = snapshot.data();
		return data
	}
}

export default new Firebase()
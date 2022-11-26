import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCrjGFkwo6ciGjsvXi-3YiDWhesWx2YQ3w',
  authDomain: 'crwn-db-b3de8.firebaseapp.com',
  projectId: 'crwn-db-b3de8',
  storageBucket: 'crwn-db-b3de8.appspot.com',
  messagingSenderId: '855187134601',
  appId: '1:855187134601:web:2032acda174fd393434e58',
  measurementId: 'G-6N4NBB9LSM',
}
const app = initializeApp(firebaseConfig)

export const auth = getAuth()

export const firestore = getFirestore()
const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => signInWithPopup(auth, provider)

export default app

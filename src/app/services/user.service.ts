import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { addDoc, collection } from '@firebase/firestore';
import User from '../../interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private firestore: Firestore) {}

  async createUser(user: User): Promise<void> {
    const userCollection = collection(this.firestore, 'users');
    await addDoc(userCollection, user);
  }

  getUsers(): Observable<User[]> {
    const userCollection = collection(this.firestore, 'users');
    return collectionData(userCollection, { idField: 'id' }) as Observable<
      User[]
    >;
  }
}

import firebase from 'firebase/app';

export interface Credential {
  id?: string;
  url: string;
  name: string;
  userId: string;
  password: string;
  environment: string;
  tags: string[];
  otherInfo: string;
  useCount: number;
  createdAt?: firebase.firestore.Timestamp;
  modifiedAt?: firebase.firestore.Timestamp;
}

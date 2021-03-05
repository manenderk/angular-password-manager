export interface Credential {
  id?: string;
  url: string;
  name: string;
  userId: string;
  password: string;
  environment: string;
  tags: string[];
  otherInfo: string;
}

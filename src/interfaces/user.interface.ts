export default interface User {
  id?: string;
  name: string | null | undefined;
  CI: null | number;
  password: string | null;
  email: string | null;
  telephone: null | number;
}

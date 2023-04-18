import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;
export type AuthKey = {
  id: string;
  hashed_password: string | null;
  user_id: string;
  primary_key: number;
  expires: number | null;
};
export type AuthSession = {
  id: string;
  user_id: string;
  active_expires: number;
  idle_expires: number;
};
export type AuthUser = {
  id: string;
  username: string;
};
export type Post = {
  id: Generated<string>;
  title: string;
  content: string;
};
export type DB = {
  auth_key: AuthKey;
  auth_session: AuthSession;
  auth_user: AuthUser;
  Post: Post;
};

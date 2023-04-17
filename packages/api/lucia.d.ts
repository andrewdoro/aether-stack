// src/lucia.d.ts
/// <reference types="lucia-auth" />
declare namespace Lucia {
  type Auth = import("@packages/auth").Auth;
  type UserAttributes = {
    username: string;
  };
}

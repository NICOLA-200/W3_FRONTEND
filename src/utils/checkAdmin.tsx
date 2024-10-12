// src/utils/auth.ts
export const checkCredentials = (username: string, password: string): boolean => {
    const validUsername = 'admin';
    const validPassword = '12345';
  
    if (username === validUsername && password === validPassword) {
      return true;
    }
  
    return false;
  };
  
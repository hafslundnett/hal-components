export interface User {
  name: string;
  email: string;
  thumbnail?: {
    data: string;
    encodingType: string;
    fileType: string;
  };
}

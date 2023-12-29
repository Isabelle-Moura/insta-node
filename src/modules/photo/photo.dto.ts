export interface CreatePhotoDto {
   fileName: string;
   mimeType: string;
   user: string; // user ID
}

export interface UpdatePhotoDto {
   fileName?: string;
   mimeType?: string;
}

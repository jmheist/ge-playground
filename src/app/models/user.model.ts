
export interface User {
  id?: string;
  name?: string;
  email?: string;
  exchanges?: [];
  uid?: string;
  isAdmin?: boolean;
  drawnUid?: string;
  nameDrawn?:string;
  tempId?: string; 
  viewedDrawnWishlist?: boolean;
  wishlistCreated?: boolean;
}

export interface User {
  id?: string;
  name?: string;
  email?: string;
  exchanges?: [];
  uid?: string;
  isAdmin?: string;
  drawnUid?: string;
  tempId?: string; 
  viewedDrawnWishlist?: boolean;
  wishlistCreated?: boolean;
}
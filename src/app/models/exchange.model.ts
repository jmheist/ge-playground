export interface Exchange {
  id?: string;
  name?: string;
  date?: {};
  budget?: string;
  nameCount?: "1";
  includeAdmin?: boolean;
  showAdminNames?: boolean;
  adminName?: string;
  adminEmail?: string;
  adminUid?: string;
  exchangees?: [];
  welcomeMessage?: "";
  adminVerifiedEmail?: false;
}
export interface Exchange {
  id?: string;
  name?: string;
  date?: {};
  budget?: string;
  nameCount?: "1";
  includeAdmin?: boolean;
  adminName?: string;
  adminEmail?: string;
  adminUid?: string;
  exchangees?: [];
  welcomeMessage?: string;
}
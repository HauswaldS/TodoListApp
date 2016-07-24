interface Dossier {
  _id?: string;
  title: string;
  description: string;
  taches?:Array<Tache>;
  ownerId: string;
  status: boolean;
  show: string;
}

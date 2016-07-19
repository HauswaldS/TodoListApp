import { Mongo } from 'meteor/mongo';

export let Dossiers = new Mongo.Collection<Dossier>('dossiers');

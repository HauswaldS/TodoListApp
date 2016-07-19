import { Mongo } from 'meteor/mongo';

export let Taches = new Mongo.Collection<Tache>('taches');

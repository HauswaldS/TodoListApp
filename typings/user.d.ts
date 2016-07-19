interface User {
    _id?: string;
    status: string;
    name: string;
    surname: string;
    pseudo: string;
    password: string;
    email: string;
    pictureSrc?: string;
    dossiers?: Array<Dossier>;
}

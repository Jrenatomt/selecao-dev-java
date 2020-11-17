export type  PersonResponse ={
    content: Person[];
    totalPages: number;
}

export type Person = {
    id: number;
    name: string;
    gender: string;
    email: string;
    birthDate: string;
    city: string;
    coutry: string;
    cpf: string;
}
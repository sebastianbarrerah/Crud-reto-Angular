export interface UserInterface {
    _id:      string;
    name:     string;
    email:    string;
    password: string;
    state:    boolean;
    notas:    any[];
    __v:      number;
}

export interface LoginUser {
    email: string;
    password: string
};

export interface RegisterUser {
    email: string;
    password: string;
    name: string;
};


// export interface UserInterface {
//     id:          number;
//     title:       string;
//     price:       number;
//     description: string;
//     category:    Category;
//     image:       string;
//     rating:      Rating;
// }

// export enum Category {
//     Electronics = "electronics",
//     Jewelery = "jewelery",
//     MenSClothing = "men's clothing",
//     WomenSClothing = "women's clothing",
// }

// export interface Rating {
//     rate:  number;
//     count: number;
// }


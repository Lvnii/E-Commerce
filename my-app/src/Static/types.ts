export type Products = {
    id:            number;
    slug:          string;
    name:          string;
    image:         CategoryImage;
    category:      string;
    categoryImage: CategoryImage;
    new:           boolean;
    price:         number;
    description:   string;
    features:      string;
    includes:      Include[];
    gallery:       Gallery;
    others:        Other[];
}

export type CategoryImage = {
    mobile:  string;
    tablet:  string;
    desktop: string;
}

export type Gallery = {
    first:  CategoryImage;
    second: CategoryImage;
    third:  CategoryImage;
}

export type Include = {
    quantity: number;
    item:     string;
}

export type Other = {
    slug:  string;
    name:  string;
    image: CategoryImage;
}

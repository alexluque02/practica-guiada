// Generated by https://quicktype.io
export interface PagedStationList {
    content:          Station[];
    pageable:         Pageable;
    last:             boolean;
    totalElements:    number;
    totalPages:       number;
    size:             number;
    number:           number;
    sort:             Sort;
    first:            boolean;
    numberOfElements: number;
    empty:            boolean;
}

export interface Station {
    numero:      number;
    name:        string;
    coordinates: string;
    capacity:    number;
    bikes:       Bike[];
}

export interface Bike {
    uuid:     string;
    nombre:   string;
    marca:    Marca;
    modelo:   string;
    estado:   string;
    usos:     number;
    estacion: string;
}

export enum Marca {
    ChimneyChains = "ChimneyChains",
    FieldCletas = "FieldCletas",
}

export interface Pageable {
    pageNumber: number;
    pageSize:   number;
    sort:       Sort;
    offset:     number;
    unpaged:    boolean;
    paged:      boolean;
}

export interface Sort {
    empty:    boolean;
    sorted:   boolean;
    unsorted: boolean;
}



export interface GaneshData {
    informacoes: {
        "pt-br": Information;
        "en-us": Information;
    };
    noticias: {
        "pt-br": News[];
        "en-us": News[];
    };
}

export interface Information {
    grupo: string;
    subtitulo: string;
    sobre: string[];
}

export interface News {
    titulo: string;
    descricao: string;
}
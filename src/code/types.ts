export type Character = {
    normal: string,
    surprised?: string,
    height: string,
    left: string
}

export type Scene = {
    at?: string,
    say?: string
    who?: Character,
    emo?: string
}

export type Script = Scene[];
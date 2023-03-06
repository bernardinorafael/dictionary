export interface License {
  name: string
  url: string
}

export interface Definition {
  definition: string
  synonyms: any[]
  antonyms: any[]
  example?: string
}

export interface Meaning {
  partOfSpeech: string
  definitions: Definition[]
  synonyms: string[]
  antonyms: any[]
}

export interface Phonetic {
  text: string
  audio: string
  sourceUrl: string
  license: License
}

export interface Word {
  word: string
  phonetic: string
  phonetics: Phonetic[]
  meanings: Meaning[]
  license: License
  sourceUrls: string[]
}

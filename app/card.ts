export interface Card {
  tittle?: string;
  subtittle?: string;
  link?: string;
  description? :string;
  image_story: {
    data: {
      attributes: {
        name: string
      }
    }
  }
}
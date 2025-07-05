export interface Quote {
  id: string;
  author: string;
  category: string;
  text: string;
}

export interface Category {
  id: string;
  title: string;
}

export const categories: Category[] = [
  { id: "all", title: "All" },
  { id: "star-wars", title: "Star Wars" },
  { id: "famous", title: "Famous people" },
  { id: "saying", title: "Saying" },
  { id: "humour", title: "Humour" },
  { id: "motivational", title: "Motivational" }
];

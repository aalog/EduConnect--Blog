export interface BlogEntry {
  title: string;
  author: string;
  date: string;
  intro: string;
  question1: string; // Platforms influence
  question2: string; // Collaboration facilitators/barriers
  question3: string; // Teacher-student relation
  question4: string; // Advantages/Challenges (Accessibility)
  conclusion: string;
  bibliography: string;
  imageUrl: string;
}

export enum ViewState {
  ASSIGNMENT = 'ASSIGNMENT',
  EDITOR = 'EDITOR',
  PREVIEW = 'PREVIEW'
}

export interface AISuggestionRequest {
  prompt: string;
  context: string;
}
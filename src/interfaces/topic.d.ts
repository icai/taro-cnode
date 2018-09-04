import { IAuthor } from "./author";
export interface ITopic {
  id: string;
  title: string;
  tab: string;
  good: boolean;
  top: boolean;
  author: IAuthor;
  reply_count: number;
  visit_count: number;
  create_at: string;
  last_reply_at: string;
}


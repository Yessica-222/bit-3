export interface ArticleInterface {
  id: number;
  title: string;
  description: string;
  cover_image: string;
  url: string;
  slug: string;
  published_at: string;
  tag_list: string[];
  user: {
    name: string;
    profile_image: string;
    username: string;
  };
}

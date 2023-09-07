import { User } from "@/features/user/domain/user.entity";

export type Comment = {
  id: string;
  user: User;
  message: string;
  reactionNumber: number;
  replies: (Comment & { replies: [] })[];
};

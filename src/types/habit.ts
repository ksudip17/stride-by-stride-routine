
export interface Habit {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  streak: number;
  createdAt: Date;
}

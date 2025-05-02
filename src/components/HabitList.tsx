
import React from 'react';
import HabitTile from './HabitTile';
import { Habit } from '@/types/habit';

interface HabitListProps {
  habits: Habit[];
  onToggleHabit: (id: string, completed: boolean) => void;
}

const HabitList: React.FC<HabitListProps> = ({ habits, onToggleHabit }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {habits.map((habit) => (
        <HabitTile
          key={habit.id}
          id={habit.id}
          title={habit.title}
          description={habit.description}
          completed={habit.completed}
          streak={habit.streak}
          onToggle={onToggleHabit}
        />
      ))}
    </div>
  );
};

export default HabitList;

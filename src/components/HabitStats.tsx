
import React from 'react';
import { Habit } from '@/types/habit';

interface HabitStatsProps {
  habits: Habit[];
}

const HabitStats: React.FC<HabitStatsProps> = ({ habits }) => {
  const completedToday = habits.filter(habit => habit.completed).length;
  const totalHabits = habits.length;
  const completion = totalHabits > 0 ? (completedToday / totalHabits) * 100 : 0;
  
  const longestStreak = habits.reduce((max, habit) => Math.max(max, habit.streak), 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-white rounded-xl p-4 shadow-sm border border-border">
        <p className="text-sm text-muted-foreground mb-1">Today's Progress</p>
        <div className="flex items-end gap-1">
          <h3 className="text-2xl font-semibold">{completedToday}/{totalHabits}</h3>
          <p className="text-sm text-muted-foreground pb-0.5">habits</p>
        </div>
      </div>
      
      <div className="bg-white rounded-xl p-4 shadow-sm border border-border">
        <p className="text-sm text-muted-foreground mb-1">Completion Rate</p>
        <div className="flex items-end gap-1">
          <h3 className="text-2xl font-semibold">{completion.toFixed(0)}%</h3>
          <p className="text-sm text-muted-foreground pb-0.5">completed</p>
        </div>
        <div className="mt-2 bg-muted h-2 rounded-full overflow-hidden">
          <div 
            className="bg-habit h-full rounded-full" 
            style={{ width: `${completion}%` }}
          ></div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl p-4 shadow-sm border border-border">
        <p className="text-sm text-muted-foreground mb-1">Longest Streak</p>
        <div className="flex items-end gap-1">
          <h3 className="text-2xl font-semibold">{longestStreak}</h3>
          <p className="text-sm text-muted-foreground pb-0.5">days</p>
        </div>
      </div>
    </div>
  );
};

export default HabitStats;

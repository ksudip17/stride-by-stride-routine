
import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HabitTileProps {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  streak: number;
  onToggle: (id: string, completed: boolean) => void;
}

const HabitTile: React.FC<HabitTileProps> = ({
  id,
  title,
  description,
  completed,
  streak,
  onToggle,
}) => {
  const [isChecked, setIsChecked] = useState(completed);

  const handleToggle = () => {
    const newState = !isChecked;
    setIsChecked(newState);
    onToggle(id, newState);
  };

  return (
    <div className="habit-tile">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <div 
            className={cn("habit-checkbox", isChecked && "checked")}
            onClick={handleToggle}
          >
            <Check className="check-icon w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <h3 className="font-medium text-lg">{title}</h3>
            {description && <p className="text-sm text-muted-foreground">{description}</p>}
          </div>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-xs font-medium bg-habit-light text-habit-dark px-2 py-1 rounded-full">
            {streak} day streak
          </span>
        </div>
      </div>
    </div>
  );
};

export default HabitTile;

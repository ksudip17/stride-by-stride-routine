
import React from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EmptyStateProps {
  onAddClick: () => void;
}

const EmptyState: React.FC<EmptyStateProps> = ({ onAddClick }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 mt-8 border border-dashed border-border rounded-xl">
      <div className="w-12 h-12 bg-habit-light rounded-full flex items-center justify-center mb-4">
        <Calendar className="w-6 h-6 text-habit" />
      </div>
      <h3 className="text-xl font-medium mb-2">No habits yet</h3>
      <p className="text-muted-foreground text-center mb-4">
        Create your first habit to start tracking your daily progress.
      </p>
      <Button onClick={onAddClick} className="bg-habit hover:bg-habit-dark">
        Add Your First Habit
      </Button>
    </div>
  );
};

export default EmptyState;

import React, { useState, useRef } from "react";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";
import { Habit } from "@/types/habit";
import AddHabitDialog from "@/components/AddHabitDialog";
import EmptyState from "@/components/EmptyState";
import HabitStats from "@/components/HabitStats";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

// Initial sample habits
const initialHabits: Habit[] = [
  {
    id: uuidv4(),
    title: "Drink 8 glasses of water",
    description: "Stay hydrated throughout the day",
    completed: false,
    streak: 3,
    createdAt: new Date(),
  },
  {
    id: uuidv4(),
    title: "Read for 30 minutes",
    description: "Read a book, article, or educational content",
    completed: false,
    streak: 7,
    createdAt: new Date(),
  },
  {
    id: uuidv4(),
    title: "Exercise",
    description: "30 minutes of physical activity",
    completed: true,
    streak: 12,
    createdAt: new Date(),
  },
  {
    id: uuidv4(),
    title: "Meditate",
    description: "10 minutes of mindfulness practice",
    completed: false,
    streak: 5,
    createdAt: new Date(),
  },
];

const Tracker = () => {
  const [habits, setHabits] = useState<Habit[]>(initialHabits);
  const dialogTriggerRef = useRef<HTMLButtonElement>(null);

  const handleAddHabit = (title: string, description: string) => {
    const newHabit: Habit = {
      id: uuidv4(),
      title,
      description,
      completed: false,
      streak: 0,
      createdAt: new Date(),
    };

    setHabits([...habits, newHabit]);
    toast.success("Habit created successfully!");
  };

  const handleToggleHabit = (id: string, completed: boolean) => {
    setHabits(
      habits.map((habit) => {
        if (habit.id === id) {
          const streak = completed
            ? habit.streak + 1
            : Math.max(0, habit.streak - 1);
          return { ...habit, completed, streak };
        }
        return habit;
      })
    );

    if (completed) {
      toast.success("Habit completed! Keep it up!");
    }
  };

  const handleDeleteHabit = (id: string) => {
    setHabits(habits.filter((habit) => habit.id !== id));
    toast.success("Habit deleted successfully!");
  };

  const triggerAddHabitDialog = () => {
    if (dialogTriggerRef.current) {
      dialogTriggerRef.current.click();
    }
  };

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f3e8ff] via-[#e0e7ff] to-[#f0fdfa] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-1 text-foreground">
            Habit Tracker
          </h1>
          <p className="text-muted-foreground">{formattedDate}</p>
        </div>

        {habits.length > 0 && <HabitStats habits={habits} />}

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Daily Habits</h2>
          <AddHabitDialog onAddHabit={handleAddHabit} ref={dialogTriggerRef} />
        </div>

        {habits.length > 0 ? (
          <div className="space-y-4">
            {habits.map((habit) => (
              <div
                key={habit.id}
                className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm"
              >
                <div className="flex items-center space-x-4">
                  <input
                    type="checkbox"
                    checked={habit.completed}
                    onChange={(e) =>
                      handleToggleHabit(habit.id, e.target.checked)
                    }
                    className="h-5 w-5 rounded border-gray-300 text-habit-DEFAULT focus:ring-habit-DEFAULT"
                    aria-label={`Mark ${habit.title} as ${
                      habit.completed ? "incomplete" : "complete"
                    }`}
                  />
                  <div>
                    <h3 className="font-medium">{habit.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {habit.description}
                    </p>
                    <p className="text-sm text-habit-DEFAULT">
                      Streak: {habit.streak} days
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                  onClick={() => handleDeleteHabit(habit.id)}
                  aria-label={`Delete ${habit.title}`}
                >
                  <Trash2 className="h-5 w-5" />
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <EmptyState onAddClick={triggerAddHabitDialog} />
        )}
      </div>
    </div>
  );
};

export default Tracker;

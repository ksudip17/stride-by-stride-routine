import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f3e8ff] via-[#e0e7ff] to-[#f0fdfa]">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Build Better Habits with{" "}
              <span className="text-habit-DEFAULT">Stride</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Track your daily habits, build streaks, and achieve your goals
              with our simple and intuitive habit tracker.
            </p>
            <div className="flex justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-black hover:bg-gray-800 text-white font-semibold px-8"
              >
                <Link to="/tracker">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="#features">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-habit-DEFAULT mb-2">
                10k+
              </div>
              <div className="text-gray-300">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-habit-DEFAULT mb-2">
                1M+
              </div>
              <div className="text-gray-300">Habits Tracked</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-habit-DEFAULT mb-2">
                89%
              </div>
              <div className="text-gray-300">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Stride?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-card">
              <h3 className="text-xl font-semibold mb-4">Simple Tracking</h3>
              <p className="text-muted-foreground">
                Easily add and track your daily habits with a clean, intuitive
                interface.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card">
              <h3 className="text-xl font-semibold mb-4">Streak Building</h3>
              <p className="text-muted-foreground">
                Build and maintain streaks to stay motivated and achieve your
                goals.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card">
              <h3 className="text-xl font-semibold mb-4">Progress Insights</h3>
              <p className="text-muted-foreground">
                Get valuable insights into your habit formation journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-habit-DEFAULT rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Create Habits</h3>
              <p className="text-muted-foreground">
                Define the habits you want to build and set your goals.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-habit-DEFAULT rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Track Daily</h3>
              <p className="text-muted-foreground">
                Check off your habits as you complete them each day.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-habit-DEFAULT rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Build Streaks</h3>
              <p className="text-muted-foreground">
                Maintain your streak and watch your progress grow.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-habit-DEFAULT rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Stay Motivated</h3>
              <p className="text-muted-foreground">
                Get insights and celebrate your achievements.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-muted/50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg">
              <p className="text-muted-foreground mb-4">
                "Stride has completely transformed how I approach my daily
                routines. The streak feature keeps me motivated!"
              </p>
              <div className="font-semibold">Sarah M.</div>
              <div className="text-sm text-muted-foreground">
                Software Developer
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <p className="text-muted-foreground mb-4">
                "The simplicity of the app makes it easy to stay consistent with
                my habits. Love the clean interface!"
              </p>
              <div className="font-semibold">James K.</div>
              <div className="text-sm text-muted-foreground">
                Fitness Trainer
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <p className="text-muted-foreground mb-4">
                "Finally found an app that helps me stick to my goals. The
                progress tracking is incredibly motivating."
              </p>
              <div className="font-semibold">Emily R.</div>
              <div className="text-sm text-muted-foreground">Student</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of users who are building better habits with Stride.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-black hover:bg-gray-800 text-white font-semibold px-8"
          >
            <Link to="/tracker">Start Tracking Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;

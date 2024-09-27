'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Users, BarChart, Award, Clock, Flag, Star } from 'lucide-react'

export default function EventPlannerDashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Welcome, Event Planner!</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Events</CardTitle>
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">254</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Participants</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,345</div>
            <p className="text-xs text-muted-foreground">+5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Badges Awarded</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Goal Completion</CardTitle>
            <Flag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <Progress value={78} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          <TabsTrigger value="recent">Recent Events</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Overview of your next 5 events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Tech Conference 2024", date: "2024-06-15", registered: 500, capacity: 1000 },
                  { name: "Charity Gala", date: "2024-06-22", registered: 200, capacity: 300 },
                  { name: "Summer Music Festival", date: "2024-07-01", registered: 5000, capacity: 10000 },
                  { name: "Art Exhibition Opening", date: "2024-07-10", registered: 150, capacity: 200 },
                  { name: "Marathon for a Cause", date: "2024-07-15", registered: 2000, capacity: 5000 },
                ].map((event, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{event.name}</p>
                      <p className="text-sm text-muted-foreground">{new Date(event.date).toLocaleDateString()}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{event.registered} / {event.capacity}</p>
                      <Progress value={(event.registered / event.capacity) * 100} className="w-[100px]" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View All Events</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="recent" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Events</CardTitle>
              <CardDescription>Overview of your last 5 events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Spring Networking Mixer", date: "2024-05-30", attendees: 180, rating: 4.8 },
                  { name: "Product Launch Party", date: "2024-05-25", attendees: 300, rating: 4.9 },
                  { name: "Wellness Workshop", date: "2024-05-20", attendees: 50, rating: 4.7 },
                  { name: "Startup Pitch Night", date: "2024-05-15", attendees: 100, rating: 4.6 },
                  { name: "Community Cleanup Day", date: "2024-05-10", attendees: 75, rating: 4.9 },
                ].map((event, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{event.name}</p>
                      <p className="text-sm text-muted-foreground">{new Date(event.date).toLocaleDateString()}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{event.attendees} attendees</p>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-sm">{event.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View Event Reports</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Badges</CardTitle>
            <CardDescription>Badges with the highest completion rates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Event Master", completions: 500, icon: "🏆" },
                { name: "Networking Guru", completions: 450, icon: "🤝" },
                { name: "Feedback Champion", completions: 400, icon: "📝" },
                { name: "Punctuality Pro", completions: 350, icon: "⏰" },
                { name: "Social Media Star", completions: 300, icon: "📱" },
              ].map((badge, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-2xl mr-2">{badge.icon}</span>
                  <div className="flex-1">
                    <p className="font-medium">{badge.name}</p>
                    <Progress value={(badge.completions / 500) * 100} className="mt-1" />
                  </div>
                  <span className="ml-2 text-sm font-medium">{badge.completions}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Event Goals Progress</CardTitle>
            <CardDescription>Track your event planning objectives</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Increase attendance by 20%", progress: 75 },
                { name: "Achieve 90% positive feedback", progress: 88 },
                { name: "Reduce no-show rate to 5%", progress: 60 },
                { name: "Increase sponsor retention by 15%", progress: 40 },
                { name: "Launch 5 new event types", progress: 80 },
              ].map((goal, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{goal.name}</p>
                    <span className="text-sm font-medium">{goal.progress}%</span>
                  </div>
                  <Progress value={goal.progress} />
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Update Goals</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Clock, BarChart, Award, Target, Zap, Heart } from 'lucide-react'

const impactData = {
  totalHours: 127,
  eventsAttended: 24,
  peopleImpacted: 1500,
  treesPlanted: 50,
  mealsServed: 300,
  booksRead: 75,
  goalProgress: 85,
}

const recentActivities = [
  { name: "Beach Cleanup", date: "2024-03-28", hours: 3, impact: "Collected 50 lbs of trash" },
  { name: "Food Bank Volunteer", date: "2024-03-22", hours: 4, impact: "Packed 200 meal boxes" },
  { name: "Reading to Children", date: "2024-03-15", hours: 2, impact: "Read to 15 children" },
]

const badges = [
  { name: "Environmental Champion", description: "Participated in 10 eco-friendly events", icon: "🌿" },
  { name: "Community Pillar", description: "Volunteered 100+ hours", icon: "🏆" },
  { name: "Education Advocate", description: "Supported 5 educational initiatives", icon: "📚" },
]

export default function ImpactTracker() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Impact Tracker</h1>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="activities">Recent Activities</TabsTrigger>
          <TabsTrigger value="badges">Badges & Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Volunteer Hours</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{impactData.totalHours}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Events Attended</CardTitle>
                <CalendarDays className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{impactData.eventsAttended}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">People Impacted</CardTitle>
                <Heart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{impactData.peopleImpacted}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Goal Progress</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{impactData.goalProgress}%</div>
                <Progress value={impactData.goalProgress} className="mt-2" />
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Detailed Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Trees Planted</span>
                  <Badge variant="outline">{impactData.treesPlanted}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Meals Served</span>
                  <Badge variant="outline">{impactData.mealsServed}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Books Read to Children</span>
                  <Badge variant="outline">{impactData.booksRead}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activities" className="space-y-4">
          {recentActivities.map((activity, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{activity.name}</CardTitle>
                <CardDescription>{new Date(activity.date).toLocaleDateString()}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span>Hours: {activity.hours}</span>
                  <Badge>{activity.impact}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="badges" className="space-y-4">
          {badges.map((badge, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="text-2xl mr-2">{badge.icon}</span>
                  {badge.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{badge.description}</p>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
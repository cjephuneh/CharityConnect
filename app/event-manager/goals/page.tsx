'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import { Plus, Target, TrendingUp, Users, DollarSign, Star, Calendar as CalendarIcon } from 'lucide-react'

const goals = [
  { id: 1, name: "Increase event attendance", target: 10000, current: 7500, category: "Attendance", deadline: "2024-12-31" },
  { id: 2, name: "Boost revenue", target: 500000, current: 350000, category: "Revenue", deadline: "2024-12-31" },
  { id: 3, name: "Improve attendee satisfaction", target: 4.8, current: 4.5, category: "Satisfaction", deadline: "2024-12-31" },
  { id: 4, name: "Expand to new cities", target: 5, current: 2, category: "Expansion", deadline: "2024-12-31" },
  { id: 5, name: "Increase sponsor partnerships", target: 20, current: 12, category: "Partnerships", deadline: "2024-12-31" },
]

export default function Goals() {
  const [activeTab, setActiveTab] = useState('all')
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  const filteredGoals = goals.filter(goal => 
    activeTab === 'all' || goal.category.toLowerCase() === activeTab
  )

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Goals</h1>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create New Goal
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Goal</DialogTitle>
              <DialogDescription>Set a new goal for your event planning</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="goal-name" className="text-right">Name</Label>
                <Input id="goal-name" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="goal-category" className="text-right">Category</Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="attendance">Attendance</SelectItem>
                    <SelectItem value="revenue">Revenue</SelectItem>
                    <SelectItem value="satisfaction">Satisfaction</SelectItem>
                    <SelectItem value="expansion">Expansion</SelectItem>
                    <SelectItem value="partnerships">Partnerships</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="goal-target" className="text-right">Target</Label>
                <Input id="goal-target" type="number" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="goal-deadline" className="text-right">Deadline</Label>
                <div className="col-span-3">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border"
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="goal-description" className="text-right">Description</Label>
                <Textarea id="goal-description" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={() => setIsCreateDialogOpen(false)}>Create Goal</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="all">All Goals</TabsTrigger>
          <TabsTrigger value="attendance">Attendance</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="satisfaction">Satisfaction</TabsTrigger>
          <TabsTrigger value="expansion">Expansion</TabsTrigger>
          <TabsTrigger value="partnerships">Partnerships</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredGoals.map((goal) => (
          <Card key={goal.id}>
            <CardHeader>
              <CardTitle>{goal.name}</CardTitle>
              <CardDescription>{goal.category}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Progress</span>
                  <span>{Math.round((goal.current / goal.target) * 100)}%</span>
                </div>
                <Progress value={(goal.current / goal.target) * 100} />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Current: {goal.current}</span>
                  <span>Target: {goal.target}</span>
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-muted-foreground">
                <CalendarIcon className="mr-2 h-4 w-4" />
                Deadline: {new Date(goal.deadline).toLocaleDateString()}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Update Progress</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Goal Overview</CardTitle>
          <CardDescription>Summary of your current goals and progress</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center space-x-4">
            <Target className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm font-medium">Total Goals</p>
              <p className="text-2xl font-bold">{goals.length}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <TrendingUp className="h-8 w-8 text-green-500" />
            <div>
              <p className="text-sm font-medium">On Track</p>
              <p className="text-2xl font-bold">{goals.filter(g => (g.current / g.target) >= 0.5).length}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Users className="h-8 w-8 text-blue-500" />
            <div>
              <p className="text-sm font-medium">Attendance Goal</p>
              <p className="text-2xl font-bold">75%</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <DollarSign className="h-8 w-8 text-yellow-500" />
            <div>
              <p className="text-sm font-medium">Revenue Goal</p>
              <p className="text-2xl font-bold">70%</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
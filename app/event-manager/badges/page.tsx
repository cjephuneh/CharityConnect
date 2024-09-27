'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Search, Plus, Award, Star, Users, Zap, Target, Briefcase, Book, Heart } from 'lucide-react'

const badges = [
  { id: 1, name: "Event Master", icon: "🏆", description: "Organized 10 successful events", progress: 80, category: "Organizer" },
  { id: 2, name: "Networking Guru", icon: "🤝", description: "Connected with 100 attendees", progress: 65, category: "Attendee" },
  { id: 3, name: "Tech Wizard", icon: "🧙‍♂️", description: "Hosted 5 technology-focused events", progress: 40, category: "Organizer" },
  { id: 4, name: "Feedback Champion", icon: "📝", description: "Provided feedback for 20 events", progress: 90, category: "Attendee" },
  { id: 5, name: "Sustainability Hero", icon: "🌱", description: "Organized 3 eco-friendly events", progress: 30, category: "Organizer" },
  { id: 6, name: "Social Butterfly", icon: "🦋", description: "Attended 15 networking events", progress: 75, category: "Attendee" },
  { id: 7, name: "Innovation Pioneer", icon: "💡", description: "Launched 5 groundbreaking event concepts", progress: 50, category: "Organizer" },
  { id: 8, name: "Community Builder", icon: "🏙️", description: "Engaged 500 community members", progress: 85, category: "Organizer" },
]

export default function Badges() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeTab, setActiveTab] = useState('all')
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)

  const filteredBadges = badges.filter(badge => 
    badge.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (activeTab === 'all' || badge.category.toLowerCase() === activeTab)
  )

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Badges</h1>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create New Badge
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Badge</DialogTitle>
              <DialogDescription>Design a new badge to recognize achievements</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="badge-name" className="text-right">Name</Label>
                <Input id="badge-name" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="badge-icon" className="text-right">Icon</Label>
                <Input id="badge-icon" className="col-span-3" placeholder="Enter an emoji or icon" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="badge-description" className="text-right">Description</Label>
                <Textarea id="badge-description" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="badge-category" className="text-right">Category</Label>
                <select id="badge-category" className="col-span-3 flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option>Organizer</option>
                  <option>Attendee</option>
                </select>
              </div>
            </div>
            <DialogFooter>
              <Button onClick={() => setIsCreateDialogOpen(false)}>Create Badge</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex space-x-4 mb-4">
        <div className="relative flex-grow">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search badges..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="all">All Badges</TabsTrigger>
          <TabsTrigger value="organizer">Organizer Badges</TabsTrigger>
          <TabsTrigger value="attendee">Attendee Badges</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredBadges.map((badge) => (
          <Card key={badge.id}>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="text-4xl">{badge.icon}</div>
                <div>
                  <CardTitle>{badge.name}</CardTitle>
                  <CardDescription>{badge.category}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">{badge.description}</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{badge.progress}%</span>
                </div>
                <Progress value={badge.progress} />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Badge Statistics</CardTitle>
          <CardDescription>Overview of badge distribution and engagement</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center space-x-4">
            <Award className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm font-medium">Total Badges</p>
              <p className="text-2xl font-bold">24</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Star className="h-8 w-8 text-yellow-400" />
            <div>
              <p className="text-sm font-medium">Most Popular</p>
              <p className="text-2xl font-bold">Event Master</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Users className="h-8 w-8 text-green-500" />
            <div>
              <p className="text-sm font-medium">Users with Badges</p>
              <p className="text-2xl font-bold">1,234</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Zap className="h-8 w-8 text-purple-500" />
            <div>
              <p className="text-sm font-medium">Badges Awarded (This Month)</p>
              <p className="text-2xl font-bold">156</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
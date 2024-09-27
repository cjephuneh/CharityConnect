'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { CalendarDays, MapPin, Clock, Users, Search, Filter, Star, Download, Share2 } from 'lucide-react'

const pastEvents = [
  {
    id: 1,
    name: "Annual Tech Summit 2023",
    date: "2023-11-15",
    location: "Convention Center, San Francisco",
    category: "Technology",
    attendees: 1200,
    capacity: 1500,
    rating: 4.8,
    feedback: 450,
    revenue: 75000,
  },
  {
    id: 2,
    name: "Eco-Friendly Product Launch",
    date: "2023-10-22",
    location: "Green Plaza, Portland",
    category: "Environment",
    attendees: 300,
    capacity: 350,
    rating: 4.6,
    feedback: 180,
    revenue: 15000,
  },
  {
    id: 3,
    name: "Global Marketing Conference",
    date: "2023-09-05",
    location: "Business Center, New York",
    category: "Marketing",
    attendees: 800,
    capacity: 1000,
    rating: 4.5,
    feedback: 350,
    revenue: 60000,
  },
  {
    id: 4,
    name: "Wellness and Yoga Retreat",
    date: "2023-08-18",
    location: "Serenity Resort, Bali",
    category: "Health",
    attendees: 100,
    capacity: 120,
    rating: 4.9,
    feedback: 95,
    revenue: 40000,
  },
  {
    id: 5,
    name: "Indie Game Developers Showcase",
    date: "2023-07-30",
    location: "Gaming Arena, Tokyo",
    category: "Gaming",
    attendees: 500,
    capacity: 600,
    rating: 4.7,
    feedback: 300,
    revenue: 25000,
  },
]

export default function PastEvents() {
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('All')
  const [sortBy, setSortBy] = useState('date')

  const filteredAndSortedEvents = pastEvents
    .filter(event => 
      event.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (categoryFilter === 'All' || event.category === categoryFilter)
    )
    .sort((a, b) => {
      if (sortBy === 'date') return new Date(b.date).getTime() - new Date(a.date).getTime()
      if (sortBy === 'rating') return b.rating - a.rating
      if (sortBy === 'revenue') return b.revenue - a.revenue
      return 0
    })

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Past Events</h1>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Export Events Data
        </Button>
      </div>

      <div className="flex space-x-4">
        <div className="relative flex-grow">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search events..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Categories</SelectItem>
            <SelectItem value="Technology">Technology</SelectItem>
            <SelectItem value="Environment">Environment</SelectItem>
            <SelectItem value="Marketing">Marketing</SelectItem>
            <SelectItem value="Health">Health</SelectItem>
            <SelectItem value="Gaming">Gaming</SelectItem>
          </SelectContent>
        </Select>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="date">Date</SelectItem>
            <SelectItem value="rating">Rating</SelectItem>
            <SelectItem value="revenue">Revenue</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredAndSortedEvents.map((event) => (
          <Card key={event.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{event.name}</CardTitle>
              <CardDescription>{event.category}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="space-y-2">
                <div className="flex items-center">
                  <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                  <span className="text-sm">{new Date(event.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4 opacity-70" />
                  <span className="text-sm">{event.location}</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-2 h-4 w-4 opacity-70" />
                  <span className="text-sm">{event.attendees} / {event.capacity} attended</span>
                </div>
                <div className="flex items-center">
                  <Star className="mr-2 h-4 w-4 text-yellow-400" />
                  <span className="text-sm">{event.rating.toFixed(1)} ({event.feedback} reviews)</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-semibold">Revenue: ${event.revenue.toLocaleString()}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="justify-between">
              <Button variant="outline">
                <Share2 className="mr-2 h-4 w-4" />
                Share Report
              </Button>
              <Button>View Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarDays, MapPin, Clock, Users, Search, Filter } from 'lucide-react'

const upcomingEvents = [
  {
    id: 1,
    name: "Beach Cleanup",
    date: "2024-04-15",
    time: "09:00 AM - 12:00 PM",
    location: "Sunny Beach",
    category: "Environment",
    spotsLeft: 5,
    image: "/placeholder.svg?height=100&width=200&text=Beach+Cleanup"
  },
  {
    id: 2,
    name: "Food Bank Volunteer",
    date: "2024-04-22",
    time: "02:00 PM - 05:00 PM",
    location: "Community Center",
    category: "Community Service",
    spotsLeft: 3,
    image: "/placeholder.svg?height=100&width=200&text=Food+Bank"
  },
  {
    id: 3,
    name: "Tree Planting",
    date: "2024-05-01",
    time: "10:00 AM - 02:00 PM",
    location: "City Park",
    category: "Environment",
    spotsLeft: 10,
    image: "/placeholder.svg?height=100&width=200&text=Tree+Planting"
  },
  {
    id: 4,
    name: "Elderly Care Visit",
    date: "2024-05-05",
    time: "01:00 PM - 04:00 PM",
    location: "Sunshine Retirement Home",
    category: "Healthcare",
    spotsLeft: 8,
    image: "/placeholder.svg?height=100&width=200&text=Elderly+Care"
  },
  {
    id: 5,
    name: "Children's Reading Hour",
    date: "2024-05-10",
    time: "10:00 AM - 11:30 AM",
    location: "Public Library",
    category: "Education",
    spotsLeft: 6,
    image: "/placeholder.svg?height=100&width=200&text=Reading+Hour"
  }
]

export default function UpcomingEvents() {
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('All')

  const filteredEvents = upcomingEvents.filter(event => 
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (categoryFilter === 'All' || event.category === categoryFilter)
  )

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Upcoming Events</h1>
        <Button>Create Event</Button>
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
            <SelectItem value="Environment">Environment</SelectItem>
            <SelectItem value="Community Service">Community Service</SelectItem>
            <SelectItem value="Healthcare">Healthcare</SelectItem>
            <SelectItem value="Education">Education</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredEvents.map((event) => (
          <Card key={event.id} className="overflow-hidden">
            <img src={event.image} alt={event.name} className="w-full h-48 object-cover" />
            <CardHeader>
              <CardTitle>{event.name}</CardTitle>
              <CardDescription>{event.category}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                  <span className="text-sm">{new Date(event.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4 opacity-70" />
                  <span className="text-sm">{event.time}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4 opacity-70" />
                  <span className="text-sm">{event.location}</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-2 h-4 w-4 opacity-70" />
                  <span className="text-sm">{event.spotsLeft} spots left</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="justify-between">
              <Button variant="outline">Sign Up</Button>
              <Badge variant="secondary">{event.category}</Badge>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
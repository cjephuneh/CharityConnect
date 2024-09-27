'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarDays, MapPin, Clock, Users, Search, Filter, Star } from 'lucide-react'

const pastEvents = [
  {
    id: 1,
    name: "City Marathon Volunteer",
    date: "2024-03-10",
    time: "06:00 AM - 02:00 PM",
    location: "City Center",
    category: "Sports",
    participantsCount: 50,
    image: "/placeholder.svg?height=100&width=200&text=City+Marathon",
    impact: "Supported 1000+ runners",
    rating: 4.8
  },
  {
    id: 2,
    name: "Community Garden Planting",
    date: "2024-03-22",
    time: "09:00 AM - 01:00 PM",
    location: "Greenville Park",
    category: "Environment",
    participantsCount: 30,
    image: "/placeholder.svg?height=100&width=200&text=Community+Garden",
    impact: "Planted 200 trees and shrubs",
    rating: 4.9
  },
  {
    id: 3,
    name: "Homeless Shelter Meal Service",
    date: "2024-03-28",
    time: "05:00 PM - 08:00 PM",
    location: "Hope Shelter",
    category: "Community Service",
    participantsCount: 20,
    image: "/placeholder.svg?height=100&width=200&text=Meal+Service",
    impact: "Served meals to 150 individuals",
    rating: 4.7
  }
]

export default function PastEvents() {
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('All')

  const filteredEvents = pastEvents.filter(event => 
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (categoryFilter === 'All' || event.category === categoryFilter)
  )

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Past Events</h1>

      <div className="flex space-x-4">
        <div className="relative flex-grow">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search past events..."
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
            <SelectItem value="Sports">Sports</SelectItem>
            <SelectItem value="Environment">Environment</SelectItem>
            <SelectItem value="Community Service">Community Service</SelectItem>
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
                  <span className="text-sm">{event.participantsCount} participants</span>
                </div>
                <div className="flex items-center">
                  <Star className="mr-2 h-4 w-4 text-yellow-400" />
                  <span className="text-sm">{event.rating} / 5.0</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex-col items-start space-y-2">
              <Badge variant="secondary" className="mb-2">{event.category}</Badge>
              <p className="text-sm font-medium">Impact: {event.impact}</p>
              <Button variant="outline" className="w-full">View Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
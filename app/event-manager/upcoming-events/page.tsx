'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, MapPin, Clock, Users, Search, Filter, BarChart, AlertTriangle } from 'lucide-react'

const upcomingEvents = [
  {
    id: 1,
    name: "Tech Conference 2024",
    date: "2024-06-15",
    time: "09:00 AM - 05:00 PM",
    location: "Convention Center, New York",
    category: "Technology",
    registeredCount: 500,
    capacity: 1000,
    status: "On Track",
  },
  {
    id: 2,
    name: "Charity Gala",
    date: "2024-06-22",
    time: "07:00 PM - 11:00 PM",
    location: "Grand Hotel Ballroom",
    category: "Fundraising",
    registeredCount: 180,
    capacity: 300,
    status: "Attention Needed",
  },
  {
    id: 3,
    name: "Summer Music Festival",
    date: "2024-07-01",
    time: "12:00 PM - 10:00 PM",
    location: "City Park",
    category: "Entertainment",
    registeredCount: 5000,
    capacity: 10000,
    status: "On Track",
  },
  {
    id: 4,
    name: "Startup Pitch Competition",
    date: "2024-07-10",
    time: "10:00 AM - 04:00 PM",
    location: "Innovation Hub",
    category: "Business",
    registeredCount: 50,
    capacity: 100,
    status: "Low Registration",
  },
  {
    id: 5,
    name: "Wellness Retreat",
    date: "2024-07-15",
    time: "08:00 AM - 06:00 PM",
    location: "Mountain Resort",
    category: "Health",
    registeredCount: 75,
    capacity: 100,
    status: "On Track",
  },
]

export default function UpcomingEvents() {
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('All')
  const [view, setView] = useState('grid')

  const filteredEvents = upcomingEvents.filter(event => 
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (categoryFilter === 'All' || event.category === categoryFilter)
  )

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Upcoming Events</h1>
        <Button>+ Create New Event</Button>
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
            <SelectItem value="Fundraising">Fundraising</SelectItem>
            <SelectItem value="Entertainment">Entertainment</SelectItem>
            <SelectItem value="Business">Business</SelectItem>
            <SelectItem value="Health">Health</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex rounded-md shadow-sm">
          <Button
            variant={view === 'grid' ? 'default' : 'outline'}
            onClick={() => setView('grid')}
            className="rounded-l-md rounded-r-none"
          >
            Grid
          </Button>
          <Button
            variant={view === 'list' ? 'default' : 'outline'}
            onClick={() => setView('list')}
            className="rounded-r-md rounded-l-none"
          >
            List
          </Button>
        </div>
      </div>

      {view === 'grid' ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
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
                    <Clock className="mr-2 h-4 w-4 opacity-70" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 opacity-70" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="mr-2 h-4 w-4 opacity-70" />
                    <span className="text-sm">{event.registeredCount} / {event.capacity} registered</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="justify-between">
                <Badge variant={event.status === 'On Track' ? 'default' : 'destructive'}>
                  {event.status}
                </Badge>
                <Button variant="outline">Manage Event</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredEvents.map((event) => (
            <Card key={event.id}>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>{event.name}</CardTitle>
                  <Badge variant={event.status === 'On Track' ? 'default' : 'destructive'}>
                    {event.status}
                  </Badge>
                </div>
                <CardDescription>{event.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                      <span className="text-sm">{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4 opacity-70" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4 opacity-70" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="mr-2 h-4 w-4 opacity-70" />
                      <span className="text-sm">{event.registeredCount} / {event.capacity} registered</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="justify-end">
                <Button variant="outline">Manage Event</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Calendar, MapPin, Users, Clock, Search, SlidersHorizontal } from 'lucide-react'

export default function EventsPage() {
  const [showFilters, setShowFilters] = useState(false)
  const [distanceFilter, setDistanceFilter] = useState([50])

  const events = [
    { id: 1, title: "Beach Clean-up Marathon", date: "2023-07-15", location: "Coastal Beach", category: "Environment", attendees: 50, duration: 4, image: "https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg" }, // Updated image URL
    { id: 2, title: "City Park Restoration", date: "2023-07-22", location: "Central Park", category: "Community", attendees: 30, duration: 3, image: "https://images.pexels.com/photos/2345678/pexels-photo-2345678.jpeg" }, // Updated image URL
    { id: 3, title: "Charity Fun Run", date: "2023-07-29", location: "Downtown", category: "Health", attendees: 100, duration: 2, image: "https://images.pexels.com/photos/3456789/pexels-photo-3456789.jpeg" }, // Updated image URL
    { id: 4, title: "Food Bank Volunteer Day", date: "2023-08-05", location: "Community Center", category: "Hunger", attendees: 20, duration: 6, image: "https://images.pexels.com/photos/4567890/pexels-photo-4567890.jpeg" }, // Updated image URL
    { id: 5, title: "Animal Shelter Open Day", date: "2023-08-12", location: "City Animal Shelter", category: "Animals", attendees: 40, duration: 5, image: "https://images.pexels.com/photos/5678901/pexels-photo-5678901.jpeg" }, // Updated image URL
    { id: 6, title: "Tech Workshop for Seniors", date: "2023-08-19", location: "Senior Center", category: "Education", attendees: 15, duration: 2, image: "https://images.pexels.com/photos/6789012/pexels-photo-6789012.jpeg" }, // Updated image URL
    { id: 7, title: "Community Gardening Day", date: "2023-08-26", location: "Local Park", category: "Environment", attendees: 25, duration: 4, image: "https://images.pexels.com/photos/7890123/pexels-photo-7890123.jpeg" }, // New event
    { id: 8, title: "Health Awareness Workshop", date: "2023-09-02", location: "Community Hall", category: "Health", attendees: 50, duration: 3, image: "https://images.pexels.com/photos/8901234/pexels-photo-8901234.jpeg" }, // New event
    { id: 9, title: "Animal Rescue Fundraiser", date: "2023-09-09", location: "City Zoo", category: "Animals", attendees: 70, duration: 5, image: "https://images.pexels.com/photos/9012345/pexels-photo-9012345.jpeg" }, // New event
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted px-10">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">Charity Connect</Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/events" className="hover:underline">Events</Link></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Discover Meaningful Events</h1>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="relative flex-1 max-w-xl">
              <Input type="text" placeholder="Search events..." className="pl-10 pr-4 py-2 w-full" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            </div>
            <Button onClick={() => setShowFilters(!showFilters)} variant="outline" className="ml-4">
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>

          {showFilters && (
            <Card className="mb-6">
              <CardContent className="pt-6 ">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 ">Category</label>
                    <Select >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent className='bg-white'>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="environment">Environment</SelectItem>
                        <SelectItem value="community">Community</SelectItem>
                        <SelectItem value="health">Health</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="animals">Animals</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Date Range</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select date range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Any Time</SelectItem>
                        <SelectItem value="today">Today</SelectItem>
                        <SelectItem value="week">This Week</SelectItem>
                        <SelectItem value="month">This Month</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Distance (miles)</label>
                    <Slider
                      value={distanceFilter}
                      onValueChange={setDistanceFilter}
                      max={100}
                      step={1}
                      className="py-4"
                    />
                    <span className="text-sm text-muted-foreground">{distanceFilter} miles</span>
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <Switch id="virtual-events" />
                  <label htmlFor="virtual-events" className="ml-2 text-sm font-medium">
                    Include virtual events
                  </label>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription>{event.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{event.attendees} attendees</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{event.duration} hours</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={`/events/${event.id}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">Load More Events</Button>
        </div>
      </main>

      <footer className="bg-muted py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Charity Connect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
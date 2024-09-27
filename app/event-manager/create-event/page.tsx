'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
// import { TimePicker } from "@/components/ui/time-picker" // Assume we have a custom TimePicker component
// import { MapPicker } from "@/components/ui/map-picker" // Assume we have a custom MapPicker component
import { CalendarDays, MapPin, Users, Palette, Volume2, Camera, Gift } from 'lucide-react'

export default function CreateEvent() {
  const [eventType, setEventType] = useState('physical')
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [time, setTime] = useState('12:00')
  const [location, setLocation] = useState('')
  const [virtualPlatform, setVirtualPlatform] = useState('')
  const [capacity, setCapacity] = useState(100)
  const [theme, setTheme] = useState({ primary: '#3B82F6', secondary: '#10B981' })
  const [volume, setVolume] = useState(50)

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Create a New Event</h1>
      
      <Tabs defaultValue="basics" className="space-y-4">
        <TabsList>
          <TabsTrigger value="basics">Basics</TabsTrigger>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="promotion">Promotion</TabsTrigger>
        </TabsList>
        
        <TabsContent value="basics">
          <Card>
            <CardHeader>
              <CardTitle>Event Basics</CardTitle>
              <CardDescription>Set up the fundamental details of your event</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="event-name">Event Name</Label>
                <Input id="event-name" placeholder="Enter event name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="event-description">Event Description</Label>
                <Textarea id="event-description" placeholder="Describe your event" />
              </div>
              <div className="space-y-2">
                <Label>Event Type</Label>
                <Select value={eventType} onValueChange={setEventType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="physical">Physical Event</SelectItem>
                    <SelectItem value="virtual">Virtual Event</SelectItem>
                    <SelectItem value="hybrid">Hybrid Event</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Date and Time</Label>
                <div className="flex space-x-4">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                  <Input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="border rounded-md"
                  />
                </div>
              </div>
              {eventType !== 'virtual' && (
                <div className="space-y-2">
                  <Label>Location</Label>
                  <Input
                    placeholder="Enter location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="border rounded-md"
                  />
                </div>
              )}
              {eventType !== 'physical' && (
                <div className="space-y-2">
                  <Label htmlFor="virtual-platform">Virtual Platform</Label>
                  <Input id="virtual-platform" placeholder="e.g., Zoom, Google Meet" value={virtualPlatform} onChange={(e) => setVirtualPlatform(e.target.value)} />
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="details">
          <Card>
            <CardHeader>
              <CardTitle>Event Details</CardTitle>
              <CardDescription>Fine-tune the specifics of your event</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Capacity</Label>
                <div className="flex items-center space-x-4">
                  <Slider
                    value={[capacity]}
                    onValueChange={(value) => setCapacity(value[0])}
                    max={1000}
                    step={10}
                  />
                  <span className="w-12 text-center">{capacity}</span>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Event Categories</Label>
                <div className="flex flex-wrap gap-2">
                  {['Business', 'Technology', 'Arts', 'Sports', 'Education', 'Social'].map((category) => (
                    <Button key={category} variant="outline" size="sm">
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <Label>Age Restrictions</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select age restriction" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Ages</SelectItem>
                    <SelectItem value="18+">18+</SelectItem>
                    <SelectItem value="21+">21+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Dress Code</Label>
                <Input placeholder="e.g., Formal, Casual, Costume" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="experience">
          <Card>
            <CardHeader>
              <CardTitle>Event Experience</CardTitle>
              <CardDescription>Customize the look and feel of your event</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Event Theme Colors</Label>
                <div className="flex space-x-4">
                  <div>
                    <Label htmlFor="primary-color">Primary</Label>
                    <Input
                      id="primary-color"
                      type="color"
                      value={theme.primary}
                      onChange={(e) => setTheme({ ...theme, primary: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="secondary-color">Secondary</Label>
                    <Input
                      id="secondary-color"
                      type="color"
                      value={theme.secondary}
                      onChange={(e) => setTheme({ ...theme, secondary: e.target.value })}
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Background Music</Label>
                <div className="flex items-center space-x-4">
                  <Volume2 className="h-4 w-4" />
                  <Slider
                    value={[volume]}
                    onValueChange={(value) => setVolume(value[0])}
                    max={100}
                    step={1}
                  />
                  <span className="w-12 text-center">{volume}%</span>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Virtual Background (for online events)</Label>
                <Input type="file" accept="image/*" />
              </div>
              <div className="space-y-2">
                <Label>Interactive Elements</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Switch id="polls" />
                    <Label htmlFor="polls">Enable Live Polls</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="qa" />
                    <Label htmlFor="qa">Enable Q&A Sessions</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="networking" />
                    <Label htmlFor="networking">Enable Networking Rooms</Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="promotion">
          <Card>
            <CardHeader>
              <CardTitle>Event Promotion</CardTitle>
              <CardDescription>Set up marketing and ticketing for your event</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Event Banner</Label>
                <Input type="file" accept="image/*" />
              </div>
              <div className="space-y-2">
                <Label>Ticket Types</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Input placeholder="Ticket name" className="w-1/2" />
                    <Input type="number" placeholder="Price" className="w-1/4" />
                    <Input type="number" placeholder="Quantity" className="w-1/4" />
                  </div>
                  <Button variant="outline">+ Add Ticket Type</Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Promo Codes</Label>
                <div className="flex items-center space-x-2">
                  <Input placeholder="Code" className="w-1/2" />
                  <Input type="number" placeholder="Discount %" className="w-1/4" />
                  <Button variant="outline">Add</Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Social Media Sharing</Label>
                <div className="flex space-x-2">
                  <Button variant="outline">
                    <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    Facebook
                  </Button>
                  <Button variant="outline">
                    <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                    Twitter
                  </Button>
                  <Button variant="outline">
                    <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z"/></svg>
                    YouTube
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Create Event</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
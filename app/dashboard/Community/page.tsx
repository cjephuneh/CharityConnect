'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, MessageSquare, ThumbsUp, Share2, Search } from 'lucide-react'

const communityPosts = [
  {
    id: 1,
    author: "Jane Doe",
    avatar: "/placeholder.svg?height=40&width=40&text=JD",
    date: "2024-04-01",
    content: "Just finished a beach cleanup event! It's amazing what we can achieve when we come together. #BeachCleanup #VolunteerLife",
    likes: 24,
    comments: 5,
    image: "/placeholder.svg?height=200&width=400&text=Beach+Cleanup"
  },
  {
    id: 2,
    author: "John Smith",
    avatar: "/placeholder.svg?height=40&width=40&text=JS",
    date: "2024-03-30",
    content: "Excited to announce our upcoming tree planting event! Join us in making our city greener. #TreePlanting #GreenCity",
    likes: 18,
    comments: 3,
  },
  {
    id: 3,
    author: "Emily Brown",
    avatar: "/placeholder.svg?height=40&width=40&text=EB",
    date: "2024-03-28",
    content: "Volunteered at the local animal shelter today. These furry friends need our love and care! #AnimalShelter #VolunteerWork",
    likes: 32,
    comments: 7,
    image: "/placeholder.svg?height=200&width=400&text=Animal+Shelter"
  },
]

const upcomingEvents = [
  { name: "Community Garden Day", date: "2024-04-15" },
  { name: "Charity Run for Education", date: "2024-04-22" },
  { name: "Elderly Care Visit", date: "2024-04-29" },
]

const activeVolunteers = [
  { name: "Sarah Johnson", avatar: "/placeholder.svg?height=40&width=40&text=SJ", events: 15 },
  { name: "Michael Lee", avatar: "/placeholder.svg?height=40&width=40&text=ML", events: 12 },
  { name: "Lisa Chen", avatar: "/placeholder.svg?height=40&width=40&text=LC", events: 10 },
]

export default function Community() {
  const [activeTab, setActiveTab] = useState("feed")
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Community</h1>

      <div className="flex justify-between items-center">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList>
            <TabsTrigger value="feed">Community Feed</TabsTrigger>
            <TabsTrigger value="events">Upcoming Events</TabsTrigger>
            <TabsTrigger value="volunteers">Active Volunteers</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search community..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <TabsContent value="feed" className="space-y-4">
        {communityPosts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={post.avatar} alt={post.author} />
                  <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{post.author}</CardTitle>
                  <CardDescription>{new Date(post.date).toLocaleDateString()}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>{post.content}</p>
              {post.image && (
                <img src={post.image} alt="Post image" className="mt-4 rounded-lg w-full" />
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost" size="sm">
                <ThumbsUp className="mr-2 h-4 w-4" />
                {post.likes} Likes
              </Button>
              <Button variant="ghost" size="sm">
                <MessageSquare className="mr-2 h-4 w-4" />
                {post.comments} Comments
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </CardFooter>
          </Card>
        ))}
      </TabsContent>

      <TabsContent value="events" className="space-y-4">
        {upcomingEvents.map((event, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{event.name}</CardTitle>
              <CardDescription>
                <CalendarDays className="inline-block mr-2 h-4 w-4" />
                {new Date(event.date).toLocaleDateString()}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button>Sign Up</Button>
            </CardFooter>
          </Card>
        ))}
      </TabsContent>

      <TabsContent value="volunteers" className="space-y-4">
        {activeVolunteers.map((volunteer, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={volunteer.avatar} alt={volunteer.name} />
                  <AvatarFallback>{volunteer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{volunteer.name}</CardTitle>
                  <CardDescription>{volunteer.events} events attended</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardFooter>
              <Button variant="outline">View Profile</Button>
            </CardFooter>
          </Card>
        ))}
      </TabsContent>
    </div>
  )
}
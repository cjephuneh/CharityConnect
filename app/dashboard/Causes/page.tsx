'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Heart, Users, Globe, BookOpen, Leaf, Droplet } from 'lucide-react'

const causes = [
  {
    id: 1,
    name: "Save the Oceans",
    category: "Environment",
    description: "Help clean our oceans and protect marine life",
    icon: <Droplet className="h-6 w-6" />,
    volunteers: 1200,
    eventsCount: 15,
    progress: 75,
  },
  {
    id: 2,
    name: "Literacy for All",
    category: "Education",
    description: "Support reading programs in underprivileged areas",
    icon: <BookOpen className="h-6 w-6" />,
    volunteers: 800,
    eventsCount: 10,
    progress: 60,
  },
  {
    id: 3,
    name: "Urban Reforestation",
    category: "Environment",
    description: "Plant trees in urban areas to combat climate change",
    icon: <Leaf className="h-6 w-6" />,
    volunteers: 1500,
    eventsCount: 20,
    progress: 80,
  },
  {
    id: 4,
    name: "Global Health Initiative",
    category: "Healthcare",
    description: "Provide medical care to underserved communities",
    icon: <Heart className="h-6 w-6" />,
    volunteers: 1000,
    eventsCount: 12,
    progress: 70,
  },
  {
    id: 5,
    name: "Hunger Relief",
    category: "Community",
    description: "Support food banks and meal programs",
    icon: <Users className="h-6 w-6" />,
    volunteers: 2000,
    eventsCount: 25,
    progress: 85,
  },
]

export default function Causes() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCauses = causes.filter(cause => 
    (activeTab === "all" || cause.category.toLowerCase() === activeTab) &&
    cause.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Causes</h1>

      <div className="flex justify-between items-center">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">All Causes</TabsTrigger>
            <TabsTrigger value="environment">Environment</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search causes..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCauses.map((cause) => (
          <Card key={cause.id}>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  {cause.icon}
                </div>
                <div>
                  <CardTitle>{cause.name}</CardTitle>
                  <CardDescription>{cause.category}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{cause.description}</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{cause.progress}%</span>
                </div>
                <Progress value={cause.progress} />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex space-x-4 text-sm text-muted-foreground">
                <span className="flex items-center">
                  <Users className="mr-1 h-4 w-4" />
                  {cause.volunteers}
                </span>
                <span className="flex items-center">
                  <Globe className="mr-1 h-4 w-4" />
                  {cause.eventsCount} events
                </span>
              </div>
              <Button>Support</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
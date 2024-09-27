'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CalendarDays, Home, Menu, Settings, Users, BarChart, Award, PlusCircle, Clock, Flag, Search, Bell, LogOut } from 'lucide-react'
import Link from 'next/link'

interface SidebarProps {
  className?: string
}

function Sidebar({ className }: SidebarProps) {
  const [activeItem, setActiveItem] = useState('dashboard')

  const menuItems = [
    { name: 'Dashboard', icon: Home, href: '/event-manager' },
    { name: 'Create Event', icon: PlusCircle, href: '/event-manager/create-event' },
    { name: 'Upcoming Events', icon: CalendarDays, href: '/event-manager/upcoming-events' },
    { name: 'Past Events', icon: Clock, href: '/event-manager/past-events' },
    { name: 'User Management', icon: Users, href: '/event-manager/user-management' },
    { name: 'Analytics', icon: BarChart, href: '/event-manager/analytics' },
    { name: 'Badges', icon: Award, href: '/event-manager/badges' },
    { name: 'Goals', icon: Flag, href: '/event-manager/goals' },
    { name: 'Settings', icon: Settings, href: '/event-manager/settings' },
  ]

  return (
    <div className={className}>
      <ScrollArea className="h-full py-6 pl-6 pr-6 ">
        <h2 className="mb-4 text-lg font-semibold">Event Planner Dashboard</h2>
        <nav className="flex flex-col space-y-1 ">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.href} passHref>
              <Button
                variant={activeItem === item.name.toLowerCase() ? "secondary" : "ghost"}
                className={`justify-start ${activeItem === item.name.toLowerCase() ? "bg-gray-200" : "hover:bg-gray-200"}`} // Set background for selected item
                onClick={() => setActiveItem(item.name.toLowerCase())}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.name}
              </Button>
            </Link>
          ))}
        </nav>
      </ScrollArea>
    </div>
  )
}

function Navbar() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="flex items-center space-x-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-0">
              <Sidebar className="w-full" />
            </SheetContent>
          </Sheet>
          <h1 className="text-xl font-semibold">Event Planner Pro</h1>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search events..." className="pl-8 w-64" />
          </div>
          <Button variant="outline" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32&text=EP" alt="@eventplanner" />
                  <AvatarFallback>EP</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Event Planner</p>
                  <p className="text-xs leading-none text-muted-foreground">planner@example.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Users className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}

export default function EventPlannerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar className="hidden md:block w-64 border-r" />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
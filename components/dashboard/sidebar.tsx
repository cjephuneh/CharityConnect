'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { CalendarDays, Home, Menu, Settings, Users, BarChart, Award, Heart } from 'lucide-react'
import Link from 'next/link'

interface SidebarProps {
  className?: string
}

function Sidebar({ className }: SidebarProps) {
  const [activeItem, setActiveItem] = useState('dashboard')

  const menuItems = [
    { name: 'Dashboard', icon: Home, href: '/dashboard' },
    { name: 'Upcoming Events', icon: CalendarDays, href: '/dashboard/upcoming' },
    { name: 'Past Events', icon: Award, href: '/dashboard/past' },
    { name: 'Impact Tracker', icon: BarChart, href: '/dashboard/impact' },
    { name: 'Community', icon: Users, href: '/dashboard/community' },
    { name: 'Causes', icon: Heart, href: '/dashboard/causes' },
    { name: 'Settings', icon: Settings, href: '/dashboard/settings' },
  ]

  return (
    <div className={className}>
      <ScrollArea className="h-full py-6 pl-6 pr-6">
        <h2 className="mb-4 text-lg font-semibold">Volunteer Dashboard</h2>
        <nav className="flex flex-col space-y-1">
          {menuItems.map((item) => (
            <Button
              key={item.name}
              variant={activeItem === item.name.toLowerCase() ? "secondary" : "ghost"}
              className={`justify-start ${activeItem === item.name.toLowerCase() ? "bg-gray-200" : "hover:bg-gray-200"}`} // Set background for selected item
              onClick={() => setActiveItem(item.name.toLowerCase())}
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.name}
            </Button>
          ))}
        </nav>
      </ScrollArea>
    </div>
  )
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden fixed left-4 top-4 z-40">
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <Sidebar className="w-full" />
        </SheetContent>
      </Sheet>
      <Sidebar className="hidden md:block w-64 border-r" />
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  )
}
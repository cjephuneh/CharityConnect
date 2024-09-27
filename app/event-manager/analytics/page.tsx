// 'use client'

// import { useState } from 'react'
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { BarChart, LineChart, PieChart } from "@/components/ui/charts" // Assume we have custom chart components
// import { Calendar } from "@/components/ui/calendar"
// import { DateRange } from "react-day-picker"
// import { addDays, format } from "date-fns"

'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { DateRange } from "react-day-picker"
import { addDays, format } from "date-fns"
import { Download, TrendingUp, Users, DollarSign, Calendar as CalendarIcon, BarChart2, PieChart as PieChartIcon, Activity } from 'lucide-react'

// import { Download, Users, DollarSign, Activity } from 'lucide-react'
import { Bar } from 'react-chartjs-2'
import { Line } from 'react-chartjs-2'
import { Pie } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement, // Register PointElement for Line charts
  LineElement,  // Register LineElement for Line charts
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function Analytics() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: addDays(new Date(), -30),
    to: new Date(),
  })

  const [selectedMetric, setSelectedMetric] = useState("attendees")

  const attendanceData = [
    { date: "2024-03-01", attendees: 150 },
    { date: "2024-03-02", attendees: 220 },
    { date: "2024-03-03", attendees: 180 },
    { date: "2024-03-04", attendees: 240 },
    { date: "2024-03-05", attendees: 280 },
    { date: "2024-03-06", attendees: 300 },
    { date: "2024-03-07", attendees: 350 },
  ]

  const revenueData = [
    { category: "Ticket Sales", value: 50000 },
    { category: "Sponsorships", value: 30000 },
    { category: "Merchandise", value: 15000 },
    { category: "Donations", value: 5000 },
  ]

  const eventTypeData = [
    { type: "Conferences", count: 15 },
    { type: "Workshops", count: 25 },
    { type: "Webinars", count: 40 },
    { type: "Networking", count: 20 },
    { type: "Fundraisers", count: 10 },
  ]

  // Chart data for attendance
  const attendanceChartData = {
    labels: attendanceData.map(data => data.date),
    datasets: [{
      label: 'Attendees',
      data: attendanceData.map(data => data.attendees),
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    }],
  };

  // Chart data for revenue
  const revenueChartData = {
    labels: revenueData.map(data => data.category),
    datasets: [{
      label: 'Revenue',
      data: revenueData.map(data => data.value),
      backgroundColor: 'rgba(255, 206, 86, 0.6)',
    }],
  };

  // Chart data for event types
  const eventTypeChartData = {
    labels: eventTypeData.map(data => data.type),
    datasets: [{
      label: 'Event Types',
      data: eventTypeData.map(data => data.count),
      backgroundColor: 'rgba(153, 102, 255, 0.6)',
    }],
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Export Report
        </Button>
      </div>

      <div className="flex space-x-4 items-center">
        <div className="flex-grow">
          <Calendar
            mode="range"
            selected={dateRange}
            onSelect={setDateRange}
            className="rounded-md border"
          />
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Date Range</h2>
          <p className="text-sm text-muted-foreground">
            {dateRange?.from ? (
              <>
                {format(dateRange.from, "LLL dd, y")} -{" "}
                {dateRange.to ? format(dateRange.to, "LLL dd, y") : ""}
              </>
            ) : (
              "Pick a date range"
            )}
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Events</CardTitle>
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">128</div>
            <p className="text-xs text-muted-foreground">+14% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Attendees</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24,589</div>
            <p className="text-xs text-muted-foreground">+7% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$342,500</div>
            <p className="text-xs text-muted-foreground">+21% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Event Rating</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.7</div>
            <p className="text-xs text-muted-foreground">+0.2 from last month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="attendance" className="space-y-4">
        <TabsList>
          <TabsTrigger value="attendance">Attendance</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="eventTypes">Event Types</TabsTrigger>
        </TabsList>
        <TabsContent value="attendance">
          <Card>
            <CardHeader>
              <CardTitle>Attendance Trends</CardTitle>
              <CardDescription>Daily attendance over the past week</CardDescription>
            </CardHeader>
            <CardContent>
              <Line data={attendanceChartData} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="revenue">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Breakdown</CardTitle>
              <CardDescription>Revenue sources for the selected period</CardDescription>
            </CardHeader>
            <CardContent>
              <Pie data={revenueChartData} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="eventTypes">
          <Card>
            <CardHeader>
              <CardTitle>Event Type Distribution</CardTitle>
              <CardDescription>Breakdown of event types</CardDescription>
            </CardHeader>
            <CardContent>
              <Bar data={eventTypeChartData} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Performance Metrics</CardTitle>
          <CardDescription>Key metrics for your events</CardDescription>
        </CardHeader>
        <CardContent>
          <Select value={selectedMetric} onValueChange={setSelectedMetric}>
            <SelectTrigger className="w-[180px] mb-4">
              <SelectValue placeholder="Select metric" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="attendees">Attendees</SelectItem>
              <SelectItem value="revenue">Revenue</SelectItem>
              <SelectItem value="satisfaction">Satisfaction</SelectItem>
            </SelectContent>
          </Select>
          {/* Placeholder for dynamic chart based on selected metric */}
          <div className="h-[300px] bg-muted rounded-md flex items-center justify-center">
            Chart for {selectedMetric} would be displayed here
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
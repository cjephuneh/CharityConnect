import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function UploadEventPage() {
  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Upload a New Event</CardTitle>
        <CardDescription>Fill out the form below to create a new charity event.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="event-name">Event Name</Label>
              <Input id="event-name" placeholder="Enter the name of your event" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="event-date">Event Date</Label>
              <Input id="event-date" type="date" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="event-time">Event Time</Label>
              <Input id="event-time" type="time" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="event-location">Event Location</Label>
              <Input id="event-location" placeholder="Enter the event location" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="event-category">Event Category</Label>
              <Select>
                <SelectTrigger id="event-category">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="environment">Environment</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="health">Health</SelectItem>
                  <SelectItem value="animals">Animals</SelectItem>
                  <SelectItem value="community">Community</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="event-description">Event Description</Label>
              <Textarea id="event-description" placeholder="Describe your event" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="volunteers-needed">Number of Volunteers Needed</Label>
              <Input id="volunteers-needed" type="number" min="1" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="event-image">Event Image</Label>
              <Input id="event-image" type="file" accept="image/*" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Upload Event</Button>
      </CardFooter>
    </Card>
  )
}
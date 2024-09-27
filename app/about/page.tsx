'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Heart, Users, Globe, Sparkles, Target, Zap, Calendar, MapPin, Award, ChevronRight, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import User from '@/assets/user.jpg'

export default function AboutPage() {
  const [activeValue, setActiveValue] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  const stats = [
    { icon: <Heart className="h-8 w-8 text-primary" />, title: "Events Organized", value: 5000 },
    { icon: <Users className="h-8 w-8 text-primary" />, title: "Volunteers Engaged", value: 100000 },
    { icon: <Globe className="h-8 w-8 text-primary" />, title: "Countries Reached", value: 50 },
  ]

  const teamMembers = [
    { name: "Jane Doe", role: "Founder & CEO", image: "/assets/user.jpg", bio: "Jane has been passionate about connecting volunteers with meaningful opportunities for over a decade. She founded Charity Connect to make volunteering accessible to everyone globally." },
    { name: "John Smith", role: "CTO", image: "/placeholder.svg?height=400&width=400&text=John", bio: "With 15 years of experience in tech, John leads our development team in creating innovative solutions to connect volunteers and charities efficiently across different countries and cultures." },
    { name: "Emily Brown", role: "Global Community Manager", image: "/placeholder.svg?height=400&width=400&text=Emily", bio: "Emily's background in international relations and her enthusiasm for community building make her the perfect liaison between our platform and our diverse global user base." },
    { name: "Carlos Rodriguez", role: "Director of Partnerships", image: "/placeholder.svg?height=400&width=400&text=Carlos", bio: "Carlos brings over 20 years of experience in forming strategic partnerships. He's responsible for expanding Charity Connect's reach through collaborations with international NGOs and corporations." },
  ]

  const missionStatements = [
    { icon: <Sparkles className="h-6 w-6" />, title: "Inspire", content: "We aim to inspire individuals worldwide to take action and make a positive impact in their local and global communities." },
    { icon: <Target className="h-6 w-6" />, title: "Connect", content: "Our platform bridges the gap between passionate volunteers and meaningful charity events across the globe, transcending geographical boundaries." },
    { icon: <Zap className="h-6 w-6" />, title: "Empower", content: "We empower both volunteers and organizations to create lasting change in the world, fostering a global network of changemakers." },
  ]

  const timeline = [
    { year: 2020, event: "Charity Connect founded", description: "Jane Doe launches Charity Connect with a vision to revolutionize volunteering on a global scale." },
    { year: 2021, event: "10,000 volunteers milestone", description: "We celebrate connecting 10,000 volunteers to meaningful events across 10 countries." },
    { year: 2022, event: "Mobile app launch", description: "Our mobile app is released, making it even easier for volunteers worldwide to find and sign up for events." },
    { year: 2023, event: "Global expansion", description: "Charity Connect goes truly global, now connecting volunteers in 50 countries and supporting multiple languages." },
    { year: 2024, event: "AI-powered matching", description: "Launch of AI-driven volunteer matching system, optimizing connections between volunteers and opportunities worldwide." },
  ]

  const faq = [
    { question: "How do I sign up as a volunteer?", answer: "You can sign up as a volunteer by creating an account on our platform. Once registered, you can browse and apply for volunteer opportunities that match your interests and availability, both locally and internationally." },
    { question: "Can organizations from any country post their events on Charity Connect?", answer: "Yes, registered non-profit organizations from any country can post their events on our platform. They need to create an organizer account and submit their events for approval. We support multiple languages to facilitate global participation." },
    { question: "Is there a cost to use Charity Connect?", answer: "Charity Connect is free for individual volunteers worldwide. We offer both free and premium plans for organizations, with the premium plan providing additional features and support for international outreach." },
    { question: "How do you verify the legitimacy of events and organizations across different countries?", answer: "We have a thorough verification process for organizations that includes checking their non-profit status and reviewing their event history, adapting our approach to different legal frameworks worldwide. We also encourage user reviews and ratings to maintain transparency across our global community." },
    { question: "Can I volunteer for international events?", answer: "Charity Connect offers both local and international volunteering opportunities. You can search for virtual volunteer positions or in-person events in other countries if you're able to travel." },
  ]

  const globalInitiatives = [
    { title: "Climate Action Network", description: "Connecting volunteers with environmental projects across the globe to combat climate change." },
    { title: "Education for All", description: "Supporting literacy and education initiatives in underserved communities worldwide." },
    { title: "Global Health Alliance", description: "Coordinating volunteer efforts for health and wellness projects in various countries." },
    { title: "Disaster Response Team", description: "Rapidly mobilizing volunteers for international disaster relief and recovery efforts." },
  ]

  return (
    <div className="space-y-12 py-8 px-20">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">About Charity Connect</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Charity Connect is a global movement dedicated to creating a world where everyone, regardless of their location, can easily contribute to causes they care about. We're making volunteering accessible, enjoyable, and impactful on an international scale.
        </p>
      </section>

      <section className="bg-gray-100 py-12 rounded-lg">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Global Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-background/50 backdrop-blur-sm">
                <CardHeader className="flex flex-col items-center">
                  {stat.icon}
                  <CardTitle className="text-xl mt-4">{stat.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <motion.div
                    className="text-4xl font-bold"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.span
                      key={activeValue}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {activeValue === index ? stat.value.toLocaleString() : '0'}
                    </motion.span>
                    {index === 1 && '+'}
                  </motion.div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button onClick={() => setActiveValue((activeValue + 1) % 3)}>
              Update Stats
            </Button>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Our Global Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missionStatements.map((item, index) => (
            <Card key={index} className="bg-primary text-primary-foreground">
              <CardHeader>
                <div className="mx-auto bg-primary-foreground rounded-full p-3 mb-4">
                  {item.icon}
                </div>
                <CardTitle className="text-center">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center">{item.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Global Team</h2>
        <Tabs defaultValue="member-0" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <TabsTrigger key={index} value={`member-${index}`}>
                {member.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {teamMembers.map((member, index) => (
            <TabsContent key={index} value={`member-${index}`}>
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="rounded-full w-32 h-32 object-cover"
                    />
                    <div>
                      <CardTitle>{member.name}</CardTitle>
                      <CardDescription>{member.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{member.bio}</p>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      <section className="bg-muted py-12 rounded-lg">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Global Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>
            {timeline.map((item, index) => (
              <div key={index} className={`relative mb-8 ${index % 2 === 0 ? 'md:ml-auto md:pl-4' : 'md:mr-auto md:pr-4'} md:w-1/2`}>
                <div className="absolute top-5 -mt-1 rounded-full bg-primary w-4 h-4 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-auto md:right-0 md:translate-x-1/2"></div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="mr-2 h-5 w-5" />
                      {item.year}
                    </CardTitle>
                    <CardDescription>{item.event}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Our Global Reach</h2>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-center">
              <MapPin className="mr-2 h-6 w-6" />
              Countries with Active Volunteers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center">
              <div className="w-full max-w-xs bg-slate-500 rounded-full">
                <Progress value={progress} className="w-full" />
              </div>
              <span className="ml-4 text-2xl font-bold">{progress}/100</span>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Global Initiatives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {globalInitiatives.map((initiative, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{initiative.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{initiative.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Learn More <ChevronRight className="ml-2 h-4 w-4" /></Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faq.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="bg-primary text-primary-foreground py-12 rounded-lg">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Global Mission</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're looking to volunteer locally or internationally, or organize an event that spans borders, Charity Connect is here to support you every step of the way. Together, we can make a difference on a global scale.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" variant="secondary">Find Global Events</Button>
            <Button size="lg" variant="outline">Create an Event</Button>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Global Recognition</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            "United Nations SDG Action Award",
            "Global Volunteering Initiative of the Year",
            "Tech for Good Global Champion"
          ].map((award, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <Award className="mr-2 h-6 w-6 text-primary" />
                  {award}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>Recognized for excellence in fostering global volunteer engagement and creating positive impact worldwide.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="bg-muted mt-12 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Charity Connect</h3>
              <p className="text-sm text-muted-foreground">Connecting volunteers with meaningful opportunities worldwide since 2020.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Home</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">About Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Find Events</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Create Event</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Terms of Service</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Cookie Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">GDPR Compliance</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><Mail className="mr-2 h-4 w-4" /> info@charityconnect.org</li>
                <li className="flex items-center"><Phone className="mr-2 h-4 w-4" /> +254708419386</li>
              </ul>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <span className="sr-only">Facebook</span>
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">&copy; 2024 Charity Connect. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <Badge variant="outline" className="mr-2">English</Badge>
              <Badge variant="outline" className="mr-2">Español</Badge>
              <Badge variant="outline" className="mr-2">Français</Badge>
              <Badge variant="outline">中文</Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
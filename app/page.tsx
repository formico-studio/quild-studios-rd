import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  const workItems = [
    {
      image: "/placeholder.svg?height=300&width=400",
      client: "TechCorp",
      industry: "E-commerce",
    },
    {
      image: "/placeholder.svg?height=300&width=400",
      client: "StartupXYZ",
      industry: "Fintech",
    },
    {
      image: "/placeholder.svg?height=300&width=400",
      client: "DataFlow",
      industry: "Analytics",
    },
    {
      image: "/placeholder.svg?height=300&width=400",
      client: "CreativeStudio",
      industry: "Design",
    },
    {
      image: "/placeholder.svg?height=300&width=400",
      client: "CloudTech",
      industry: "SaaS",
    },
    {
      image: "/placeholder.svg?height=300&width=400",
      client: "Bistro Elite",
      industry: "Food & Beverage",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6 md:p-8">
        <div className="text-xl font-medium">Quild</div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-black rounded-full"></div>
          <div className="w-2 h-2 bg-black rounded-full"></div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 md:px-8 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-6xl md:text-8xl font-bold leading-none mb-8">
                Quild
                <br />
                Studios
              </h1>
              <div className="text-sm text-muted-foreground">hello@quildstudios.com</div>
            </div>
            <div className="md:pt-12">
              <p className="text-lg md:text-xl leading-relaxed">
                Hello, We're a 5-member creative agency specializing in minimal web & app design and workflow
                automation, working remotely with clients worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Our Work Section */}
      <section className="px-6 md:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workItems.map((item, index) => (
              <Card key={index} className="border-0 shadow-none">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] bg-muted rounded-lg mb-4 overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={`${item.client} project`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-medium text-lg mb-1">{item.client}</h3>
                  <p className="text-muted-foreground text-sm">{item.industry}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Our Services Section */}
      <section className="px-6 md:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Services</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="web-development" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">Web Development</h3>
                    <p className="text-muted-foreground text-sm">
                      Beautiful, responsive websites that convert visitors into customers
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="ml-14">
                  <h4 className="font-medium mb-3">What we offer:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                    <li>• Custom Website Design & Development</li>
                    <li>• E-commerce Solutions</li>
                    <li>• Landing Pages that Convert</li>
                    <li>• SEO Optimization & Performance</li>
                    <li>• Progressive Web Applications</li>
                  </ul>
                  <h4 className="font-medium mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-muted text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="app-development" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">App Development</h3>
                    <p className="text-muted-foreground text-sm">
                      Native and cross-platform mobile applications for iOS and Android
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="ml-14">
                  <h4 className="font-medium mb-3">What we offer:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                    <li>• Native iOS & Android Apps</li>
                    <li>• Cross-platform Solutions</li>
                    <li>• UI/UX Design for Mobile</li>
                    <li>• App Store Optimization</li>
                    <li>• Backend Integration</li>
                  </ul>
                  <h4 className="font-medium mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["React Native", "Flutter", "Swift", "Kotlin", "Firebase"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-muted text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="automation-solutions" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">Automation Solutions</h3>
                    <p className="text-muted-foreground text-sm">
                      Streamline your workflows and boost productivity with custom automation
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="ml-14">
                  <h4 className="font-medium mb-3">What we offer:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                    <li>• Business Process Automation</li>
                    <li>• API Integrations</li>
                    <li>• Custom Workflow Solutions</li>
                    <li>• Data Migration & Sync</li>
                    <li>• Third-party Tool Integration</li>
                  </ul>
                  <h4 className="font-medium mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Zapier", "Make", "Python", "Node.js", "REST APIs"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-muted text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <Separator className="my-16" />

      {/* About Us Section */}
      <section className="px-6 md:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">About Us</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-muted-foreground">Developers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1+</div>
              <div className="text-muted-foreground">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-muted-foreground">Clients Closed</div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Contact Us Section */}
      <section className="px-6 md:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Us</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Ready to start your next project? Let's discuss how we can help bring your vision to life.
          </p>
          <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3">Get In Touch</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-8 py-8 border-t">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-sm text-muted-foreground">© 2024 Quild Studios. All rights reserved.</div>
          <div className="text-sm text-muted-foreground">hello@quildstudios.com</div>
        </div>
      </footer>
    </div>
  )
}

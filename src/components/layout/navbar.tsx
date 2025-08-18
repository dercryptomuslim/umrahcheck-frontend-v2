"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { 
  Menu, 
  X, 
  Sparkles, 
  Hotel, 
  DollarSign,
  Phone,
  Globe,
  Shield,
  CheckCircle
} from 'lucide-react'

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn(
        "sticky top-0 z-50 w-full border-b border-emerald-100/50",
        "bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/75",
        "shadow-sm",
        className
      )}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600 flex items-center justify-center shadow-2xl shadow-emerald-500/30">
              <span className="text-2xl text-white drop-shadow-sm">🕌</span>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-3 h-3 text-white" />
            </div>
          </motion.div>
          <div>
            <h1 className="text-2xl font-extrabold bg-gradient-to-r from-emerald-600 via-teal-700 to-cyan-700 bg-clip-text text-transparent tracking-tight">
              UmrahCheck
            </h1>
            <p className="text-xs font-medium text-emerald-600 -mt-1 tracking-wide flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              KI-Hotel-Intelligence
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-emerald-50">
                <Hotel className="w-4 h-4 mr-2" />
                Hotels
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-emerald-500/50 to-emerald-500 p-6 no-underline outline-none focus:shadow-md"
                        href="/hotels"
                      >
                        <Hotel className="h-6 w-6 text-white" />
                        <div className="mb-2 mt-4 text-lg font-medium text-white">
                          Premium Halal Hotels
                        </div>
                        <p className="text-sm leading-tight text-white/90">
                          Handverlesene Hotels mit Halal-Zertifizierung in Makkah & Medina
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/hotels/makkah" title="Hotels in Makkah">
                    Die besten Hotels nahe der Kaaba
                  </ListItem>
                  <ListItem href="/hotels/medina" title="Hotels in Medina">
                    Premium Unterkünfte in Medina
                  </ListItem>
                  <ListItem href="/hotels/budget" title="Budget Hotels">
                    Günstige Optionen für Pilger
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/pricing" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-emerald-50 hover:text-emerald-600 focus:bg-emerald-50 focus:text-emerald-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Preise
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-emerald-50 hover:text-emerald-600 focus:bg-emerald-50 focus:text-emerald-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  <Phone className="w-4 h-4 mr-2" />
                  Kontakt
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden md:flex items-center space-x-4">
          <Badge 
            variant="secondary" 
            className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-0 shadow-md animate-pulse"
          >
            <Shield className="w-3 h-3 mr-1" />
            100% Halal zertifiziert
          </Badge>
          
          <Button
            size="lg"
            className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 text-white font-semibold shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Jetzt kostenlos testen
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4 mt-8">
              <Link 
                href="/hotels" 
                className="flex items-center space-x-2 text-lg font-semibold hover:text-emerald-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Hotel className="w-5 h-5" />
                <span>Hotels</span>
              </Link>
              <Link 
                href="/pricing" 
                className="flex items-center space-x-2 text-lg font-semibold hover:text-emerald-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <DollarSign className="w-5 h-5" />
                <span>Preise</span>
              </Link>
              <Link 
                href="/contact" 
                className="flex items-center space-x-2 text-lg font-semibold hover:text-emerald-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="w-5 h-5" />
                <span>Kontakt</span>
              </Link>
              
              <div className="pt-4 border-t space-y-4">
                <Badge 
                  variant="secondary" 
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-0 shadow-md w-full justify-center py-2"
                >
                  <Shield className="w-3 h-3 mr-1" />
                  100% Halal zertifiziert
                </Badge>
                
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 text-white font-semibold shadow-lg"
                  onClick={() => setIsOpen(false)}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Jetzt kostenlos testen
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-emerald-50 hover:text-emerald-600 focus:bg-emerald-50 focus:text-emerald-600",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { 
  Menu, 
  X, 
  Sparkles, 
  Hotel, 
  TrendingUp,
  Phone,
  Globe,
  Shield,
  CheckCircle,
  Calculator,
  BookOpen,
  Users,
  Zap,
  ArrowRight
} from 'lucide-react';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    {
      name: 'Preisvergleich',
      href: '/preisvergleich',
      icon: Calculator,
      description: 'Ehrliches Feedback zu deinem Angebot'
    },
    {
      name: 'Live Angebote',
      href: '/angebote',
      icon: TrendingUp,
      description: 'Flüge + Hotels budget-optimiert'
    },
    {
      name: 'Blog',
      href: '/blog',
      icon: BookOpen,
      description: 'Spartipps & Umrah-Ratgeber'
    },
    {
      name: 'Tools & Guides',
      href: '/tools',
      icon: BookOpen,
      description: 'Visa, Packliste, Restaurant Guide'
    },
    {
      name: 'Unsere Story',
      href: '/story',
      icon: Users,
      description: 'Transparenz & Gründer-Video'
    },
    {
      name: 'Kontakt',
      href: '/kontakt',
      icon: Phone,
      description: 'Beratung & Support'
    }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn(
        "sticky top-0 z-50 w-full border-b border-primary-gold/20",
        "bg-white/90 backdrop-blur-xl supports-[backdrop-filter]:bg-white/85",
        "shadow-lg shadow-primary-gold/10",
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
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-gold via-gold-hover to-primary-gold flex items-center justify-center shadow-2xl shadow-primary-gold/30">
              <span className="text-2xl text-white drop-shadow-sm">🕌</span>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-primary-gold to-gold-hover rounded-full flex items-center justify-center">
              <CheckCircle className="w-3 h-3 text-white" />
            </div>
          </motion.div>
          <div>
            <h1 className="text-2xl font-extrabold text-dark-blue tracking-tight">
              UmrahCheck
            </h1>
            <p className="text-xs font-medium text-primary-gold -mt-1 tracking-wide flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              KI-Umrah-Beratung
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-dark-blue transition-colors duration-200 rounded-lg hover:bg-cream/50"
            >
              <div className="flex items-center gap-2">
                <item.icon className="w-4 h-4 text-primary-gold group-hover:scale-110 transition-transform" />
                {item.name}
              </div>
              
              {/* Hover tooltip */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-white rounded-lg shadow-lg border border-primary-gold/20 text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 whitespace-nowrap">
                {item.description}
              </div>
            </Link>
          ))}
        </div>

        {/* Desktop CTA + Badge */}
        <div className="hidden lg:flex items-center space-x-3">
          <Badge 
            variant="secondary" 
            className="bg-primary-gold/10 text-primary-gold border border-primary-gold/30 hover:bg-primary-gold/20 transition-colors"
          >
            <Shield className="w-3 h-3 mr-1" />
            100% Halal
          </Badge>
          
          <Button
            size="lg"
            className="cta-gold hover-lift z-50 relative"
            asChild
          >
            <Link href="/lp">
              <Zap className="w-4 h-4" />
              KI-Analyse starten
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-dark-blue">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
            <div className="flex flex-col h-full">
              {/* Mobile Logo */}
              <div className="flex items-center space-x-3 pb-6 border-b border-primary-gold/20">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-gold to-gold-hover flex items-center justify-center">
                  <span className="text-lg text-white">🕌</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-dark-blue">UmrahCheck</h1>
                  <p className="text-xs text-primary-gold">KI-Umrah-Beratung</p>
                </div>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex flex-col space-y-1 mt-6 flex-1">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 p-4 text-gray-700 hover:text-dark-blue hover:bg-cream/50 rounded-lg transition-colors group"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-5 h-5 text-primary-gold group-hover:scale-110 transition-transform" />
                    <div>
                      <span className="font-medium">{item.name}</span>
                      <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </nav>
              
              {/* Mobile CTA Section */}
              <div className="pt-6 border-t border-primary-gold/20 space-y-4">
                <Badge 
                  variant="secondary" 
                  className="bg-primary-gold/10 text-primary-gold border border-primary-gold/30 w-full justify-center py-2"
                >
                  <Shield className="w-3 h-3 mr-1" />
                  100% Halal zertifiziert
                </Badge>
                
                <Button
                  size="lg"
                  className="w-full cta-gold hover-lift"
                  onClick={() => setIsOpen(false)}
                  asChild
                >
                  <Link href="/lp">
                    <Zap className="w-4 h-4" />
                    KI-Analyse starten
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  );
}
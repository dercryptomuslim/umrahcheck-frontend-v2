"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Head from 'next/head'
import { 
  ArrowLeft,
  Clock,
  User,
  Calendar,
  TrendingUp,
  BookOpen,
  Zap
} from 'lucide-react'

const blogPosts = [
  {
    id: 'umrah-preise-sparen',
    title: 'Warum Umrah-Reisen so teuer geworden sind – und wie du trotzdem sparen kannst',
    excerpt: 'Die Kosten für Umrah-Reisen sind in den letzten Jahren drastisch gestiegen. Erfahre die wahren Gründe und wie du trotzdem eine erschwingliche Pilgerreise planst.',
    date: '2024-08-20',
    author: 'Mustafa Ali',
    readTime: '8 Min',
    category: 'Kosten & Sparen',
    featured: true,
    image: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
]

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>UmrahCheck Blog - Spartipps und Ratgeber für deine Umrah-Reise</title>
        <meta name="description" content="Entdecke echte Spartipps, ehrliche Preisanalysen und praktische Ratgeber für deine Umrah-Reise. Von praktizierenden Muslimen für Muslime - transparent und ohne versteckte Verkaufsabsichten." />
        <meta name="keywords" content="Umrah Blog, Umrah Spartipps, Umrah Kosten, günstige Umrah, Umrah Ratgeber, Mekka Reise, Medina Reise, Umrah Planung" />
        <meta property="og:title" content="UmrahCheck Blog - Spartipps und Ratgeber für deine Umrah" />
        <meta property="og:description" content="Echte Spartipps und ehrliche Preisanalysen für deine Umrah-Reise" />
        <meta property="og:url" content="https://umrahcheck.de/blog" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://umrahcheck.de/blog" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-white via-[--cream-light] to-[--sand]">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-[--midnight] to-[--dark-blue] text-white py-16">
        <div className="container mx-auto px-4">
          <Button variant="outline" asChild className="mb-6 border-white text-white hover:bg-white hover:text-[--midnight]">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zur Startseite
            </Link>
          </Button>
          
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">UmrahCheck Blog</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Dein Wegweiser für eine erschwingliche und spirituell erfüllende Umrah-Reise. 
              Echte Einblicke, praktische Tipps und ehrliche Preisanalysen.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        
        {/* Featured Article */}
        {blogPosts.filter(post => post.featured).map((post) => (
          <div
            key={post.id}
            className="max-w-4xl mx-auto mb-16"
          >
            <Card className="overflow-hidden shadow-2xl border-0 bg-white/90 backdrop-blur">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[--primary-gold] text-white px-3 py-1 rounded-full text-sm font-medium">
                      ⭐ Empfohlen
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-sm text-[--primary-gold] mb-3">
                    <BookOpen className="w-4 h-4" />
                    <span className="font-medium">{post.category}</span>
                  </div>
                  
                  <h2 className="text-2xl lg:text-3xl font-bold text-[--midnight] mb-4 leading-tight">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('de-DE')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime} Lesezeit</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="cta-gold hover-lift w-full sm:w-auto"
                    asChild
                  >
                    <Link href={`/blog/${post.id}`}>
                      <Zap className="w-4 h-4 mr-2" />
                      Artikel lesen
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        ))}

        {/* Coming Soon Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-[--cream] to-[--sand] border-[--primary-gold]/30">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-[--primary-gold]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-[--primary-gold]" />
              </div>
              
              <h2 className="text-2xl font-bold text-[--midnight] mb-4">
                Weitere Artikel kommen bald!
              </h2>
              
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Wir arbeiten an weiteren hilfreichen Artikeln rund um Umrah-Planung, 
                Kosteneinsparungen und spirituelle Vorbereitung. Bleib dran!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <div className="bg-white/70 p-4 rounded-lg">
                  <h3 className="font-semibold text-[--midnight] mb-2">Beste Reisezeiten</h3>
                  <p className="text-sm text-gray-600">Wann ist Umrah am günstigsten?</p>
                </div>
                <div className="bg-white/70 p-4 rounded-lg">
                  <h3 className="font-semibold text-[--midnight] mb-2">Hotel-Guide</h3>
                  <p className="text-sm text-gray-600">Die besten Hotels für jeden Geldbeutel</p>
                </div>
                <div className="bg-white/70 p-4 rounded-lg">
                  <h3 className="font-semibold text-[--midnight] mb-2">Spirituelle Vorbereitung</h3>
                  <p className="text-sm text-gray-600">Wie du dich optimal vorbereitest</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-[--midnight] to-[--dark-blue] text-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">
                Bereit für deine Umrah-Planung?
              </h2>
              <p className="text-lg opacity-90 mb-6">
                Lass unsere KI deine perfekte Umrah-Reise zusammenstellen - 
                kostenlos und unverbindlich.
              </p>
              
              <Button 
                size="lg"
                className="bg-[--primary-gold] hover:bg-[--primary-gold-hover] text-[--midnight] font-bold px-8 py-3"
                asChild
              >
                <Link href="/ki-analyse">
                  <Zap className="w-5 h-5 mr-2" />
                  KI-Analyse starten
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
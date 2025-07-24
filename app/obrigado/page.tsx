"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Clock, Phone, Mail, MessageCircle, Home, FileText, Users, Instagram, Facebook, Linkedin, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { trackConversion } from "../components/analytics"
import TrackedButton from "../components/tracked-button"

export default function ThankYouPage() {
  const searchParams = useSearchParams()
  const conversion = searchParams?.get("conversion")

  useEffect(() => {
    // Track the conversion when page loads
    if (conversion) {
      trackConversion("lead_generated", {
        conversion_type: conversion,
        page: "thank_you",
        value: 1,
      })
    }
  }, [conversion])

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <Image src="/logo_branca.webp" alt="Sena Technologies" width={200} height={50} className="h-8 w-auto" />
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/#sobre" className="text-sm font-medium hover:text-cyan-600 transition-colors">
              Sobre
            </Link>
            <Link href="/#servicos" className="text-sm font-medium hover:text-cyan-600 transition-colors">
              Serviços
            </Link>
            <Link href="/#contato" className="text-sm font-medium hover:text-cyan-600 transition-colors">
              Contato
            </Link>
          </nav>

          <TrackedButton
            asChild
            trackingName="voltar_inicio"
            trackingLocation="header_thank_you"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-700 hover:to-purple-700"
          >
            <Link href="/">Voltar ao Início</Link>
          </TrackedButton>
        </div>
      </header>

      <main className="flex-1 py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center space-y-8 mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 mb-6">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>

              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-700">Mensagem Enviada com Sucesso!</Badge>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Obrigado pelo seu{" "}
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                    interesse!
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Recebemos sua mensagem e nossa equipe já está analisando seu projeto. Em breve você receberá uma
                  proposta personalizada.
                </p>
              </div>
            </div>

            {/* Próximos Passos */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Próximos Passos</CardTitle>
                      <CardDescription>O que acontece agora?</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center">
                      <span className="text-cyan-600 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Análise do Projeto</h4>
                      <p className="text-sm text-muted-foreground">
                        Nossa equipe está analisando suas necessidades e preparando uma proposta personalizada.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center">
                      <span className="text-cyan-600 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Contato em até 2 horas</h4>
                      <p className="text-sm text-muted-foreground">
                        Entraremos em contato via WhatsApp ou telefone para esclarecer detalhes e agendar uma reunião.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center">
                      <span className="text-cyan-600 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Proposta Personalizada</h4>
                      <p className="text-sm text-muted-foreground">
                        Você receberá uma proposta detalhada com cronograma, investimento e próximos passos.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4 mt-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="font-semibold text-green-700">Garantia de Resposta</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Comprometemo-nos a responder em até 2 horas úteis. Se não receber nosso contato, ligue
                      diretamente!
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Contatos de Emergência */}
              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl">Precisa falar conosco agora?</CardTitle>
                    <CardDescription>Entre em contato pelos canais abaixo</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <TrackedButton
                      asChild
                      trackingName="whatsapp"
                      trackingLocation="thank_you_page"
                      trackingType="contact"
                      className="w-full justify-start h-12 bg-green-600 hover:bg-green-700"
                    >
                      <Link href="https://wa.me/5511999999999" target="_blank">
                        <MessageCircle className="mr-3 h-5 w-5" />
                        WhatsApp: (11) 99999-9999
                      </Link>
                    </TrackedButton>

                    <TrackedButton
                      asChild
                      variant="outline"
                      trackingName="telefone"
                      trackingLocation="thank_you_page"
                      trackingType="contact"
                      className="w-full justify-start h-12 bg-transparent"
                    >
                      <Link href="tel:+5511999999999">
                        <Phone className="mr-3 h-5 w-5" />
                        Telefone: (11) 99999-9999
                      </Link>
                    </TrackedButton>

                    <TrackedButton
                      asChild
                      variant="outline"
                      trackingName="email"
                      trackingLocation="thank_you_page"
                      trackingType="contact"
                      className="w-full justify-start h-12 bg-transparent"
                    >
                      <Link href="mailto:contato@senatechnologies.com">
                        <Mail className="mr-3 h-5 w-5" />
                        contato@senatechnologies.com
                      </Link>
                    </TrackedButton>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-4">Enquanto você espera...</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                        <span>Confira nossos cases de sucesso</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                        <span>Siga-nos nas redes sociais</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                        <span>Leia nosso blog sobre tecnologia</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Recursos Úteis */}
            <div className="mb-16">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl font-bold">Recursos Úteis</h2>
                <p className="text-xl text-muted-foreground">Enquanto prepara sua proposta, explore nossos recursos</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>Guia Completo</CardTitle>
                    <CardDescription>Como escolher a solução ideal para seu negócio</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <TrackedButton
                      asChild
                      variant="outline"
                      trackingName="ver_servicos"
                      trackingLocation="thank_you_resources"
                      className="w-full bg-transparent"
                    >
                      <Link href="/#servicos">
                        Ver Serviços
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </TrackedButton>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>Depoimentos</CardTitle>
                    <CardDescription>Veja o que nossos clientes falam sobre nós</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <TrackedButton
                      asChild
                      variant="outline"
                      trackingName="ver_depoimentos"
                      trackingLocation="thank_you_resources"
                      className="w-full bg-transparent"
                    >
                      <Link href="/#depoimentos">
                        Ver Depoimentos
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </TrackedButton>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                      <Home className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>Sobre Nós</CardTitle>
                    <CardDescription>Conheça nossa missão, visão e valores</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <TrackedButton
                      asChild
                      variant="outline"
                      trackingName="conhecer_empresa"
                      trackingLocation="thank_you_resources"
                      className="w-full bg-transparent"
                    >
                      <Link href="/#sobre">
                        Conhecer Empresa
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </TrackedButton>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA Final */}
            <div className="text-center bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Tem alguma dúvida urgente?</h3>
              <p className="text-lg opacity-90 mb-6">
                Nossa equipe está disponível para esclarecer qualquer questão sobre seu projeto.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <TrackedButton
                  asChild
                  size="lg"
                  trackingName="whatsapp_urgente"
                  trackingLocation="thank_you_cta"
                  trackingType="contact"
                  className="bg-white text-cyan-600 hover:bg-gray-100"
                >
                  <Link href="https://wa.me/5511999999999" target="_blank">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Falar no WhatsApp
                  </Link>
                </TrackedButton>
                <TrackedButton
                  asChild
                  size="lg"
                  variant="outline"
                  trackingName="voltar_inicio_cta"
                  trackingLocation="thank_you_cta"
                  className="border-white text-white hover:bg-white hover:text-cyan-600 bg-transparent"
                >
                  <Link href="/">
                    <Home className="mr-2 h-5 w-5" />
                    Voltar ao Início
                  </Link>
                </TrackedButton>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Simplificado */}
      <footer className="text-white py-8" style={{ backgroundColor: '#00162D' }}>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo_branca.webp"
                alt="Sena Technologies"
                width={200}
                height={50}
                className="h-6 w-auto brightness-0 invert"
              />
            </div>
            
            <div className="flex items-center space-x-8">
              {/* Links de navegação */}
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <Link href="/" className="hover:text-white transition-colors">
                  Início
                </Link>
                <Link href="/#servicos" className="hover:text-white transition-colors">
                  Serviços
                </Link>
                <Link href="/#contato" className="hover:text-white transition-colors">
                  Contato
                </Link>
              </div>

              {/* Redes Sociais */}
              <div className="flex space-x-3">
                <Link 
                  href="https://instagram.com/senatechnologies" 
                  className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center hover:from-blue-600 hover:to-purple-700 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-4 w-4 text-white" />
                </Link>
                <Link 
                  href="https://facebook.com/senatechnologies" 
                  className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center hover:from-blue-600 hover:to-purple-700 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-4 w-4 text-white" />
                </Link>
                <Link 
                  href="https://linkedin.com/company/senatechnologies" 
                  className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center hover:from-blue-600 hover:to-purple-700 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4 text-white" />
                </Link>
                <Link 
                  href="https://github.com/senatechnologies" 
                  className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center hover:from-blue-600 hover:to-purple-700 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 text-white" />
                </Link>
              </div>
            </div>

            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Sena Technologies</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
